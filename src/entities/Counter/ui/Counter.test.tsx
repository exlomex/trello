import { fireEvent, render, screen } from '@testing-library/react';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { Counter } from '@/entities/Counter';

describe('Counter', () => {
    test('defaultStateTest', () => {
        render(
            <StoreProvider initialState={{ counter: { value: 10 } }}>
                <Counter />
            </StoreProvider>,
        );
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    test('incrementTest', () => {
        render(
            <StoreProvider initialState={{ counter: { value: 10 } }}>
                <Counter />
            </StoreProvider>,
        );
        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrementTest', () => {
        render(
            <StoreProvider initialState={{ counter: { value: 10 } }}>
                <Counter />
            </StoreProvider>,
        );
        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
