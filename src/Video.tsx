import {Composition} from 'remotion';
import {Background} from './HelloWorld/Background';
import {Subtitle} from './HelloWorld/Subtitle';
import {Caption} from "./HelloWorld/Caption";
import {MyVideo} from "./MyVideo";
import {Square} from "./HelloWorld/Square";

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="MyVideo"
				component={MyVideo}
				durationInFrames={400}
				fps={30}
				width={1080}
				height={1920}
			/>
			<Composition
				id="Caption"
				component={Caption}
				durationInFrames={100}
				fps={30}
				width={1080}
				height={1920}
			/>
			<Composition
				id="Background"
				component={Background}
				durationInFrames={100}
				fps={30}
				width={1080}
				height={1920}
			/>
			<Composition
				id="Square"
				component={Square}
				durationInFrames={100}
				fps={30}
				width={1080}
				height={1920}
			/>
		</>
	);
};
