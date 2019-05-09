const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "POST_ARIDE":
      console.log("SUCCESS");
      return state;
    // case 'CREATE_PROJECT_ERROR':
    //   console.log('create project error');
    //   return state;
    default:
      return state;
  }
};

export default projectReducer;
