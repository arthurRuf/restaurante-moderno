
export default (dispatch, state) => {

  const login = (user, password) => {
    console.log("user", user);
    console.log("password", password);
  };

  return {
    login,
  };
};
