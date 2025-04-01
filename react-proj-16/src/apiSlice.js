import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "/tasks",
      transformResponse: (resp) => resp.reverse(),
      providesTags: ["tasks"],
      keepUnusedDataFor: 300, // Cache data for 5 minutes
    }),
    addTodos: builder.mutation({
      query: (body) => ({
        url: "/tasks",
        method: "POST",
        body: body,
      }),
      // invalidate the query
      invalidatesTags: ["tasks"],
    }),
  }),
});

export const { useGetTodosQuery, useAddTodosMutation } = apiSlice;
