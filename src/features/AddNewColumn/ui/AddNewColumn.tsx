import { classNames } from '@/shared/lib/classNames/classNames';
import { TextArea } from '@/shared/ui/TextArea';
import {
    ForwardedRef,
    forwardRef,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import CloseIcon from '@/shared/assets/close.svg';
import { IconLayout } from '@/shared/layouts/IconLayout';
import { useCreateNewCard } from '@/features/AddNewCard/api/AddNewCardApi';
import { CardsTypes } from '@/features/BoardCards';
import { useOutsideDivHandler } from '@/shared/lib/hooks/useOutsideDivHandler/useOutsideDivHandler';
import { Card } from '@/entities/Card';
import { ColumnLayout } from '@/entities/Column';
import { useCreateNewColumn } from '@/features/AddNewColumn/api/AddNewColumnApi';
import { BoardColumnsType } from '@/features/AddNewColumn/model/types/BoardColumnsType';
import cls from './AddNewColumn.module.scss';

interface AddNewColumnProps {
    className?: string;
    boardId: string;
}

export const AddNewColumn = (props: AddNewColumnProps) => {
    const { className, boardId } = props;
    const [textAreaValue, setTextAreaValue] = useState('');
    const [isAddForm, setIsAddForm] = useState(false);
    const [createColumn, { isLoading }] = useCreateNewColumn();
    const ref = useRef<HTMLDivElement>(null);

    const clickAddButton = useCallback(() => {
        setIsAddForm(true);
    }, []);

    const clickCloseButton = useCallback(() => {
        setIsAddForm(false);
    }, []);

    const onSendHandler = async () => {
        const requestBody = {
            boardId,
            column_title: textAreaValue,
        };
        await createColumn(requestBody as BoardColumnsType);
    };

    useOutsideDivHandler(ref, setIsAddForm);
    return (
        <div className={classNames(cls.AddNewCard, {}, [className])} ref={ref}>
            {!isAddForm ? (
                <Button
                    fullWidth={true}
                    variant={'LeftAddonAddButton'}
                    onClick={clickAddButton}
                    className={cls.addButton}
                >
                    Добавить еще одну колонку
                </Button>
            ) : (
                <ColumnLayout className={cls.column}>
                    <HStack gap={'16'}>
                        <TextArea
                            value={textAreaValue}
                            onChange={setTextAreaValue}
                            className={cls.textArea}
                        />
                        <HStack gap={'8'}>
                            <Button
                                variant={'DefaultButton'}
                                onClick={onSendHandler}
                            >
                                Добавить список
                            </Button>
                            <Button
                                variant={'IconButton'}
                                className={cls.closeButton}
                                onClick={clickCloseButton}
                            >
                                <IconLayout
                                    Svg={CloseIcon}
                                    width={8.49}
                                    height={8.49}
                                />
                            </Button>
                        </HStack>
                    </HStack>
                </ColumnLayout>
            )}
        </div>
    );
};
