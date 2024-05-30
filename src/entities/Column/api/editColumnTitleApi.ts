import { rtkApi } from '@/shared/api/rtkApi';

const editColumnTitleApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        editColumnTitle: build.mutation<null, { id: number; body: any }>({
            query: ({ body, id }) => ({
                url: `/columns/${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Column'],
        }),
    }),
});

export const useEditColumnTitle = editColumnTitleApi.useEditColumnTitleMutation;
