// const folderPath = './img/';

// const imagesNames = [];

// fs.readdirSync(folderPath).forEach((file) => {
//     imagesNames.push(file);
// });

// fs.writeFileSync('digimon-list.json', JSON.stringify(imagesNames));

const digimonList = require('./digimon-array.json');

// const digimonData = digimonList.map((digimon) => {
//     let digimonArray = digimon.split('-');
//     let digimonNumber = digimonArray[0];
//     let digimonName = digimonArray[1];

//     return {
//         number: digimonNumber,
//         name: digimonName,
//         url: `https://www.grindosaur.com/img/games/digimon-world-next-order/icons/${digimonNumber}-${digimonName}-icon.png`,
//     };
// });

// fs.writeFileSync('digimon-array.json', JSON.stringify(digimonData));

const download = require('image-downloader');

function downloadImage(url, filepath) {
    return download.image({
        url,
        dest: filepath,
    });
}

downloadImage(
    'https://www.grindosaur.com/img/games/digimon-world-next-order/icons/99-goldveedramon-icon.png',
    '/normalSizeImages'
);
