import React, { Component } from 'react';

const ListGroup = (props) => {
    return (
        <ul className="list-group">
            {props.genres.map(genre => (
                <li className={genre===props.currentGenre?"list-group-item active":"list-group-item"} 
                key={genre.id}
                onClick={()=>props.onGenreChange(genre)}
                >
                    {genre.name}
                </li>
            ))}
        </ul>
    );
};

export default ListGroup;
