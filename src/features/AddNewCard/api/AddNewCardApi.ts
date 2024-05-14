import { rtkApi } from '@/shared/api/rtkApi';
import { CardsTypes } from '@/widgets/BoardCards';

const AddNewCardApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        createNewCard: build.mutation<CardsTypes[], CardsTypes>({
            query: (body) => ({
                url: '/cards',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Card'],
        }),
    }),
});

export const useCreateNewCard = AddNewCardApi.useCreateNewCardMutation;
