const fs = require('fs');
const path = require('path');

const csvPath = path.join(process.cwd(), 'NEW-VIDEO GOOGLE DRIVE LINKS - Drive Video Links.tsv');
const outputPath = path.join(process.cwd(), 'lib/videos.ts');

try {
    const csvContent = fs.readFileSync(csvPath, 'utf-8');
    const lines = csvContent.split('\n').filter(line => line.trim() !== '');

    const videos = lines.slice(1).map(line => {
        // Splitting by tab (\t) since it is a TSV
        const parts = line.split('\t');

        // Ensure we have enough columns (looking for ID which is at index 3 and Orientation at index 11)
        if (parts.length < 4) return null;

        const rawTitle = parts[1];
        const title = rawTitle
            .replace(/\.mov$/i, '')
            .replace(/\.mp4$/i, '')
            .trim();

        const id = parts[3];

        // Orientation is the last column (index 11 usually, but let's be safe and grab the last part)
        // Or specifically index 11 based on the header
        const orientation = parts[11]?.trim() || 'Landscape'; // Default to Landscape if missing

        if (!id) return null;

        return { title, id, orientation };
    }).filter(v => v !== null);

    const content = `export const allVideos = ${JSON.stringify(videos, null, 2)};\n`;

    fs.writeFileSync(outputPath, content);
    console.log(`Successfully generated lib/videos.ts with ${videos.length} videos.`);
} catch (error) {
    console.error('Error generating video file:', error);
    process.exit(1);
}
