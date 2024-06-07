import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const studentApi = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'https://641dd63d945125fff3d75742.mockapi.io' }),
    endpoints: (builder) => ({
        getStudents: builder.query<Students[], void>({
        query: () => '/rtk',
        }),
    }),
});

export const { useGetStudentsQuery } = studentApi ;