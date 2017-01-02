export default function buttonReducer(state = false, action) {
  switch (action.type) {
    case 'DISABLE_BUTTONS':
      return true
    default:
      return state;
  }
};
