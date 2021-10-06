import {types} from './actions';

const initState = {
  modal: {
    status: false,
    icon: '',
    colorIcon: '',
    title: '',
    content: '',
    isShowBtnLeft: true,
    isShowBtnRight: true,
    titleBtnLeft: '',
    titleBtnRight: '',
    actionLeft: undefined,
    actionRight: undefined,
    isHTML: false,
    type: '',
  },
};
export const modalReducer: any = (state = initState, actions: any) => {
  const {payload} = actions;
  if (actions.type == types.SET_VISIBLE_MODAL) {
    return {
      ...state,
      modal: {
        ...payload,
        icon: payload.icon || 'close',
        colorIcon: payload.colorIcon || '#000',
        isShowBtnLeft:
          payload.isShowBtnLeft != undefined ? payload.isShowBtnLeft : true,
        isShowBtnRight:
          payload.isShowBtnRight != undefined ? payload.isShowBtnRight : true,
        titleBtnLeft: payload.titleBtnLeft || 'Đóng',
        titleBtnRight: payload.titleBtnRight || 'Tiếp tục',
        isHTML: payload.isHTML != undefined ? payload.isHTML : false,
      },
    };
  } else {
    return state;
  }
};
