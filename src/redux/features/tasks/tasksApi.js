import baseAPI from "../api/baseApi";

const tasksApi = baseAPI.injectEndpoints({
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/allTasks',
            providesTags: ['Tasks']
        }),
        updateTaskStatus: builder.mutation({
            query: ({ id, data }) => ({
                url: `/taskStatus/${id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags: ['Tasks'],
        }),
        addTask: builder.mutation({
            query: (task) => ({
                url: '/addTask',
                method: 'POST',
                body: task,
            }),
            invalidatesTags: ['Tasks'],
        })
    })
})

export const { useAddTaskMutation, useUpdateTaskStatusMutation, useGetTasksQuery } = tasksApi;