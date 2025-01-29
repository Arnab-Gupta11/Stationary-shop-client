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
  }),
});
export const { useGetUserDetailsQuery, useUpdateUserInfoMutation } = userManagementApi;
