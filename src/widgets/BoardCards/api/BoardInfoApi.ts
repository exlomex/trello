import { rtkApi } from '@/shared/api/rtkApi';
import { AllBoards } from '@/features/AllBoardsList/model/types/AllBoards';

const BoardInfoApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getBoardInfo: build.query<AllBoards, { id: string }>({
            query: ({ id }) => ({
                url: `/boards/${id}`,
            }),
            // providesTags: (result) => ['Column', 'Card'],
        }),
    }),
});

export const useGetBoardInfo = BoardInfoApi.useGetBoardInfoQuery;
