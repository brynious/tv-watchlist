import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ tvSeries }) => {
  const { addSeriesToWatchlist, addSeriesToWatched, watchlist, watched } =
    useContext(GlobalContext);

  let storedSeries = watchlist.find(o => o.id === tvSeries.id);
  let storedSeriesWatched = watched.find(o => o.id === tvSeries.id);

  const watchlistDisabled = storedSeries
    ? true
    : storedSeriesWatched
    ? true
    : false;

  const watchedDisabled = storedSeriesWatched ? true : false;

  return (
    <div>
      <div className="result-card">
        <div className="poster-wrapper">
          {tvSeries.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${tvSeries.poster_path}`}
              alt={`${tvSeries.name} Poster`}
            />
          ) : (
            <div className="filler-poster"></div>
          )}
        </div>

        <div className="info">
          <div className="header">
            <h3 className="title">{tvSeries.name}</h3>
            <h4 className="first-air-date">
              {tvSeries.first_air_date
                ? tvSeries.first_air_date.substring(0, 4)
                : "-"}
            </h4>
          </div>

          <div className="controls">
            <button
              className="btn"
              disabled={watchlistDisabled}
              onClick={() => addSeriesToWatchlist(tvSeries)}
            >
              Add to Watchlist
            </button>

            <button
              className="btn"
              disabled={watchedDisabled}
              onClick={() => addSeriesToWatched(tvSeries)}
            >
              Add to Watched
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
