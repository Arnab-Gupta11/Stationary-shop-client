/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam, TResponseRedux } from "@/types/global";

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
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/user",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["user"],
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
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
