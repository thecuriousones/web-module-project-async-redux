import axios from "axios";
export const FETCH_QUOTE_START = 'FETCH_QUOTE_START';
export const FETCH_QUOTE_HAPPY = 'FETCH_QUOTE_HAPPY';
export const FETCH_QUOTE_SAD = 'FETCH_QUOTE_SAD';

export const fetchQuote = () => (dispatch) => {
  dispatch({ type: FETCH_QUOTE_START }); 
  axios.get("https://animechan.vercel.app/api/random")
    .then(res => {
      dispatch({ type: FETCH_QUOTE_HAPPY, payload: res.data.quote});
    })
  .catch(err => {
    console.log(err);
    dispatch({ type: FETCH_QUOTE_SAD, payload: err });
  })
}

//   https://animechan.vercel.app/api/quotes/character?name=${characterName}