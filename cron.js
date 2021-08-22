const { exec } = require("child_process");
var sleep = require('sleep');
var CronJob = require('cron').CronJob;
var path = require('path')
var job = new CronJob('0 0 7 * * *', function() {
    cronJob()
}, null, true, 'Europe/Paris');
job.start();

console.log('Service Running')

function cronJob () {
    console.log('Run job');
    createVideo()
    //uploadVideo()
}

function createVideo () {
    var videoProcess = exec('npm run build')
    videoProcess.stdout.pipe(process.stdout);
    videoProcess.on('exit', () =>  {
        uploadVideo()
    })
}

function uploadVideo () {
    exec('node ../tiktokUpload/index.js', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log('Vidéo uploadée');
            return;
        }
        console.log(`stdout: ${stdout}`);
        removeVideo()
    });
}

function removeVideo () {
    exec('sudo rm ../tiktokUpload/out.mp4')
}
