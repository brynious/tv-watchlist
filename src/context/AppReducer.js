// this is the code from the original video, but anonymous default exports are no longer allowed it seems
// export default (state, action) => {

const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_SERIES_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_SERIES_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          tvSeries => tvSeries.id !== action.payload
        ),
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
    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(
          tvSeries => tvSeries.id !== action.payload.id
        ),
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter(
          tvSeries => tvSeries.id !== action.payload
        ),
      };
    case "ADD_TO_WATCHING":
      return {
        ...state,
        watching: [action.payload, ...state.watching],
      };
    case "REMOVE_FROM_WATCHING":
      return {
        ...state,
        watching: state.watching.filter(
          tvSeries => tvSeries.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default AppReducer;
