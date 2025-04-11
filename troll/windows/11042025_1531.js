const { exec } = require('child_process');

exec('shutdown /r /t 0', (error, stdout, stderr) => {
    if (error) {
        console.error(`Erro: ${error.message}`);
        return;
    }
});
