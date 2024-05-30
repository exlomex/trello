import { rtkApi } from '@/shared/api/rtkApi';

const editBoardTitleApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        editBoardTitle: build.mutation<null, { id: number; body: any }>({
            query: ({ body, id }) => ({
                url: `/boards/${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Board'],
        }),
    }),
});

export const useEditBoardTitle = editBoardTitleApi.useEditBoardTitleMutation;
