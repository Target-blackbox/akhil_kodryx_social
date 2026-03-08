import sharp from 'sharp';
import fs from 'fs';

const files = ['public/insta_comment.jpg', 'public/insta_dm.jpg', 'public/insta_live.jpg'];

async function convert() {
    for (const file of files) {
        if (fs.existsSync(file)) {
            const output = file.replace('.jpg', '.webp');
            await sharp(file).webp().toFile(output);
            console.log(`Converted ${file} to ${output}`);
        } else {
            console.log(`File not found: ${file}`);
        }
    }
}

convert();
