import { promises as fsPromises, existsSync } from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';

const ogImagesSourceDir = 'dist/assets/og-images/';
const ogImagesOutputDir = 'src/assets/og-images/';

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

  const browser = await puppeteer.launch();

  for (const filename of svgFiles) {
    const outputFilename = filename.substring(0, filename.length - 4);
    const jpegPath = path.join(ogImagesOutputDir, `${outputFilename}.jpeg`);

    if (!existsSync(jpegPath)) {
      const page = await browser.newPage();
      await page.setViewport({ width: 1200, height: 630 });
      
      const svgPath = path.resolve(ogImagesSourceDir, filename);
      await page.goto(`file://${svgPath}`);

      await page.screenshot({
        path: jpegPath,
        type: 'jpeg',
        quality: 80,
      });

      console.log(`✅ Converted ${filename} to JPEG.`);
      await page.close();
    }
  }

  await browser.close();
  console.log('✨ JPEG conversion complete.');
};