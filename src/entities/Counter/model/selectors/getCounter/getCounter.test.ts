import type { StateSchema } from '@/app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    test('should return counter state', () => {
        const state: Partial<StateSchema> = {
            counter: { value: 4 },
        };

        expect(getCounter(state as StateSchema)).toEqual({ value: 4 });
    });
});
