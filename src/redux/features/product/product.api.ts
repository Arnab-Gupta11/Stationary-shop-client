import { baseApi } from "@/redux/api/baseApi";
import { TQueryParam, TResponseRedux } from "@/types/global";
import { IProduct } from "@/types/product.types";

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
      transformResponse: (response: TResponseRedux<IProduct[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getProductDetails: builder.query({
      query: (args) => {
        return {
          url: `/products/params/${args.slug}`,
          method: "GET",
        };
      },
      providesTags: ["review", "product"],
    }),
    //Get all deleted Products.
    getAllDeletedProducts: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/products/deleted-products",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["product"],
      transformResponse: (response: TResponseRedux<IProduct[]>) => {
        return {
          data: response.data,
          meta: response.meta,
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
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),

    //Restore Product
    restoreProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}/restore`,
        method: "PUT",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});
export const {
  useGetAllProductsQuery,
  useGetProductDetailsQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetAllDeletedProductsQuery,
  useRestoreProductMutation,
} = productManagementApi;
