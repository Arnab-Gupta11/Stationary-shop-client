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

    //Get All products of a category.
    getAllProductsOfACategory: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args.params) {
          args.params.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: `/products/category/${args.id}`,
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
    //Get product details.
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

    //Get Top selling products
    getTopSellingProducts: builder.query({
      query: () => ({
        url: "/products/trending-products",
        method: "GET",
      }),
      providesTags: ["review", "product"],
    }),

    //Get Top rated products
    getTopRatedProducts: builder.query({
      query: () => ({
        url: "/products/top-rated-products",
        method: "GET",
      }),
      providesTags: ["review", "product"],
    }),

    //Get featured products
    getFeaturedProducts: builder.query({
      query: () => ({
        url: "/products/fetured-product",
        method: "GET",
      }),
      providesTags: ["review", "product"],
    }),

    //Update featured product status.
    updateFeaturedProductsStatus: builder.mutation({
      query: (id) => ({
        url: `/products/fetured-product/${id}`,
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
  useGetTopSellingProductsQuery,
  useGetTopRatedProductsQuery,
  useGetFeaturedProductsQuery,
  useUpdateFeaturedProductsStatusMutation,
  useGetAllProductsOfACategoryQuery
} = productManagementApi;
