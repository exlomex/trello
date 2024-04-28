import { StateSchema } from '@/app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounter', () => {
    test('should return counter state', () => {
        const state: Partial<StateSchema> = {
            counter: { value: 4 },
        };

        expect(getCounterValue(state as StateSchema)).toEqual(4);
    });
});
