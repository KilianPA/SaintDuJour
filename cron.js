const { exec } = require("child_process");
var sleep = require('sleep');
var CronJob = require('cron').CronJob;
var fs = require('fs')
var path = require('path')
var job = new CronJob('0 20 9 * * *', function() {
    cronJob()
}, null, true, 'Europe/Paris');
job.start();

console.log('Service Running')
//cronJob()

function cronJob () {
    console.log('Run job');
    removeVideo()
    createVideo()
    //uploadVideo()
}

function createVideo () {
    var videoProcess = exec('npm run build')
    videoProcess.stdout.pipe(process.stdout);
    videoProcess.on('exit', () =>  {
        try {
            if (fs.existsSync(path.resolve("../tiktokUpload/out.mp4"))) {
                uploadVideo()
            }
        } catch (error) {
            console.log(error);
            process.exit()
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
