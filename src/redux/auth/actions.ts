export const types = {
    SIGN_IN: 'SIGN_IN',
    SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
    SIGN_IN_FAIL: 'SIGN_IN_FAIL',
    SET_PROFILE_INFO: 'SET_PROFILE_INFO',
    SIGN_OUT: 'SIGN_OUT',
    SET_FINGER:'SET_FINGER'
  };
  const action = (type: string, payload?: any) => ({type, payload});
  export const authAction = {
    signIn: (payload: any) => action(types.SIGN_IN, payload),
    signInSuccess: (payload: any) => action(types.SIGN_IN_SUCCESS, payload),
    signInFail: (payload: any) => action(types.SIGN_IN_FAIL, payload),
    setProfileInfo: (payload: any) => action(types.SET_PROFILE_INFO, payload),
    signOut: (payload: any) => action(types.SIGN_OUT, payload),
    setFinger:(payload:any)=> action(types.SET_FINGER,payload)
  };
  