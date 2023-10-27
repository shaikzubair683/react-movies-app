import React, { Component } from 'react'
import Like from './commons/like';
import { Link } from 'react-router-dom';



class MovieTable extends Component {
    renderSortIcon = (type)=>{

        if(!this.props.sortColumn){
            return null;
        }
        else if(this.props.sortColumn.path!==type){
            return null;
        }
        else{
            if(this.props.sortColumn.order==='asc'){
                return <i className="fa fa-sort-asc"></i>
            }
            else{
                return <i className="fa fa-sort-desc"></i>
            }
        }
    }


    render() { 
        const {paginatedMovies, onDelete, onSort} = this.props;
        return (
            <table className="table">
    <thead>
        <tr>
            <th className='clickable' onClick={()=>onSort('title')}>Title{this.renderSortIcon('title')}</th>
            <th className='clickable' onClick={()=>onSort('genre.name')}>Genre{this.renderSortIcon('genre.name')}</th>
            <th className='clickable' onClick={()=>onSort('numberInStock')}>Star{this.renderSortIcon('numberInStock')}</th>
            <th className='clickable' onClick={()=>onSort('dailyRentalRate')}>Rate{this.renderSortIcon('dailyRentalRate')}</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        {paginatedMovies.map(movie=>(
            <tr key={movie._id}>
                <td><Link to={`/movies/${movie._id}`}>{movie.title}</Link></td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Like /></td>
                <td><button className="btn btn-danger btn-sm"
                onClick={()=>onDelete(movie)}
                >Delete
                </button></td>
            </tr>
        ))}
    </tbody>
</table>);

            
    }
}
 
export default MovieTable;
