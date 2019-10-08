
const state = {
  loggedInUser: {
    username: "",
    name: "",
    type: 0,
  }
};

const reducer = (state, action) => {
  const newState = {
    ...state
  };

  switch (action.type) {
    case "USER_UPDATE_STATE":
      return {
        ...state,
        ...action.data
      };

    default:
      return newState;
  }
};

export default { state, reducer };
