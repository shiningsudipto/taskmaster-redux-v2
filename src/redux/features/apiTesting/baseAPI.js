import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseAPI = createApi({
    reducerPath: 'apiTesting',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => '/posts',
        }),
        getPostByID: builder.query({
            query: (id) => `/posts/${id}`,
        }),
        // getPostByID: builder.query({
        //     query: (id) => ({
        //         url: `/posts/${id}`
        //     }),
        // }),
        setPost: builder.mutation({
            query: (post) => ({
                url: '/posts',
                method: 'POST',
                body: post,
            })
        })
    })
})

export const { useGetPostsQuery, useGetPostByIDQuery, useSetPostMutation } = baseAPI;

export default baseAPI;