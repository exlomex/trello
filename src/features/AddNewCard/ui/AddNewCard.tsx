import { classNames } from '@/shared/lib/classNames/classNames';
import { TextArea } from '@/shared/ui/TextArea';
import { ForwardedRef, forwardRef, useCallback, useState } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import CloseIcon from '@/shared/assets/close.svg';
import { IconLayout } from '@/shared/layouts/IconLayout';
import { useCreateNewCard } from '@/features/AddNewCard/api/AddNewCardApi';
import { useOutsideDivHandler } from '@/shared/lib/hooks/useOutsideDivHandler/useOutsideDivHandler';
import { CardsTypes } from '@/widgets/BoardCards';
import cls from './AddNewCard.module.scss';

interface AddNewCardProps {
    className?: string;
    columnId: number | string;
}

export const AddNewCard = forwardRef(
    (props: AddNewCardProps, ref: ForwardedRef<HTMLDivElement>) => {
        const { className, columnId } = props;
        const [textAreaValue, setTextAreaValue] = useState('');
        const [isAddForm, setIsAddForm] = useState(false);
        const [createPost] = useCreateNewCard();

        const clickAddButton = useCallback(() => {
            setIsAddForm(true);
        }, []);

        const clickCloseButton = useCallback(() => {
            setIsAddForm(false);
        }, []);

        const onSendHandler = async () => {
            if (textAreaValue.trim()) {
                const requestBody = {
                    columnId,
                    card_text: textAreaValue,
                };
                await createPost(requestBody as CardsTypes)
                    .unwrap()
                    .then(() => {
                        setTextAreaValue('');
                    })
                    .catch((error) => console.error('rejected', error));
            }
        };

        useOutsideDivHandler(ref, setIsAddForm);

        return (
            <div
                className={classNames(cls.AddNewCard, {}, [className])}
                draggable
                onDragStart={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}
            >
                {!isAddForm ? (
                    <Button
                        fullWidth={true}
                        variant={'LeftAddonAddButton'}
                        onClick={clickAddButton}
                    >
                        Добавить карточку
                    </Button>
                ) : (
                    <div>
                        <HStack gap={'16'}>
                            <TextArea
                                value={textAreaValue}
                                onChange={setTextAreaValue}
                            />
                            <HStack gap={'8'}>
                                <Button
                                    variant={'DefaultButton'}
                                    onClick={onSendHandler}
                                >
                                    Добавить карточку
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
                    </div>
                )}
            </div>
        );
    },
);
