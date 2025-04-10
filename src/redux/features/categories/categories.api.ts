import { baseApi } from "@/redux/api/baseApi";
import { TCategory } from "@/types/category.types";
import { TQueryParam, TResponseRedux } from "@/types/global";

const categoryManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //Get All Register semesters.
    getAllCategories: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        console.log("params", params);
        return {
          url: "/category",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["category"],
      transformResponse: (response: TResponseRedux<TCategory[]>) => {
        console.log("responssss===>", response);
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
      providesTags: ["review", "product"],
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
  }),
});
export const { useGetAllCategoriesQuery, useGetProductDetailsQuery, useAddNewProductMutation, useUpdateProductMutation, useDeleteProductMutation } =
  categoryManagementApi;
