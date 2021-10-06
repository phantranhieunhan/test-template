export const types = {
    SET_VISIBLE_MODAL: 'SET_VISIBLE_MODAL',
  };
  const action = (type: string, payload?: any) => ({type, payload});
  export const modalAction = {
    setVisibleModal: (payload: any) => action(types.SET_VISIBLE_MODAL, payload),
  };
  