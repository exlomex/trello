import { rtkApi } from '@/shared/api/rtkApi';

const putRequestApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        putRequest: build.query<{}, null>({
            query: () => ({
                url: '/boards/4',
                method: 'put',
                body: {
                    board_title: 'boardTest',
                },
            }),
        }),
    }),
});

export const usePutRequest = putRequestApi.usePutRequestQuery;
