import { rtkApi } from '@/shared/api/rtkApi';
import { BoardColumnsType } from '../model/types/BoardColumnsType';

const AddNewColumnApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        createNewColumn: build.mutation<BoardColumnsType, BoardColumnsType>({
            query: (body) => ({
                url: '/columns',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Column'],
        }),
    }),
});

export const useCreateNewColumn = AddNewColumnApi.useCreateNewColumnMutation;
