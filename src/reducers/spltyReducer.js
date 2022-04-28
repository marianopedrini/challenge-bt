const spltyReducer = (state, action) => {
  switch (action.type) {
    case 'createData': {
      console.log('create data');
      break;
    }
    case 'updateData': {
      console.log('update data');
      break;
    }
    case 'getOneData': {
      console.log('get one data');
      break;
    }
    default:
      return state;
  }
};

export default spltyReducer;
