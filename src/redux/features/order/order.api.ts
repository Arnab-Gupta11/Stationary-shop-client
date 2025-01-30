/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam, TResponseRedux } from "@/types/global";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (userInfo) => ({
        url: "/orders",
        method: "POST",
        body: userInfo,
      }),
    }),
    // getOrders: builder.query({
    //   query: () => "/order",
    // }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/orders/verify",
        params: { order_id },
        method: "GET",
      }),
    }),

    getAllOrders: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/orders",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["order"],
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    // Update Ordered Status
    updateOrderStatus: builder.mutation({
      query: (args) => ({
        url: `/orders/updateStatus/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const { useCreateOrderMutation, useVerifyOrderQuery, useGetAllOrdersQuery, useUpdateOrderStatusMutation } = orderApi;
