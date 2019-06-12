const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "POST_ARIDE":
      console.log("SUCCESS");
      return state;
    // case 'CREATE_PROJECT_ERROR':
    //   console.log('create project error');
    //   return state;
    case "SET_CITY_NAME":
      return {
        ...state,
        ville: action.ville
      };
    case "FAVORIS_SUCCESS":
      console.log("SUCCESS");
      return state;
    case "CONTACT_US_FAILED":
      console.log("FAILED");
      return state;
    case "CONTACT_US_SUCCESS":
      console.log("SUCCESS");
      return state;
    case "FAVORIS_FAILED":
      console.log("FAILED");
      return state;
    default:
      return state;
  }
};

export default projectReducer;
