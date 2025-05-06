const https = require('https');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const url = 'https://humsci.stanford.edu/academics-and-research';
const outputDir = 'src/app/assets/images';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Function to clean filename and ensure proper extension
function cleanFilename(url) {
    // Remove query parameters
    const baseUrl = url.split('?')[0];
    
    // Get the base filename
    let filename = path.basename(baseUrl);
    
    // Handle webp files
    if (filename.endsWith('.webp')) {
        return filename;
    }
    
    // Handle jpg/jpeg files
    if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) {
        return filename;
    }
    
    // Handle png files
    if (filename.endsWith('.png')) {
        return filename;
    }
    
    // Handle gif files
    if (filename.endsWith('.gif')) {
        return filename;
    }
    
    // If no extension is found, try to determine it from the URL
    if (url.includes('.jpg') || url.includes('.jpeg')) {
        return `${filename}.jpg`;
    }
    if (url.includes('.png')) {
        return `${filename}.png`;
    }
    if (url.includes('.gif')) {
        return `${filename}.gif`;
    }
    if (url.includes('.webp')) {
        return `${filename}.webp`;
    }
    
    // Default to jpg if no extension can be determined
    return `${filename}.jpg`;
}

// Keep track of downloaded files to avoid duplicates
const downloadedFiles = new Set();

https.get(url, (res) => {
    let data = '';
    
    res.on('data', (chunk) => {
        data += chunk;
    });
    
    res.on('end', () => {
        const $ = cheerio.load(data);
        const images = $('img');
        let downloadedCount = 0;
        let totalImages = images.length;
        
        images.each((i, elem) => {
            const src = $(elem).attr('src');
            if (src) {
                const imageUrl = src.startsWith('http') ? src : `https://humsci.stanford.edu${src}`;
                let filename = cleanFilename(imageUrl);
                
                // Handle duplicate filenames
                let counter = 1;
                const originalFilename = filename;
                while (downloadedFiles.has(filename)) {
                    const ext = path.extname(originalFilename);
                    const base = path.basename(originalFilename, ext);
                    filename = `${base}-${counter}${ext}`;
                    counter++;
                }
                
                downloadedFiles.add(filename);
                const outputPath = path.join(outputDir, filename);
                
                https.get(imageUrl, (res) => {
                    const fileStream = fs.createWriteStream(outputPath);
                    res.pipe(fileStream);
                    
                    fileStream.on('finish', () => {
                        fileStream.close();
                        downloadedCount++;
                        console.log(`Downloaded: ${filename}`);
                        
                        if (downloadedCount === totalImages) {
                            console.log('All images downloaded successfully!');
                        }
                    });
                }).on('error', (err) => {
                    console.error(`Error downloading ${imageUrl}: ${err.message}`);
                    downloadedCount++;
                });
            } else {
                downloadedCount++;
            }
        });
    });
}).on('error', (err) => {
    console.error(`Error fetching page: ${err.message}`);
}); 