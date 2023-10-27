import './App.css';
import Movies from './components/movies';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import MoviePage from './components/MoviePage';
import LoginForm from './components/loginForm';
import NewMovie from './components/NewMovie';

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/login' exact Component={LoginForm}/>
      <Route path='/newMovie' exact Component={NewMovie}/>
      <Route path='/movies/:id' exact Component={MoviePage}/>
      <Route path='/movies' Component={Movies}/>
      <Route path='/customers' Component={Customers}/>
      <Route path='/rentals' Component={Rentals}/>
      <Route path='/' exact Component={Movies}/>
    </Routes>
  
    </>
  );
}

export default App;
