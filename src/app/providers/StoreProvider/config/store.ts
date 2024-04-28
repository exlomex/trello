import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { CounterReducer } from '@/entities/Counter';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: { counter: CounterReducer },
        // TODO in future need to disable devtools for prod
        preloadedState: initialState,
    });
}
