import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam, TResponseRedux } from "@/types/global";
import { TProduct } from "@/types/product.types";

const productManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //Get All Register semesters.
    getAllProducts: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/products",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["product"],
      transformResponse: (response: TResponseRedux<TProduct[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getProductDetails: builder.query({
      query: (args) => {
        return {
          url: `/products/${args.id}`,
          method: "GET",
        };
      },
    }),

    // Add new Product
    addNewProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),

    // Update Registered Semester
    updateProduct: builder.mutation({
      query: (args) => ({
        url: `/products/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["product"],
    }),

    //Delete Product
    deleteProduct: builder.mutation({
      query: (args) => ({
        url: `/products/${args.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),

    //Add Faculty
    // addFaculties: builder.mutation({
    //   query: (args) => ({
    //     url: `/courses/${args.courseId}/assign-faculties`,
    //     method: "PUT",
    //     body: args.data,
    //   }),
    //   invalidatesTags: ["cousers"],
    // }),
  }),
});
export const { useGetAllProductsQuery, useGetProductDetailsQuery, useAddNewProductMutation, useUpdateProductMutation,useDeleteProductMutation } = productManagementApi;
