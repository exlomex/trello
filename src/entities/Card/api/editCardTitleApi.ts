import { rtkApi } from '@/shared/api/rtkApi';

const editCardTitleApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        editCardTitle: build.mutation<null, { id: number; body: any }>({
            query: ({ body, id }) => ({
                url: `/cards/${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Card'],
        }),
    }),
});

export const useEditCardTitle = editCardTitleApi.useEditCardTitleMutation;
