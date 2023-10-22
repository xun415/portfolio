import {Dialog, DialogClose, DialogTrigger} from "@radix-ui/react-dialog";
import {DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "@/components/ui/Dialog";
import {useDialogStore} from "@/store/dialog";

const ConfirmDialog = () => {
    const {dialog, setDialogHide } = useDialogStore()
    const {show, content} = dialog
    return (
        <Dialog open={show} onOpenChange={open => {
            !open && setDialogHide?.()
        }}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className={'text-center'}>{content}</DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

export default ConfirmDialog

