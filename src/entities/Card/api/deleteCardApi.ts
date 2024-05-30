import { rtkApi } from '@/shared/api/rtkApi';

const deleteCardApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        deleteCard: build.mutation<null, number>({
            query: (id) => ({
                url: `/cards/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Card'],
        }),
    }),
});

export const useDeleteCard = deleteCardApi.useDeleteCardMutation;
