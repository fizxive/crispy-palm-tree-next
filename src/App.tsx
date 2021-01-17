import React, { useRef, useEffect } from 'react';
import videojs from 'video.js';

import './App.css';
import 'video.js/dist/video-js.css'
import logo from './logo.svg';

import TimerScreen from './TimerScreen';

function App() {

    const ref = useRef(null)

    useEffect(() => {
        const video = videojs(ref.current, {
            controls: true,
            controlBar: {
                volumePanel: undefined,
                fullscreenToggle: false
            },
            html5: {
                hls: {
                    overrideNative: false
                },
                nativeVideoTracks: true,
                nativeAudioTracks: true,
                nativeTextTracks: true
            }
        })
        video.src("https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8")
        // video.usingNativeControls(true)
    }, [])

    return (
        <div className="App">
            <video className="video-js" disablePictureInPicture playsInline controls ref={ref}>
            </video>
            <TimerScreen />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
        </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
        </a>
            </header>
        </div>
    );
}

export default App;
