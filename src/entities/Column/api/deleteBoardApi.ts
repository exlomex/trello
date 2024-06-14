import { rtkApi } from '@/shared/api/rtkApi';

const deleteBoardApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        deleteBoard: build.mutation<null, { id: number }>({
            query: ({ id }) => ({
                url: `/delete-board/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Board'],
        }),
    }),
});

export const useDeleteBoard = deleteBoardApi.useDeleteBoardMutation;
