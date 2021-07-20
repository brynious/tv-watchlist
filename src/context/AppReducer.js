const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SERIES_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "ADD_TO_WATCHING":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          tvSeries => tvSeries.id !== action.payload.id
        ),
        watching: [action.payload, ...state.watching],
      };
    case "ADD_SERIES_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          tvSeries => tvSeries.id !== action.payload.id
        ),
        watching: state.watching.filter(
          tvSeries => tvSeries.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };

    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          tvSeries => tvSeries.id !== action.payload
        ),
      };
    case "REMOVE_FROM_WATCHING":
      return {
        ...state,
        watching: state.watching.filter(
          tvSeries => tvSeries.id !== action.payload
        ),
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter(
          tvSeries => tvSeries.id !== action.payload
        ),
      };

    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
        watching: state.watching.filter(
          tvSeries => tvSeries.id !== action.payload.id
        ),
        watched: state.watched.filter(
          tvSeries => tvSeries.id !== action.payload.id
        ),
      };
    case "MOVE_TO_WATCHING":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          tvSeries => tvSeries.id !== action.payload.id
        ),
        watching: [action.payload, ...state.watching],
        watched: state.watched.filter(
          tvSeries => tvSeries.id !== action.payload.id
        ),
      };
    case "MOVE_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          tvSeries => tvSeries.id !== action.payload.id
        ),
        watching: state.watching.filter(
          tvSeries => tvSeries.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched],
      };
    default:
      return state;
  }
};

export default AppReducer;
