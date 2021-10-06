interface Modal {
    status: boolean;
    icon?: string;
    hideIcon?: boolean;
    colorIcon?: string;
    title?: string;
    content: string;
    isShowBtnLeft?: boolean;
    isShowBtnRight?: boolean;
    titleBtnLeft?: string;
    titleBtnRight?: string;
    actionLeft?: () => void;
    actionRight?: () => void;
  }
  interface ActionMain {
    loading: (status: boolean) => void;
    showModal: (modal: Modal) => void;
  }
  
  export let actionMain: ActionMain;
  export const actionInit = (props: any) => {
    console.log({props})
    actionMain = {
      loading: (status: boolean) => props.setLoading({status}),
      showModal: (modal: Modal) => props.setVisibleModal(modal),
    };
  };
  
  export const removeAccents = (str: String) => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/đ/g, 'd')
      .replace(/Đ/g, 'D');
  };
  