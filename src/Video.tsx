import {Composition} from 'remotion';
import {Background} from './HelloWorld/Background';
import {Subtitle} from './HelloWorld/Subtitle';
import {Caption} from "./HelloWorld/Caption";
import {MyVideo} from "./MyVideo";
import {Square} from "./HelloWorld/Square";

export const RemotionVideo: React.FC = () => {
	var fps = 60
	var width = 1080
	var height = 1930
	return (
		<>
			<Composition
				id="MyVideo"
				component={MyVideo}
				durationInFrames={600}
				fps={fps}
				width={width}
				height={height}
			/>
			<Composition
				id="Caption"
				component={Caption}
				durationInFrames={100}
				fps={fps}
				width={width}
				height={height}
			/>
			<Composition
				id="Background"
				component={Background}
				durationInFrames={100}
				fps={fps}
				width={width}
				height={height}
			/>
			<Composition
				id="Square"
				component={Square}
				durationInFrames={100}
				fps={fps}
				width={width}
				height={height}
			/>
		</>
	);
};
