import {Sequence, AbsoluteFill, continueRender, delayRender} from 'remotion';
import {Title} from "./HelloWorld/Title";
import {Caption} from "./HelloWorld/Caption";
import {Background} from "./HelloWorld/Background";
import {useEffect, useState} from 'react'
import axios from "axios";
import {Text} from "./HelloWorld/Text";
// @ts-ignore
import saints from './api/saints.json';

import {Confetti} from "./HelloWorld/Confetti";
import {Square} from "./HelloWorld/Square";
import './css/app.css'

import construct = Reflect.construct;

const backgroundColor = [
	{
		color1: '#ee9ca7',
		color2: '#ffdde1'
	},
	{
		color1: '#ff9966',
		color2: '#ff5e62'
	},
	{
		color1: '#99f2c8',
		color2: '#58b59b'
	},
	{
		color1: '#2193b0',
		color2: '#6dd5ed'
	},
	{
		color1: '#8360c3',
		color2: '#2ebf91'
	},
	{
		color1: '#f12711',
		color2: '#f5af19'
	},
	{
		color1: '#dd3e54',
		color2: '#6be585'
	},
	{
		color1: '#009FFF',
		color2: '#ec2F4B'
	}
]


export const MyVideo = () => {



	const [name, setName] = useState('')
	const [suffix, setSuffix] = useState('')
	const [color, setColor] = useState({color1: '', color2: ''})
	const [handle] = useState(() => delayRender())

	const fetchData = async () => {
		var date  = new Date();
		var month = date.getMonth() + 1;
		var day = date.getDate() - 1;
		setName(saints[month][day][0])
		setSuffix(saints[month][day][1])
		setColor(backgroundColor[date.getDay()])
		continueRender(handle)
	}

	useEffect(() => {
		fetchData()
	}, [])

	return (
		<div>
			<Sequence from={0} durationInFrames={400}>
				<Background color={color} />
			</Sequence>
			<Sequence from={0} durationInFrames={400}>
				<Square />
			</Sequence>
			<Sequence from={30} durationInFrames={400}>
				<Title/>
			</Sequence>
			<Sequence from={80} durationInFrames={400}>
				<Text fontSize={80} text={"Aujourd'hui c'est la " + suffix.toLowerCase()} top={650} />
			</Sequence>
			<Sequence from={120} durationInFrames={400}>
				<Caption name={name} top={1000} />
			</Sequence>
			<Sequence from={110} durationInFrames={400}>
				<Confetti top={1100}/>
			</Sequence>
		</div>
	)
}
