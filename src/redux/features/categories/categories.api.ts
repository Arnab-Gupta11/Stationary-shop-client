import { baseApi } from "@/redux/api/baseApi";
import { TCategory } from "@/types/category.types";
import { TQueryParam, TResponseRedux } from "@/types/global";

const categoryManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //Get All Categories.
    getAllCategories: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/category",
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

    //Get All Categories option.
    getAllCategoriesOption: builder.query({
      query: () => {
        return {
          url: "/category/category-options",
          method: "GET",
        };
      },
      providesTags: ["category"],
    }),

    // Add new Category
    addNewCategory: builder.mutation({
      query: (data) => ({
        url: "/category",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["category"],
    }),

    getCategoryDetails: builder.query({
      query: (args) => {
        return {
          url: `/category/${args.id}`,
          method: "GET",
        };
      },
      providesTags: ["category"],
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
} = categoryManagementApi;
