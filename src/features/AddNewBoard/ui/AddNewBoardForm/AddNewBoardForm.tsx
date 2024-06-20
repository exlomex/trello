import { classNames } from '@/shared/lib/classNames';
import { Input } from '@/shared/ui/Input';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { IconLayout } from '@/shared/layouts/IconLayout';
import CloseIcon from '@/shared/assets/close.svg';
import { memo, useCallback, useState } from 'react';
import { useCreateNewBoard } from '@/features/AddNewBoard/api/AddNewBoardApi';
import { AllBoards } from '@/features/AllBoardsList/model/types/AllBoards';
import cls from './AddNewBoardForm.module.scss';
import { getRandomPastelColor } from '../../lib/randomColor';

interface AddNewBoardFormProps {
    className?: string;
    onClose: () => void;
}

export const AddNewBoardForm = memo((props: AddNewBoardFormProps) => {
    const { className, onClose } = props;

    const newBoardClickCloseButton = useCallback(() => {
        onClose();
    }, [onClose]);

    const [addBoardInputValue, setAddBoardInputValue] = useState('');

    const [createNewBoard] = useCreateNewBoard();
    const newBoardOnSendHandler = async () => {
        if (addBoardInputValue) {
            const pastelColor = getRandomPastelColor();

            const requestBody = {
                board_title: addBoardInputValue,
                board_color: pastelColor,
            };
            await createNewBoard(requestBody as AllBoards)
                .unwrap()
                .then(() => {
                    newBoardClickCloseButton();
                    setAddBoardInputValue('');
                })
                .catch((error) => console.error('rejected', error));
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
                    Добавить доску
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
});
