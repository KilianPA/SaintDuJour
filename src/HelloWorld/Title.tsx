import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import moment from 'moment';

export const Title: React.FC<{
}> = ({}) => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();
	moment.locale('fr');
	var text =  moment().format('LL');
	text = text.split(' ').map((t) => ` ${t} `);
	return (
		<div
			style={{
				fontFamily: 'Arial',
				fontWeight: 'bold',
				textAlign: 'center',
				position: 'absolute',
				zIndex: 3,
				left: '50%',
				transform: 'translate(-50%, 0)',
				top: 300,
 				width: '900px',
				padding: '40px',
				borderTopLeftRadius: '15px',
				borderTopRightRadius: '15px'
			}}
		>
			{text.map((t, i) => {
				return (
					<span
						key={t}
						style={{
							color: 'white',
							fontSize: 100,
							textTransform: 'capitalize',
							marginLeft: 20,
							marginRight: 20,
							textAlign: 'center',
							transform: `scale(${spring({
								fps: videoConfig.fps,
								frame: frame - i * 10,
								config: {
									damping: 100,
									stiffness: 200,
									mass: 0.5,
								},
							})})`,
							display: 'inline-block',
						}}
					>
						{t}
					</span>
				);
			})}
		</div>
	);
};
