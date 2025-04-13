const fs = require('fs');
const path = require('path');
const { mainModule } = require('process');

const scriptPath = __filename;

function selfDestruct() {
    console.log('Self-destructing...!');
    fs.unlink(scriptPath, (err) => {
        if (err) {
            console.error('Something went wrong to kill the script', err);
        } else {
            console.log('The script is dead');
        }
    });
}

setTimeout(selfDestruct);
