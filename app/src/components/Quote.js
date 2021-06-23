import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuote } from "../actions/quoteActions";


const Quote = (props) => {
  useEffect(() => { props.fetchQuote(); }, []); // empty dep array for componentDidMount

  if (props.loading) {
    return <><h2>Loading..</h2></>
  }
  return (
    <>
      <h2>Anime Quote of the Day: {props.quote}</h2>
      <button onClick={props.fetchQuote} >Find New Inspiration</button>
    </>
  )
}

const mapStatetoProps = (state) => {
  return {
    quote: state.quote,
    error: state.error,
    loading: state.loading,
    character: state.character
  }
}

export default connect(mapStatetoProps, {fetchQuote})(Quote);