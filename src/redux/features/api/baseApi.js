import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseAPI = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000'
    }),
    tagTypes: ['Tasks'],
    endpoints: () => ({})
})

// export const { useGetTasksQuery, useUpdateTaskStatusMutation, useAddTaskMutation } = baseAPI;

export default baseAPI;