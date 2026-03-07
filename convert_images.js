import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directories = ['./public', './src/assets']; // Add more if needed

async function convertImages() {
    for (const dir of directories) {
        if (!fs.existsSync(dir)) continue;

        console.log(`Processing directory: ${dir}`);
        const files = fs.readdirSync(dir);

        for (const file of files) {
            const ext = path.extname(file).toLowerCase();
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                const inputPath = path.join(dir, file);
                const outputPath = path.join(dir, `${path.parse(file).name}.webp`);

                try {
                    await sharp(inputPath)
                        .webp({ quality: 80 })
                        .toFile(outputPath);
                    console.log(`Converted: ${file} -> ${path.parse(file).name}.webp`);
                } catch (error) {
                    console.error(`Error converting ${file}:`, error);
                }
            }
        }
    }
}

convertImages().then(() => console.log('Image conversion complete.'));
