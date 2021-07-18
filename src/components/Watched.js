import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { TvSeriesCard } from "./TvSeriesCard";

export const Watched = () => {
  const { watched } = useContext(GlobalContext);
  return (
    <div className="tv-series-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watched Series</h1>
          <div className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </div>
        </div>

        {watched.length > 0 ? (
          <div className="tv-series-grid">
            {watched.map(tvSeries => (
              <TvSeriesCard
                tvSeries={tvSeries}
                type="watched"
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