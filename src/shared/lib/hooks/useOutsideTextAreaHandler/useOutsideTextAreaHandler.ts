import { RefObject, useCallback, useEffect } from 'react';

type ediTypes = 'column_title' | 'board_title' | 'card_text';

export function useOutsideDivHandler(
    editType: ediTypes,
    ref: RefObject<HTMLTextAreaElement> | RefObject<HTMLInputElement>,
    textAreaValue: string,
    columnId: number,
    stateFunction?: (state: boolean) => void,
    state?: boolean,
    updateDataFunction?: (params: { id: number; body: any }) => void,
) {
    const handleClick = useCallback(
        (e: MouseEvent) => {
            if (ref && 'current' in ref && ref.current) {
                if (ref && !ref.current.contains(e.target as Node)) {
                    stateFunction?.(false);
                    const requestBody = { [editType]: textAreaValue };
                    updateDataFunction?.({ id: columnId, body: requestBody });
                }
            }
        },
        [
            columnId,
            ref,
            stateFunction,
            textAreaValue,
            updateDataFunction,
            editType,
        ],
    );

    useEffect(() => {
        if (state) {
            document.addEventListener('mouseup', handleClick);
        }
        return () => document.removeEventListener('mouseup', handleClick);
    }, [handleClick, state]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape' || e.key === 'Enter') {
                stateFunction?.(false);
                const requestBody = { [editType]: textAreaValue };
                updateDataFunction?.({ id: columnId, body: requestBody });
            }
        },
        [columnId, stateFunction, textAreaValue, updateDataFunction, editType],
    );

    useEffect(() => {
        if (state) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => window.removeEventListener('keydown', onKeyDown);
    }, [state, onKeyDown]);
}
