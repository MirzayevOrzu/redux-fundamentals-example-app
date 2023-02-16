const initialState = {
  status: "All",
  colors: []
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case "filters/statusFilterChanged":
      return {
        ...state,
        status: action.payload
      };
    case "filters/colorFilterChanged":
      if (action.payload.changeType === "add") {
        return {
          ...state,
          colors: [...state.colors, action.payload.color]
        };
      } else {
        return {
          ...state,
          colors: state.colors.filter((color) => color !== action.payload.color)
        };
      }
    default:
      return state;
  }
}
