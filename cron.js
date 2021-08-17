const { exec } = require("child_process");
var sleep = require('sleep');


var CronJob = require('cron').CronJob;
var job = new CronJob('*/5 * * * * *', function() {

}, null, true, 'Europe/Paris');
job.start();

cronJob();

function cronJob () {
    console.log('Run job');
    createVideo()
}

function createVideo () {
    exec('sudo npm run build', (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        console.log('video out')
        sleep.sleep(5)
        uploadVideo()
        return;
    });
}

function uploadVideo () {
    exec('sudo node ../tiktokUpload/index.js', (error, stdout, stderr) => {
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
