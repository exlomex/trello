import { rtkApi } from '@/shared/api/rtkApi';
import { BoardCardsTypes } from '../model/types/BoardCardsTypes';

const AllBoardsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getAllBoardColumns: build.query<BoardCardsTypes[], { id: string }>({
            query: ({ id }) => ({
                url: `/columns/?_embed=cards&boardId=${id}`,
            }),
        }),
    }),
});

export const useGetAllBoardColumns = AllBoardsApi.useGetAllBoardColumnsQuery;
