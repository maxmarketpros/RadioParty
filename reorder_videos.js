const fs = require('fs');

// Let's read the file and extract the JSON.
let fileContent = fs.readFileSync('./lib/videos.ts', 'utf-8');
let jsonString = fileContent.replace('export const allVideos =', '').trim();
if (jsonString.endsWith(';')) {
    jsonString = jsonString.slice(0, -1);
}

let videos = JSON.parse(jsonString);

const idOrder = [
    '11JP7zg5VlC_u4jxLFfsrmW13-y0PLxx7',
    '1HoLiZZHwkWgtL8IseYvYZCxHlbW_6vNv',
    '1PRwMDzhIO4_PyMmnbesMshv45pZjwLYp',
    '1VwIFTvhBkyu6aP3UOe9wYflMsrOwx2Qd',
    '1upgjfx5tGA4KpHumf_G7U0eJ6lMUER20',
    '1wRhI6SrD_yQoT4xpvlEbb-xzE1qujPDg',
    '1S8rf4y34MS0kMDDyps85O8ri3P4Etg8K',
    '1iU_vyCq_oiBkKJ4_D7koSg5vLmr3iZXY'
];

const idMap = {
    '11JP7zg5VlC_u4jxLFfsrmW13-y0PLxx7': '1. September',
    '1HoLiZZHwkWgtL8IseYvYZCxHlbW_6vNv': '1. Sweet Caroline',
    '1PRwMDzhIO4_PyMmnbesMshv45pZjwLYp': '2. Journey',
    '1VwIFTvhBkyu6aP3UOe9wYflMsrOwx2Qd': '3. Lady Marmalade',
    '1upgjfx5tGA4KpHumf_G7U0eJ6lMUER20': '4. Give It Too Me',
    '1wRhI6SrD_yQoT4xpvlEbb-xzE1qujPDg': '4. Jungle Boogie',
    '1S8rf4y34MS0kMDDyps85O8ri3P4Etg8K': '4. Sir Duke',
    '1iU_vyCq_oiBkKJ4_D7koSg5vLmr3iZXY': '5. I Wish'
};

const topVideos = [];
const remainingVideos = [];

for (const video of videos) {
    if (idOrder.includes(video.id)) {
        // We will order them later
    } else {
        remainingVideos.push(video);
    }
}

for (const id of idOrder) {
    let video = videos.find(v => v.id === id);
    if (!video) {
        // Fallback for missing ones, though they should be in there.
        video = { id, title: idMap[id], orientation: "Portrait" };
    }
    video.title = idMap[id];
    video.orientation = "Portrait";
    topVideos.push(video);
}

const finalVideos = [...topVideos, ...remainingVideos];

const finalContent = `export const allVideos = ${JSON.stringify(finalVideos, null, 2)};\n`;
fs.writeFileSync('./lib/videos.ts', finalContent, 'utf-8');

console.log("Videos updated successfully!");
