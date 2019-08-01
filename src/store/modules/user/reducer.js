import produce from 'immer';

const INITIAL_STATE = {
  profile: null,
};

// return the updated state according to the action taken
export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.profile = action.payload.user;
        draft.signed = true;
      });
    default:
      return state;
  }
}
