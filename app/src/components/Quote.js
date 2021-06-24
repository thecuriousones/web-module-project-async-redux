import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuote } from "../actions/quoteActions";


const Quote = (props) => {
  useEffect(() => { props.fetchQuote(); }, []); // empty dep array for componentDidMount

  console.log(props.quote, props.character)

  if (props.loading) {
    return <><h2>Loading..</h2></>
  }
  return (
    <>
      <h2 className='sub-title'>Anime Quote of the Day: {props.quote}</h2>
      <h3>- {props.character}</h3>
      <button className='button' onClick={props.fetchQuote} >Find New Inspiration</button>

    </>
  )

}


const mapStatetoProps = (state) => {
  return {
    quote: state.quote.quote,
    error: state.error,
    loading: state.loading,
    character: state.quote.character
  }
}

export default connect(mapStatetoProps, {fetchQuote})(Quote);