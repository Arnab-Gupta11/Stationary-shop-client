import { baseApi } from "@/redux/api/baseApi";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserDetails: builder.query({
      query: (args) => {
        return {
          url: `/user/${args.id}`,
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),
    updateUserInfo: builder.mutation({
      query: (args) => ({
        url: `/user/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["user"],
    }),

    getAllUsers: builder.query({
      query: () => {
        return {
          url: "/user",
          method: "GET",
        };
      },
      providesTags: ["user"],
    }),

    // Update Ordered Status
    updateUserStatus: builder.mutation({
      query: (args) => ({
        url: `/user/userStatus/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});
export const { useGetUserDetailsQuery, useUpdateUserInfoMutation, useGetAllUsersQuery, useUpdateUserStatusMutation } = userManagementApi;
