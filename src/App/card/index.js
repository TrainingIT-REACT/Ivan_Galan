import React from 'react';
import style from './card.module.css';
import { Link } from 'react-router-dom';

const Card = ({data}) => {
    return (
        <Link className={style.container} to={`/details/${data.id}`}>
            <figure><img src={data.cover} className={style.img} alt="cover" /></figure>
            <div className={style.text}>
                {data.artist}<br />
                <small>{data.name}</small>
            </div>
        </Link>
    );
}

export default Card;
