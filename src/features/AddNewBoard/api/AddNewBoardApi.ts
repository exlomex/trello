import { rtkApi } from '@/shared/api/rtkApi';
import { AllBoards } from '@/features/AllBoardsList/model/types/AllBoards';

const AddNewBoardApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        createNewBoard: build.mutation<AllBoards, AllBoards>({
            query: (body) => ({
                url: '/boards',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Board'],
        }),
    }),
});

export const useCreateNewBoard = AddNewBoardApi.useCreateNewBoardMutation;
