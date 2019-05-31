import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import style from './home.module.css';
import Card from '../card';

import { getAlbums } from '../../actions/albums';

const Home = ({albums, getAlbums}) => {
    useEffect( () => { !albums.length && getAlbums() }, []);

    return (
        <>
            <h1>Albums</h1>
            <div className={style.container}>
                {albums.map( (album, i) => <Card data={album} key={i} />)}
            </div>
        </>
    );
};

const mapStateToProps = ({albums: {data: albums}}) => ({
    albums
});

const mapDispatchToProps = {
    getAlbums
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
