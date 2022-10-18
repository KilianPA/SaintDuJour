const {exec} = require('child_process');
const sleep = require('sleep');
const {CronJob} = require('cron');
const fs = require('fs');
const path = require('path');

console.log('Service Running');
uploadVideo();
const myArgs = process.argv.slice(2);
if (myArgs.includes('--launch')) {
	cronJob();
} else {
	const job = new CronJob(
		'0 0 7 * * *',
		() => {
			cronJob();
		},
		null,
		true,
		'Europe/Paris'
	);
	job.start();
}

function cronJob() {
	console.log('Run job ' + logTime());
	removeVideo();
	//uploadVideo()
}

function createVideo() {
	const videoProcess = exec('node ../tiktokUpload/github.js');
	videoProcess.stdout.pipe(process.stdout);
	videoProcess.on('exit', () => {
		try {
			console.log(fs.existsSync(path.resolve('../tiktokUpload/out.mp4')));
			if (fs.existsSync(path.resolve('../tiktokUpload/out.mp4'))) {
				uploadVideo();
			}
		} catch (error) {
			createVideo();
		}
	});
}

function uploadVideo() {
	exec('node ../tiktokUpload/index.js', (error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
			console.log('Vidéo uploadée' + logTime());
			return;
		}
		console.log(`stdout: ${stdout}`);
	});
}

function removeVideo() {
	exec('sudo rm ../tiktokUpload/out.mp4');
	exec('sudo rm ./out.mp4.zip');
	createVideo();
}

function logTime() {
	const currentdate = new Date();
	return (
		' | ' +
		currentdate.getDate() +
		'/' +
		(currentdate.getMonth() + 1) +
		'/' +
		currentdate.getFullYear() +
		' ' +
		currentdate.getHours() +
		':' +
		currentdate.getMinutes() +
		':' +
		currentdate.getSeconds()
	);
}
