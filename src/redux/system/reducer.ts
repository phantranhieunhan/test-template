import {types} from './actions';

const initState = {
    isLoading: false,
    message: '',
    splashLoad: true
};

export const systemReducer: any = (state = initState, actions: any) => {
    const {payload} = actions;
    switch (actions.type) {
      case types.SET_LOADING:
        return {isLoading: payload.status, message: payload.message};
      case types.SET_SPLASH_LOAD:
        return {...state, splashLoad: payload};
      default:
        return state;
    }
};