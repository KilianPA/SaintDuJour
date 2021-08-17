import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
const axios = require('axios').default;
import {useEffect} from "react";
import {response} from "express";

export const Caption: React.FC<{
	name: string,
	top: number
}> = ({name,top}) => {

	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const scale = spring({
		fps,
		from: 0,
		to: 1,
		frame
	});

	return (
		<h1
			style={{
				fontFamily: 'Arial',
				fontWeight: 'bold',
				fontSize: '100px',
				color: "black",
				textAlign: 'center',
				position: 'absolute',
				left: '50%',
				zIndex: 3,
				transform: `translate(-50%, 0) scale(${scale})`,
				top: top,
				width: '920px',
			}}
		>
			<span>
				🎉 { name } 🎉
			</span>
		</h1>
	);
};
