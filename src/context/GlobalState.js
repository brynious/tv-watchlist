import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// // ORIGINAL initial state
// const initialState = {
//   watchlist: localStorage.getItem("watchlist")
//     ? JSON.parse(localStorage.getItem("watchlist"))
//     : [],
//   watching: localStorage.getItem("watching")
//     ? JSON.parse(localStorage.getItem("watching"))
//     : [],
//   watched: localStorage.getItem("watched")
//     ? JSON.parse(localStorage.getItem("watched"))
//     : [],
// };

// NEW initial state
const initialState = {
  watchlist: [],
  watching: [],
  watched: [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    axios
      .get(
        "https://smartroad-watchlist.herokuapp.com/api/series/status=watchlist"
      )
      .then(response => {
        dispatch({
          type: "INITIALIZE_WATCHLIST",
          payload: response.data,
        });
      });
    axios
      .get(
        "https://smartroad-watchlist.herokuapp.com/api/series/status=watching"
      )
      .then(response => {
        dispatch({
          type: "INITIALIZE_WATCHING",
          payload: response.data,
        });
      });
    axios
      .get(
        "https://smartroad-watchlist.herokuapp.com/api/series/status=watched"
      )
      .then(response => {
        dispatch({
          type: "INITIALIZE_WATCHED",
          payload: response.data,
        });
      });
  }, []);

  // actions
  const addSeriesToWatchlist = tvSeries => {
    dispatch({ type: "ADD_SERIES_TO_WATCHLIST", payload: tvSeries });
  };

  // add to watching
  const addSeriesToWatching = tvSeries => {
    dispatch({ type: "ADD_TO_WATCHING", payload: tvSeries });
  };

  const addSeriesToWatched = tvSeries => {
    dispatch({ type: "ADD_SERIES_TO_WATCHED", payload: tvSeries });
  };

  const removeFromWatchlist = tmdb_id => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: tmdb_id });
  };

  // remove from watching
  const removeFromWatching = tmdb_id => {
    dispatch({ type: "REMOVE_FROM_WATCHING", payload: tmdb_id });
  };

  // remove from watched
  const removeFromWatched = tmdb_id => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: tmdb_id });
  };

  // move to watchlist
  const moveToWatchlist = tvSeries => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: tvSeries });
  };

  const moveToWatching = tvSeries => {
    dispatch({ type: "MOVE_TO_WATCHING", payload: tvSeries });
  };

  const moveToWatched = tvSeries => {
    dispatch({ type: "MOVE_TO_WATCHED", payload: tvSeries });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watching: state.watching,
        watched: state.watched,
        addSeriesToWatchlist,
        addSeriesToWatching,
        addSeriesToWatched,
        removeFromWatchlist,
        removeFromWatched,
        removeFromWatching,
        moveToWatchlist,
        moveToWatching,
        moveToWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
