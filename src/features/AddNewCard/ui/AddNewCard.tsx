import { classNames } from '@/shared/lib/classNames/classNames';
import { TextArea } from '@/shared/ui/TextArea';
import {
    ForwardedRef,
    forwardRef,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import CloseIcon from '@/shared/assets/close.svg';
import { IconLayout } from '@/shared/layouts/IconLayout';
import { useCreateNewCard } from '@/features/AddNewCard/api/AddNewCardApi';
import { CardsTypes } from '@/features/BoardCards';
import { useOutsideDivHandler } from '@/shared/lib/hooks/useOutsideDivHandler/useOutsideDivHandler';
import cls from './AddNewCard.module.scss';

interface AddNewCardProps {
    className?: string;
    columnId: string;
}

export const AddNewCard = forwardRef(
    (props: AddNewCardProps, ref: ForwardedRef<HTMLDivElement>) => {
        const { className, columnId } = props;
        const [textAreaValue, setTextAreaValue] = useState('');
        const [isAddForm, setIsAddForm] = useState(false);
        const [createPost, { isLoading }] = useCreateNewCard();

        const clickAddButton = useCallback(() => {
            setIsAddForm(true);
        }, []);

        const clickCloseButton = useCallback(() => {
            setIsAddForm(false);
        }, []);

        const onSendHandler = async () => {
            const requestBody = {
                columnId,
                card_text: textAreaValue,
            };
            await createPost(requestBody as CardsTypes);
        };

        useOutsideDivHandler(ref, setIsAddForm);
        return (
            <div className={classNames(cls.AddNewCard, {}, [className])}>
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
