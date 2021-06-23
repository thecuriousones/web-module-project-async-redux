import React from 'react';
import axios from 'axios';
import './App.css';
import Quote from './components/Quote';
import SearchForm from './components/searchForm';
import CharacterCard from './components/characterCard';
import Header from './components/header';



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quotes: []
    }
  }

  
  componentDidMount() {
    console.log("App CDM")
    axios.get("https://animechan.vercel.app/api/quotes")
      .then(res => {
        console.log(res.data);
        this.setState({
          ...this.state,
          quotes: res.data
        });
      })
      .catch(err => console.log(err));
  }

  fetchQuotes = (characterName) => {
    axios.get(`https://animechan.vercel.app/api/quotes/character?name=${characterName}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          ...this.state,
          quotes: res.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
      <Header />
      <h1 className='title'>BEST ANIME QUOTES</h1>
      <Quote />
      <SearchForm fetchQuotes={this.fetchQuotes}/>
      <CharacterCard characters={this.state.quotes}/>
    </div>
    )
  }
}

export default App;