import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  watching: localStorage.getItem("watching")
    ? JSON.parse(localStorage.getItem("watching"))
    : [],
  watched: localStorage.getItem("watched")
    ? JSON.parse(localStorage.getItem("watched"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = props => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watching", JSON.stringify(state.watching));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state]);

  // actions
  const addSeriesToWatchlist = tvSeries => {
    dispatch({ type: "ADD_SERIES_TO_WATCHLIST", payload: tvSeries });
  };

  const removeSeriesFromWatchlist = id => {
    dispatch({ type: "REMOVE_SERIES_FROM_WATCHLIST", payload: id });
  };

  const addSeriesToWatched = tvSeries => {
    dispatch({ type: "ADD_SERIES_TO_WATCHED", payload: tvSeries });
  };

  // move to watchlist
  const moveToWatchlist = tvSeries => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: tvSeries });
  };

  // remove from watched
  const removeFromWatched = id => {
    dispatch({ type: "REMOVE_FROM_WATCHED", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        watching: state.watching,
        watched: state.watched,
        addSeriesToWatchlist,
        removeSeriesFromWatchlist,
        addSeriesToWatched,
        moveToWatchlist,
        removeFromWatched,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
