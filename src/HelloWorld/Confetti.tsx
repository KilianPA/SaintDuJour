import {spring, useCurrentFrame, useVideoConfig} from 'remotion';
import '../css/Confetti.css'
import moment from 'moment';

export const Confetti: React.FC<{
    top: number
}> = ({top}) => {
    const videoConfig = useVideoConfig();
    const frame = useCurrentFrame();
    return (
        <div className='confetti-land' style={{
            height: '100%',
            width: '900px',
            left: '50%',
            zIndex: 3,
            transform: 'translate(-50%, 0)',
            position: 'absolute',
            top: top
        }}>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            <div className="confetti-piece"></div>
            </div>
    );
};
