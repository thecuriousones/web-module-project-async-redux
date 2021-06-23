import React from 'react';

class SearchForm extends React.Component {
    constructor() {
        super();
        this.state = {
            searchInput: ''
        }
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            searchInput: e.target.value
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log("submitting");
        this.props.fetchQuotes(this.state.searchInput);
        this.setState({
            ...this.state,
            searchInput: ''
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.searchInput} onChange={this.handleChange} className="input" placeholder="Type here to find your anime quote.."></input>
                    <button className="search-button">Search</button>
                </form>
            </div>
        )
    }
}



export default SearchForm;