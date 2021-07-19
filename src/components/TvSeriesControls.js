import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const TvSeriesControls = ({ tvSeries, type }) => {
  const {
    removeSeriesFromWatchlist,
    addSeriesToWatched,
    moveToWatchlist,
    removeFromWatched,
    removeFromWatching,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn">
            <i className="fa-fw far fa-eye"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => addSeriesToWatched(tvSeries)}
          >
            <i className="fa-fw fas fa-check"></i>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => removeSeriesFromWatchlist(tvSeries.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watching" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => addSeriesToWatched(tvSeries)}
          >
            <i className="fa-fw fas fa-check"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatching(tvSeries.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => moveToWatchlist(tvSeries)}
          >
            {/* <i className="fa-fw far fa-eye-slash"></i> */}
            <i className="fa-fw fas fa-clipboard-list"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(tvSeries.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};
