const initialstate = {
  loading: false,
  alluser: [],
};

const userReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "alluser/pending":
      return { ...state, loading: true };

    default:
      return { ...state };
  }
};

export default userReducer;

//same email xa vane add user garna paidaina
