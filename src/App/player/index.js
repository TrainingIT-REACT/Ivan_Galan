import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';

import style from './player.module.css';
import ProgressBar from './progressBar';

const Player = ({player}) => {
    const { album, song } = player;
    const audioPlayer = useRef();
    const [ play, setPlay ] = useState(false);
    const [ currentTime, setCurrentTime ] = useState(0);
    
    useEffect( () => {
        if(song.audio) {
            audioPlayer.current.src = song.audio;
            audioPlayer.current.play();
            setPlay(true);
        }
    }, [player]);

    const playPause = () => {
        if (song.audio) {
            play ? audioPlayer.current.pause() : audioPlayer.current.play();
            setPlay(!play);
        }
    }

    const modifyAudioTime = time => {
        const newTime = audioPlayer.current.currentTime + time;
        audioPlayer.current.currentTime = newTime >= 0 ? newTime : audioPlayer.current.currentTime;
    }

    const restartSong = () => {
        audioPlayer.current.currentTime = 0;
        setPlay(!play);
    }

    return (
        <div className={style.container}>
            <audio ref={audioPlayer} onTimeUpdate={() => setCurrentTime(audioPlayer.current.currentTime)} onEnded={() => restartSong() }></audio>
            <ProgressBar currentTime={currentTime} totalTime={song.seconds} />
            <div className={style.dataContainer}>
                { album.cover && <div>
                    <figure className={style.cover}>
                        <img src={album.cover} alt="cover" />
                        <figcaption>{album.name} <br /><small>{album.artist}</small></figcaption>
                    </figure>
                </div> }
                <div className={style.centerPanel}>
                    <div className={[style.controlsContainer, !song.audio && style.disabled].join(' ')}>
                        <div onClick={() => modifyAudioTime(-10)}><i className="fas fa-backward"></i></div>
                        { play 
                        ? <div onClick={playPause} ><i className="fas fa-pause"></i></div>
                        : <div onClick={playPause} ><i className="fas fa-play"></i></div> }
                        <div onClick={() => modifyAudioTime(10)}><i className="fas fa-forward"></i></div>
                    </div>
                    <div className={style.songName}>{song.name}</div>
                </div>

            </div>
        </div>
    );
}

const mapStateToProps = ({
    player
}) => ({
    player
})

export default connect(mapStateToProps)(Player);
