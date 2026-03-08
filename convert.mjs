import sharp from 'sharp';
import fs from 'fs';

const files = ['public/insta_comment.png', 'public/insta_dm.png', 'public/insta_live.png'];

async function convert() {
    for (const file of files) {
        if (fs.existsSync(file)) {
            const output = file.replace('.png', '.webp');
            await sharp(file).webp().toFile(output);
            console.log(`Converted ${file} to ${output}`);
        } else {
            console.log(`File not found: ${file}`);
        }
    }
}

convert();
