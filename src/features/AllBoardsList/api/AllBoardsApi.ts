import { rtkApi } from '@/shared/api/rtkApi';
import { AllBoards } from '../model/types/AllBoards';

const AllBoardsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getAllBoards: build.query<AllBoards[], null>({
            query: () => ({
                url: '/boards',
            }),
        }),
    }),
});

export const useAllBords = AllBoardsApi.useGetAllBoardsQuery;
