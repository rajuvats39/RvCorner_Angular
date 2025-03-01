export interface DialogData {
    title: string;
    message: string;
    primaryBtnTxt?: string;
    secondaryBtnTxt?: string;
    dangerBtnTxt?: string;
    isShowCloseIcon: boolean;
    showOkOnly?: boolean;
    hideSecondaryButton?: boolean;
}