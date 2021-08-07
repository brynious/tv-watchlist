import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

console.log("local:", localStorage.getItem("watchlist"));
console.log("local parsed:", JSON.parse(localStorage.getItem("watchlist")));

// // initial state
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

// initial state
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

  // useEffect(() => {
  //   localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  //   localStorage.setItem("watching", JSON.stringify(state.watching));
  //   localStorage.setItem("watched", JSON.stringify(state.watched));
  // }, [state]);

  useEffect(() => {
    axios
      .get("http://localhost:8082/api/series/status=watchlist")
      .then(response => {
        console.log("response data", response.data);
        dispatch({
          type: "INITIALIZE_WATCHLIST",
          payload: response.data,
        });
      });
    axios
      .get("http://localhost:8082/api/series/status=watching")
      .then(response => {
        dispatch({
          type: "INITIALIZE_WATCHING",
          payload: response.data,
        });
      });
    axios
      .get("http://localhost:8082/api/series/status=watched")
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

  const removeFromWatchlist = id => {
    dispatch({ type: "REMOVE_FROM_WATCHLIST", payload: id });
  };

  // remove from watching
  const removeFromWatching = id => {
    dispatch({ type: "REMOVE_FROM_WATCHING", payload: id });
  };

  // remove from watched
  const removeFromWatched = id => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
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
