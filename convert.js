import ffmpeg from 'fluent-ffmpeg';
import ffmpegInstaller from '@ffmpeg-installer/ffmpeg';
import path from 'path';

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const inputPath = path.resolve('./public/kodryx_ai_animation.mp4');
const outputPath = path.resolve('./public/kodryx_ai_animation.webm');

console.log('Starting conversion to WebM...');

ffmpeg(inputPath)
    .output(outputPath)
    .videoCodec('libvpx-vp9')
    .outputOptions('-crf 30')
    .outputOptions('-b:v 0')
    .outputOptions('-deadline realtime')
    .on('start', (cmdLine) => console.log('Spawned Ffmpeg with command:', cmdLine))
    .on('progress', (progress) => {
        console.log(`Processing: ${progress.percent ? progress.percent.toFixed(2) : 0}% done`);
    })
    .on('error', (err) => {
        console.error('Error during conversion:', err);
        process.exit(1);
    })
    .on('end', () => {
        console.log('Conversion finished successfully!');
    })
    .run();
