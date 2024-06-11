import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Student } from "../models/studentModel";

export const studentApi = createApi({
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://6662bcbc62966e20ef09cbef.mockapi.io',
    }),
    tagTypes: ["Student"],
    endpoints: (builder) => ({
        getStudents: builder.query<Student[], void>({
            query: () => '/rtk',
            providesTags: ["Student"],
        }),
        addStudent: builder.mutation<void, Student>({
            query: (student) => ({
                url: '/rtk',
                method: 'POST',
                body: student,
            }),
            invalidatesTags: ["Student"],
        }),
        deleteStudent: builder.mutation<void, string>({
            query: (id) => ({
                url: `/rtk/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ["Student"],
        }),
        updateStudent: builder.mutation<void, string>({
            query: ({id,...rest}) => ({
                url: `/rtk/${id}`,
                method: 'PUT',
                body: rest,
            }),
            invalidatesTags: ["Student"],
        }),
    }),
});

export const { useGetStudentsQuery, useAddStudentMutation, useDeleteStudentMutation, useUpdateStudentMutation } = studentApi ;