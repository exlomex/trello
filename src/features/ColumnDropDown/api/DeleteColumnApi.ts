import { rtkApi } from '@/shared/api/rtkApi';

const DeleteColumnApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        deleteColumn: build.mutation<null, string | number>({
            query: (id) => ({
                url: `/columns/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Column'],
        }),
    }),
});

export const useDeleteColumn = DeleteColumnApi.useDeleteColumnMutation;
