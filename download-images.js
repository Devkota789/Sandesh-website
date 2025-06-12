const https = require('https');
const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir);
}

// Pattern images to download
const patterns = [
    {
        name: 'subtle-pattern.png',
        url: 'https://raw.githubusercontent.com/toptal/subtle-patterns/master/patterns/leaves.png'
    },
    {
        name: 'pattern-leaves.png',
        url: 'https://raw.githubusercontent.com/toptal/subtle-patterns/master/patterns/green-fibers.png'
    },
    {
        name: 'pattern-mountains.png',
        url: 'https://raw.githubusercontent.com/toptal/subtle-patterns/master/patterns/mountains.png'
    },
    {
        name: 'pattern-trees.png',
        url: 'https://raw.githubusercontent.com/toptal/subtle-patterns/master/patterns/tree-bark.png'
    }
];

// Download function
const downloadImage = (url, filename) => {
    const filepath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filepath);

    https.get(url, response => {
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${filename}`);
        });
    }).on('error', err => {
        fs.unlink(filepath);
        console.error(`Error downloading ${filename}: ${err.message}`);
    });
};

// Download all patterns
patterns.forEach(pattern => {
    downloadImage(pattern.url, pattern.name);
}); 