import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema';
import { CounterReducer } from '@/entities/Counter';
import { rtkApi } from '@/shared/api/rtkApi';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: CounterReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    return configureStore<StateSchema>({
        reducer: rootReducers,
        // TODO in future need to disable devtools for prod and fix ts
        preloadedState: initialState,
        devTools: true,
        // @ts-ignore
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({}).concat(rtkApi.middleware),
    });
}
