import React, { Component } from 'react';
import { movies } from '../services/fakeMovieService'
import Like from './commons/like';
import Pagination from './commons/Pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './commons/ListGroup'
import { getGenres } from '../services/fakeGenreService';

class Movies extends Component {
    state = { 
        movies: movies,
        currentPage:1,
        pageSize: 4,
        genres: [],
        currentGenre: null
    }

    componentDidMount(){
        const genres = [{_id:'1', name:'All Movies'}, ...getGenres()];
        const currentGenre = genres[0];
        this.setState({ genres, currentGenre })
    }
    
    render() { 

        const { length } = this.state.movies;
        const { movies, currentPage, pageSize, genres, currentGenre } = this.state;

        
        const filteredMovies = currentGenre ? (currentGenre._id ==='1'?movies: movies.filter(movie=>movie.genre._id===currentGenre._id)): movies;

        const paginatedMovies = paginate(filteredMovies,currentPage,pageSize);
        
        if(this.state.movies.length===0){
            return <p>There are no movies!</p>;
        }
        
        return (        
            <div className="row m-5">
                <div className="col-2">
                    <ListGroup
                    genres = {genres}
                    currentGenre = {currentGenre}
                    onGenreChange = {this.handleGenreChange}
                    />

                </div>
                <div className="col">
                <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Genre</th>
                        <th>Star</th>
                        <th>Rate</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedMovies.map(movie=>(
                        <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><Like /></td>
                            <td><button className="btn btn-danger btn-sm"
                            onClick={()=>this.handleDelete(movie)}
                            >
                                    Delete
                                </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Pagination 
            itemsCount={filteredMovies.length} 
            pageSize = {this.state.pageSize} 
            currentPage = {this.state.currentPage}
            handlePageChange={this.handlePageChange}
            />
            </>
                </div>
            </div>
        );
    
    }

    handleGenreChange = (genre) => {
        this.setState({currentGenre:genre})
      }

    handleDelete = (handleMovie)=>{
        const movies = this.state.movies.filter(movie=> movie._id!==handleMovie._id);
         this.setState({movies:movies});
    }
    handlePageChange = (page)=>{
        this.setState({ currentPage:page });
    }
}

export default Movies;