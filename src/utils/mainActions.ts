

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
  navigation?: any;
  type?: Number;
  colorHeader?: string;
}
interface ActionMain {
  loading: (status: boolean, message: string) => void;
  showModal: (modal: Modal) => void;
  showModalWarm: (modal : Modal) => void;
  showModalInfo: (modal: Modal)=>void;
  // showDialogOrder:(modal:Modal)=>void
}

export let actionMain: ActionMain;
export const actionInit = (props: any) => {
  actionMain = {
    loading: (status: boolean, message: string) => {
      return props.setLoading({ status, message })
    },
    showModal: (modal: Modal) => {
      modal = {...modal, type: 1}
      props.setVisibleModal(modal)
    },
    showModalWarm: (modal: Modal)=> {
      modal = {...modal, colorHeader: '#ff5757', type: 2}
      props.setVisibleModal(modal)
    },
    showModalInfo: (modal: Modal)=> {
      modal = {...modal, colorHeader: '#ff5757', type: 2}
      props.setVisibleModal(modal)
    }
    // showDialogOrder(modal:Modal) =>
  };
};

export const removeAccents = (str: String) => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
};

