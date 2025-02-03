import { baseApi } from "@/redux/api/baseApi";

const reviewManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //Get All Register semesters.
    getAllReviews: builder.query({
      query: (args) => {
        // const params = new URLSearchParams();
        // if (args) {
        //   args.forEach((item: TQueryParam) => {
        //     params.append(item.name, item.value as string);
        //   });
        // }
        return {
          url: `/review/getReview/${args.id}`,
          method: "GET",
        };
      },
      providesTags: ["review"],
      // transformResponse: (response: TResponseRedux<TProduct[]>) => {
      //   return {
      //     data: response.data,
      //     meta: response.meta,
      //   };
      // },
    }),
    getReviewDetails: builder.query({
      query: (args) => {
        return {
          url: `/review/${args.id}`,
          method: "GET",
        };
      },
    }),

    // Add new Product
    addNewReview: builder.mutation({
      query: (data) => ({
        url: "/review",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),

    // Update Registered Semester
    updateReview: builder.mutation({
      query: (args) => ({
        url: `/review/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["review"],
    }),

    //Delete Product
    deleteReview: builder.mutation({
      query: (args) => ({
        url: `/review/${args.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["review"],
    }),
  }),
});
export const { useGetAllReviewsQuery, useAddNewReviewMutation, useDeleteReviewMutation, useGetReviewDetailsQuery, useUpdateReviewMutation } =
  reviewManagementApi;
