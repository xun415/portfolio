import {create} from "zustand";

type Dialog = {
    show: boolean
    content: string | React.ReactElement
}

type DialogProps = {
    dialog: Dialog
    setDialogShow: (_new: Partial<Dialog>) => void
    setDialogHide: () => void
}

const initialDialog: Dialog = {
    show: false,
    content: '',
}
export const useDialogStore = create<DialogProps>(set => ({
    dialog: { ...initialDialog },
    setDialogShow: (_new: Partial<Dialog>) => {
        set((_old: DialogProps) => ({
            dialog: {
                ..._old.dialog,
                ..._new,
                show: true
            }
        }))
    },
    setDialogHide: () => {
        set((_old: DialogProps) => ({
            dialog: {
                ..._old.dialog,
                show: false
            }
        }))
    }
}))
