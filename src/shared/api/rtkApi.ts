import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkApi = createApi({
    tagTypes: ['Card'],
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        // TODO define plugin api
        baseUrl: 'http://localhost:5000',
    }),
    endpoints: (builder) => ({}),
});
