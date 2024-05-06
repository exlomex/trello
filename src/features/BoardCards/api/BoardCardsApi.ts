import { rtkApi } from '@/shared/api/rtkApi';
import { BoardCardsTypes } from '../model/types/BoardCardsTypes';

const AllBoardsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getAllBoardColumns: build.query<BoardCardsTypes[], null>({
            query: () => ({
                url: '/columns/?_embed=cards&boardId=1',
            }),
        }),
    }),
});

export const useGetAllBoardColumns = AllBoardsApi.useGetAllBoardColumnsQuery;
