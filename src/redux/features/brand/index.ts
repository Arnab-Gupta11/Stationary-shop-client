import { baseApi } from "@/redux/api/baseApi";
import { TBrand } from "@/types/brand.types";

import { TQueryParam, TResponseRedux } from "@/types/global";

const brandManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //Get all brands by admin.
    getAllBrandsByAdmin: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/brands/admin",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["brand"],
      transformResponse: (response: TResponseRedux<TBrand[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    //Get all deleted Categories.
    getAllDeletedBrands: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/brands/deleted-brands",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["brand"],
      transformResponse: (response: TResponseRedux<TBrand[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    //Get All Brands.
    getAllBrands: builder.query({
      query: () => {
        return {
          url: "/brands",
          method: "GET",
        };
      },
      providesTags: ["brand"],
    }),

    // Add new Category
    addNewBrand: builder.mutation({
      query: (data) => ({
        url: "/brands",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["brand"],
    }),

    //Get Brand details
    getBrandDetails: builder.query({
      query: (args) => {
        return {
          url: `/brands/${args.id}`,
          method: "GET",
        };
      },
      providesTags: ["brand"],
    }),

    // Update Category
    updateBrand: builder.mutation({
      query: (args) => ({
        url: `/brands/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["brand"],
    }),

    //Delete Category
    deleteBrand: builder.mutation({
      query: (id) => ({
        url: `/brands/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["brand"],
    }),

    //Restore Category
    restoreBrand: builder.mutation({
      query: (id) => ({
        url: `/brands/${id}/restore`,
        method: "PUT",
      }),
      invalidatesTags: ["brand"],
    }),
  }),
});
export const {
  useAddNewBrandMutation,
  useDeleteBrandMutation,
  useGetAllBrandsByAdminQuery,
  useGetAllBrandsQuery,
  useGetAllDeletedBrandsQuery,
  useGetBrandDetailsQuery,
  useRestoreBrandMutation,
  useUpdateBrandMutation,
} = brandManagementApi;
