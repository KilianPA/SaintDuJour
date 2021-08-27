const { exec } = require("child_process");
var sleep = require('sleep');
var CronJob = require('cron').CronJob;
var fs = require('fs')
var path = require('path')


console.log('Service Running')
var myArgs = process.argv.slice(2);
if (myArgs.includes('--launch')) {
    cronJob()
} else {
    var job = new CronJob('0 0 7 * * *', function() {
        cronJob()
    }, null, true, 'Europe/Paris');
    job.start();
}

function cronJob () {
    console.log('Run job');
    removeVideo()
    createVideo()
    //uploadVideo()
}

function createVideo () {
    var videoProcess = exec('node ../tiktokUpload/github.js')
    videoProcess.stdout.pipe(process.stdout);
    videoProcess.on('exit', () =>  {
        try {
            if (fs.existsSync(path.resolve("../tiktokUpload/out.mp4"))) {
                uploadVideo()
            }
        } catch (error) {
            createVideo()
        }
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
    });
}

function removeVideo () {
    exec('sudo rm ../tiktokUpload/out.mp4')
}
