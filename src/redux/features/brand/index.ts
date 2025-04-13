import { baseApi } from "@/redux/api/baseApi";
import { TCategory } from "@/types/category.types";
import { TQueryParam, TResponseRedux } from "@/types/global";

const categoryManagementApi = baseApi.injectEndpoints({
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
      transformResponse: (response: TResponseRedux<TCategory[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    //Get all deleted Categories.
    getAllDeletedCategories: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/category/deleted-categories",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["category"],
      transformResponse: (response: TResponseRedux<TCategory[]>) => {
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
    updateCategory: builder.mutation({
      query: (args) => ({
        url: `/category/${args.id}`,
        method: "PUT",
        body: args.data,
      }),
      invalidatesTags: ["category"],
    }),

    //Delete Category
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["category"],
    }),
    //Restore Category
    restoreCategory: builder.mutation({
      query: (id) => ({
        url: `/category/${id}/restore`,
        method: "PUT",
      }),
      invalidatesTags: ["category"],
    }),
  }),
});
export const {
  useGetAllCategoriesQuery,
  useGetCategoryDetailsQuery,
  useAddNewCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetAllCategoriesOptionQuery,
  useGetAllDeletedCategoriesQuery,
  useRestoreCategoryMutation,
} = categoryManagementApi;
