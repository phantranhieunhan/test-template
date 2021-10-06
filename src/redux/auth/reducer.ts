import {types} from './actions';

const initState = {
  messAuth: '',
  profileInfo: undefined,
  isLogin: false,
  isFinger:false
};
export const authReducer: any = (state = initState, actions: any) => {
  const {payload} = actions;
  switch (actions.type) {
    case types.SIGN_IN:
      return {...state, token: ''};
    case types.SIGN_IN_FAIL:
      return {...state, token: '', messAuth: payload};
    case types.SIGN_IN_SUCCESS:
      return {...state, isLogin: true, profileInfo: payload};
    case types.SET_PROFILE_INFO:
      return {...state, profileInfo: payload};
    case types.SIGN_OUT:
      return {...state, isLogin: false, profileInfo: undefined};
      // return {...state, isLogin: false};
    case types.SET_FINGER:
      return {...state,isFinger:payload}
    default:
      return state;
  }
};
