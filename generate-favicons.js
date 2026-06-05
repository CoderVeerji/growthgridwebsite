const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'public', 'logo.jpg');
const outputDir = path.join(__dirname, 'src', 'app');

async function generateFavicons() {
  if (!fs.existsSync(inputFile)) {
    console.error('Input file not found:', inputFile);
    return;
  }

  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 }
  ];

  try {
    // Generate PNGs
    for (const item of sizes) {
      await sharp(inputFile)
        .resize(item.size, item.size)
        .toFile(path.join(outputDir, item.name));
      console.log(`Generated ${item.name}`);
    }

    // Generate favicon.ico (using 32x32)
    // Note: A true .ico file is complex to generate in JS without extra libraries, 
    // but sharp can export a 32x32 raw file and in modern browsers, a 32x32 PNG renamed to .ico works fine,
    // or Next.js handles it if we just use favicon.ico as a PNG under the hood.
    // Better yet, we can just save it as favicon.ico directly if sharp supports it (it doesn't officially support .ico output in all versions).
    // Let's just create a 32x32 PNG and rename it to favicon.ico.
    await sharp(inputFile)
      .resize(32, 32)
      .png()
      .toFile(path.join(outputDir, 'favicon.ico'));
    console.log('Generated favicon.ico');

  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateFavicons();
