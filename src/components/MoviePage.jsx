import React, { Component } from 'react'
import { useParams } from 'react-router-dom';

const MoviePage = (props) => {
    const { id } =  useParams();
    return ( <div>
        <h1>This is Movie # </h1>
    </div> );
}
 
export default MoviePage;