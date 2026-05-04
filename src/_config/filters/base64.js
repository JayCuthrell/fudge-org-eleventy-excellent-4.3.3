import { readFileSync } from 'node:fs';
import path from 'node:path';

export const base64 = (filePath) => {
  try {
    // Resolve path relative to the root of the project
    const fullPath = path.resolve(filePath);
    const fileBuffer = readFileSync(fullPath);
    return fileBuffer.toString('base64');
  } catch (err) {
    console.error(`🚨 Error converting to base64: ${filePath}`, err);
    return '';
  }
};