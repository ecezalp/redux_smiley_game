export default function smileysReducer(state = [], action) {
  switch (action.type) {
    case 'CREATE_TARGET_SMILEY':
      return action.payload
    default:
      return state;
  }
};
