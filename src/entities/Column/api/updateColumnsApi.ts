import { rtkApi } from '@/shared/api/rtkApi';
import { BoardColumnsType } from '@/features/AddNewColumn/model/types/BoardColumnsType';

const updateColumnsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        updateColumns: build.mutation<BoardColumnsType[], BoardColumnsType[]>({
            query: (body) => ({
                url: '/update-columns',
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['Column'],
        }),
    }),
});

export const useUpdateColumns = updateColumnsApi.useUpdateColumnsMutation;
