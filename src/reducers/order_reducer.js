export default function orderReducer(state=[], action) {
  switch ( action.type ) {
    case 'CREATE_ORDER_ARRAY':
      return action.payload;
    default:
      return state;
  }
};
