import React, { Component } from 'react';
import { movies } from '../services/fakeMovieService'
import Pagination from './commons/Pagination';
import { paginate } from '../utils/paginate';
import ListGroup from './commons/ListGroup'
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';
import { Link } from 'react-router-dom';

class Movies extends Component {
    state = { 
        movies: movies,
        currentPage:1,
        pageSize: 4,
        genres: [],
        currentGenre: null,
        sortColumn:{ path:'title', order: 'asc' }
    }

    componentDidMount(){
        const genres = [{_id:'1', name:'All Movies'}, ...getGenres()];
        const currentGenre = genres[0];
        this.setState({ genres, currentGenre })
    }
    
    render() { 

        const { movies, 
                currentPage, 
                pageSize, 
                genres, 
                currentGenre, 
                sortColumn
        } = this.state;

        const sorted = this.renderMoviesList(movies);
        const paginatedMovies = paginate(sorted,currentPage,pageSize);

        
        if(this.state.movies.length===0){
            return <p>There are no movies!</p>;
        }
        
        return (  
            <div>

            <div className="row m-5">
                <div className="col-2">
                    <ListGroup
                    genres = {genres}
                    currentGenre = {currentGenre}
                    onGenreChange = {this.handleGenreChange}
                    />

                </div>
                <div className="col">
                <Link className="btn btn-primary m-3" to={"/newMovie"}>
                    New Movie
                </Link>
                    <MoviesTable
                    paginatedMovies={paginatedMovies}
                    onDelete={this.handleDelete}
                    onSort= {this.handleSort}
                    sortColumn={sortColumn}
                    />
                    <Pagination 
                    itemsCount={sorted.length} 
                    pageSize = {this.state.pageSize} 
                    currentPage = {this.state.currentPage}
                    handlePageChange={this.handlePageChange}
                    />
            </div>
            </div>
            </div>      
        );
    
    }

    handleNewMovie= ()=>{

    }
    renderMoviesList= (movies)=>{
        const { currentGenre, sortColumn, currentPage, pageSize} = this.state;

        const filteredMovies = currentGenre ? (currentGenre._id ==='1'?movies: movies.filter(movie=>movie.genre._id===currentGenre._id)): movies;

        return _.orderBy(filteredMovies,[sortColumn.path], [sortColumn.order])
    }
    handleSort = (type)=>{
        const sortColumn = this.state.sortColumn;
        if(sortColumn.path===type){
            sortColumn.order = sortColumn.order==='asc'?'desc':'asc';
        }
        else{
            sortColumn.path = type;
            sortColumn.order= 'asc';
        }
        this.setState({ sortColumn })
    }
    handleGenreChange = (genre) => {
        this.setState({currentGenre:genre, currentPage:1});

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