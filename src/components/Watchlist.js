import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { TvSeriesCard } from "./TvSeriesCard";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="tv-series-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>
          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="tv-series-grid">
            {watchlist.map(tvSeries => (
              <TvSeriesCard
                tvSeries={tvSeries}
                type="watchlist"
                key={tvSeries.id}
              />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list, add some!</h2>
        )}
      </div>
    </div>
  );
};
