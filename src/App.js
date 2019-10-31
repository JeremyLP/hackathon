import React from 'react';
import Example from './components/carousel';
import './App.css';
import { Button } from 'reactstrap';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import { all } from 'q';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  getMovies = () => {
    axios.get('https://hackathon-wild-hackoween.herokuapp.com/movies')
      .then(response => response.data)
      .then(data => {
        console.log('1',data);
        this.setState({
          movies: data.movies ,
        });
        console.log('2',this.state.movies);
  })
}

componentDidMount(){
  this.getMovies();

}

  render() {
    return (
      <div className="App">
        <Navbar/>
        {
          this.state.movies.length === 0 ? <p>loading</p> : <Example movies={this.state.movies}  />
        }
         <Footer/>
      </div>
    );
  }
}
export default App;
