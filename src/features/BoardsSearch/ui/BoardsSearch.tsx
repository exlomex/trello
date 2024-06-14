import { classNames } from '@/shared/lib/classNames';
import '../../../shared/ui/popups/styles/teststyles.css';
import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
    Transition,
} from '@headlessui/react';
import { useCallback, useState } from 'react';
import { AllBoards } from '@/features/AllBoardsList/model/types/AllBoards';
import { useTheme } from '@/app/providers/ThemeProvider/lib/useTheme';
import { useRouter } from 'next/navigation';
import cls from './BoardsSearch.module.scss';

interface BoardsSearchProps {
    className?: string;
    boards?: AllBoards[];
}

export const BoardsSearch = (props: BoardsSearchProps) => {
    const { className, boards } = props;

    const { theme } = useTheme();

    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState<AllBoards | null>(null);

    const filteredPeople =
        query === ''
            ? boards
            : boards?.filter((board) =>
                  board.board_title
                      .toLowerCase()
                      .includes(query.toLowerCase().trim()),
              );

    const router = useRouter();

    const onChangePage = useCallback(
        (id: string) => {
            const originalPath = window.location.origin;
            router.push(`${originalPath}/BoardPage/${id}`);
        },
        [router],
    );

    return (
        <Combobox
            value={selected}
            onChange={(value) => setSelected(value)}
            as={'div'}
            className={classNames(cls.BoardsComboBox, {}, [])}
        >
            <div className="relative">
                <ComboboxInput
                    displayValue={(board: any) => board?.board_title}
                    onChange={(event) => setQuery(event.target.value)}
                    as={'input'}
                    className={cls.Input}
                />
            </div>
            <Transition
                enter="transition-enter"
                enterFrom="transition-enter-from"
                enterTo="transition-enter-to"
                leave="transition-leave"
                leaveFrom="transition-leave-from"
                leaveTo="transition-leave-to"
                afterLeave={() => setQuery('')}
            >
                <ComboboxOptions
                    anchor="bottom"
                    className={classNames(cls.options, {}, [theme])}
                >
                    {filteredPeople?.map((board) => (
                        <ComboboxOption
                            key={board.id}
                            value={board}
                            className={cls.option}
                            onClick={() => {
                                onChangePage(board.id);
                            }}
                        >
                            <div>{board.board_title}</div>
                        </ComboboxOption>
                    ))}
                </ComboboxOptions>
            </Transition>
        </Combobox>
    );
};
