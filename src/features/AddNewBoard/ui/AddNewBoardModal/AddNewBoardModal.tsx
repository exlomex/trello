import { Modal } from '@/shared/ui/Modal';
import { AddNewBoardForm } from '../AddNewBoardForm/AddNewBoardForm';

interface AddNewBoardModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const AddNewBoardModal = (props: AddNewBoardModalProps) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <AddNewBoardForm className={className} onClose={onClose} />
        </Modal>
    );
};
