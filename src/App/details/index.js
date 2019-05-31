import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import style from './details.module.css';
import { getAlbums } from '../../actions/albums';
import { getSongs } from '../../actions/songs';
import { setSong } from '../../actions/player';

const renderSong = (song, album, setSong) => (
    <li className={['row', style.listitem].join(' ')} key={song.id} onClick={() => setSong({song, album})}>    
        <span className="col-md-10">{song.name}</span>
        <span className="col-md-2">{Math.trunc(song.seconds / 60) + ':' + Math.trunc(song.seconds % 60) }</span>
    </li>
)

const Details = ({albums, match, getAlbums, songs, getSongs, setSong}) => {
    const [ details, setDetails ] = useState({});
    const [ songsList, setSongsList ] = useState([]);

    useEffect( () => { albums.length === 0 && getAlbums(); songs.length === 0 && getSongs() }, []);
    useEffect( () => { setDetails(albums.find( a => String(a.id) === match.params.id ) || {}) }, [albums])
    useEffect( () => { setSongsList(songs.filter( s => String(s.album_id) === match.params.id )) } )

    return (
        <>
            <div className={style.header}>
                <figure><img src={details.cover} alt="cover" /></figure>
                <div>
                    <h1>{details.name}</h1>
                    <h5>{details.artist}</h5>
                </div>
            </div>
            <ul className={style.list}>
                { songsList.map( (song) => renderSong(song, details, setSong) )}
            </ul>
            <Link to="/home">
                <button type="button" className="btn btn-outline-light w-25">&#171; Back</button>
            </Link>
        </>
    )
};

const mapStateToProps = ({
    albums: { data: albums },
    songs: { data: songs }
}) => ({
    albums,
    songs
});

const mapDispatchToProps = {
    getAlbums,
    getSongs,
    setSong
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);
