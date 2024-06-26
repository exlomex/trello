import { classNames } from '@/shared/lib/classNames';
import { Button } from '@/shared/ui/Button';
import { memo, useCallback, useState } from 'react';
import { AddNewBoardModal } from '../AddNewBoardModal/AddNewBoardModal';

interface AddNewBoardButtonProps {
    className?: string;
}

export const AddNewBoardButton = memo((props: AddNewBoardButtonProps) => {
    const { className } = props;

    const [isModal, setIsModal] = useState(false);

    const toggleModal = useCallback(() => {
        setIsModal((prev) => !prev);
    }, []);

    return (
        <>
            <Button
                variant={'LeftAddonCreateButton'}
                className={classNames('', {}, [className])}
                onClick={toggleModal}
            >
                Создать доску
            </Button>

            <AddNewBoardModal isOpen={isModal} onClose={toggleModal} />
        </>
    );
});
