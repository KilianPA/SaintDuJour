import {continueRender, delayRender, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import '../css/Background.css'
import moment from 'moment';
import {useEffect, useState, } from "react";
const backgroundColor = [
    {
        color1: '#ee9ca7',
        color2: '#ffdde1'
    },
    {
        color1: '#C04848',
        color2: '#480048'
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
        color1: '#ff9966',
        color2: '#ff5e62'
    }
]


export const Background: React.FC<{
    color: object
}> = (color) => {
    const videoConfig = useVideoConfig();
    const frame = useCurrentFrame();
    color = (color.color)


    return (
        <div className='background' style={{
            height: '100%',
            width: '100%',
            background: `linear-gradient(-45deg, ${color.color1}, ${color.color2})`,
            position: 'absolute',
        }}>
            </div>
    );
};
