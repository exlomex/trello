import { CounterSchema } from '@/entities/Counter';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
    counter: CounterSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
