import { promises as fsPromises, existsSync } from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';

const ogImagesSourceDir = 'dist/assets/og-images/';
const ogImagesOutputDir = 'dist/assets/og-images/';

export const svgToJpeg = async () => {
  // ✅ FIX: Ensure the output directory exists before we start.
  await fsPromises.mkdir(ogImagesOutputDir, { recursive: true });

  if (!existsSync(ogImagesSourceDir)) {
    console.log('⚠ No OG images source directory found, skipping conversion.');
    return;
  }

  const files = await fsPromises.readdir(ogImagesSourceDir);
  const svgFiles = files.filter((file) => file.endsWith('.svg'));

  if (svgFiles.length === 0) {
    console.log('⚠ No SVG images found to convert.');
    return;
  }

  console.log(`🚀 Found ${svgFiles.length} SVG(s) to convert to JPEG...`);

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

 for (const filename of svgFiles) {
    const outputFilename = filename.substring(0, filename.length - 4);
    const jpegPath = path.join(ogImagesOutputDir, `${outputFilename}.jpeg`);

    if (!existsSync(jpegPath)) {
      const page = await browser.newPage();
      
      // We can also bump the deviceScaleFactor to 2 for crispier text rendering
      await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
      
      const svgPath = path.resolve(ogImagesSourceDir, filename);
      
      // 1. Tell Puppeteer to wait until the network is completely idle
      await page.goto(`file://${svgPath}`, { waitUntil: 'networkidle0' });

      // 2. Force a tiny 150ms delay to ensure Chromium has fully painted the fonts and SVG filters
      await new Promise((resolve) => setTimeout(resolve, 150));

      await page.screenshot({
        path: jpegPath,
        type: 'jpeg',
        quality: 90, // Bumped quality slightly to prevent artifacting around the red text
      });

      console.log(`✅ Converted ${filename} to JPEG.`);
      await page.close();
    }
  }

  await browser.close();
  console.log('✨ JPEG conversion complete.');
};