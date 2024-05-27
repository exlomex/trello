import { classNames } from '@/shared/lib/classNames';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { IconLayout } from '@/shared/layouts/IconLayout';
import CloseIcon from '@/shared/assets/close.svg';
import { useCallback, useState } from 'react';
import { CardsTypes } from '@/widgets/BoardCards';
import { useCreateNewBoard } from '@/features/AddNewBoard/api/AddNewBoardApi';
import { useCreateNewCard } from '@/features/AddNewCard/api/AddNewCardApi';
import { AllBoards } from '@/features/AllBoardsList/model/types/AllBoards';
import cls from './AddNewBoardForm.module.scss';

interface AddNewBoardFormProps {
    className?: string;
    onClose: () => void;
}

export const AddNewBoardForm = (props: AddNewBoardFormProps) => {
    const { className, onClose } = props;

    const newBoardClickCloseButton = useCallback(() => {
        onClose();
    }, [onClose]);

    const [addBoardInputValue, setAddBoardInputValue] = useState('');

    const [createNewBoard, { error }] = useCreateNewBoard();
    const newBoardOnSendHandler = async () => {
        const requestBody = {
            board_title: addBoardInputValue,
        };
        await createNewBoard(requestBody as AllBoards);
        if (!error) {
            newBoardClickCloseButton();
        }
    };

    return (
        <VStack
            className={classNames(cls.AddNewBoardForm, {}, [className])}
            gap={'24'}
        >
            <h1 className={cls.newBoardText}>Добавить новую доску</h1>
            <Input
                value={addBoardInputValue}
                onChange={setAddBoardInputValue}
                placeholder={'Введите название доски'}
                className={cls.newBoardInput}
            />

            <HStack gap={'8'}>
                <Button
                    className={cls.newBoardAddButton}
                    variant={'DefaultButton'}
                    onClick={newBoardOnSendHandler}
                >
                    Добавить колонку
                </Button>
                <Button
                    variant={'IconButton'}
                    className={cls.closeButton}
                    onClick={newBoardClickCloseButton}
                >
                    <IconLayout Svg={CloseIcon} width={8.49} height={8.49} />
                </Button>
            </HStack>
        </VStack>
    );
};
