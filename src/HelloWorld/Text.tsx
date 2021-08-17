import {spring, useCurrentFrame, useVideoConfig, interpolate} from 'remotion';
import moment from 'moment';

export const Text: React.FC<{
	text: string,
	top: number,
	fontSize: number
}> = ({text, top, fontSize}) => {
	const videoConfig = useVideoConfig();

	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'});

	return (
		<h1
			style={{
				fontFamily: 'Arial',
				fontWeight: 'bolder',
				fontSize: fontSize,
				color: "black",
				textAlign: 'center',
				position: 'absolute',
				zIndex: 3,
				left: '50%',
				width: '900px',
				transform: 'translate(-50%, 0)',
				opacity: opacity,
				top: top,
			}}
		>
			{text}
		</h1>
	);
};
