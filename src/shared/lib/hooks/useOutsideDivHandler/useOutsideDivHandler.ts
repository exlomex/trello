import { ForwardedRef, useCallback, useEffect } from 'react';

export function useOutsideDivHandler(
    ref: ForwardedRef<HTMLDivElement>,
    stateFunction?: (state: boolean) => void,
) {
    const handleClick = useCallback(
        (e: MouseEvent) => {
            if (ref && 'current' in ref && ref.current) {
                if (ref && !ref.current.contains(e.target as Node)) {
                    stateFunction?.(false);
                }
            }
        },
        [ref, stateFunction],
    );

    useEffect(() => {
        document.addEventListener('mouseup', handleClick);
        return () => document.removeEventListener('mouseup', handleClick);
    }, [handleClick]);
}
