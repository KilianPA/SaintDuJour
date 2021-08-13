import {continueRender, delayRender, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import '../css/Square.css'
import moment from 'moment';
import {useEffect, useState, } from "react";


export const Square: React.FC<{
}> = () => {
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
        <div className={'notebook'} style={{
            height: '1100px',
            width: '900px',
            borderRadius: '15px',
            top: 300,
            backgroundColor: 'white',
            left: '50%',
            transform: `translate(-50%, 0) scale(${scale})` ,
            position: 'absolute',
            zIndex: 1,
            boxShadow: 'rgb(85 85 85 / 15%) 0px 2px 24px 3px',
            border: 'none',
            borderTop: '#cd7477 solid 200px',
        }}>
            </div>
    );
};
