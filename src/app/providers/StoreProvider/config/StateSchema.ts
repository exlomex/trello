import { CounterSchema } from '@/entities/Counter';
import { rtkApi } from '@/shared/api/rtkApi';
import { BoardColumnsCardsSchema } from '@/widgets/BoardCards';

export interface StateSchema {
    counter: CounterSchema;
    boardColumns: BoardColumnsCardsSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
