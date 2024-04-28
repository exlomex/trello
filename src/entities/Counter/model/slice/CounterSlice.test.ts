import { CounterReducer, CounterSchema } from '@/entities/Counter';
import { CounterActions } from '@/entities/Counter/model/slice/CounterSlice';

describe('CounterSlice', () => {
    test('increment test', () => {
        const state: CounterSchema = {
            value: 10,
        };

        expect(CounterReducer(state, CounterActions.increment())).toEqual({
            value: 11,
        });
    });

    test('increment test', () => {
        const state: CounterSchema = {
            value: 10,
        };

        expect(CounterReducer(state, CounterActions.decrement())).toEqual({
            value: 9,
        });
    });

    test('increment test', () => {
        const state: CounterSchema = {
            value: 0,
        };

        expect(CounterReducer(state, CounterActions.increment())).toEqual({
            value: 1,
        });
    });
});
