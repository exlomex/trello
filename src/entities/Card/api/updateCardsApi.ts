import { rtkApi } from '@/shared/api/rtkApi';
import { BoardColumnsType } from '@/features/AddNewColumn/model/types/BoardColumnsType';
import { CardsTypes } from '@/widgets/BoardCards';

const updateCardsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        updateCards: build.mutation<CardsTypes[], CardsTypes[]>({
            query: (body) => ({
                url: '/update-cards',
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['Card'],
        }),
    }),
});

export const useUpdateCards = updateCardsApi.useUpdateCardsMutation;
