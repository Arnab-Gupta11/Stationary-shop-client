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
      transformResponse: (response: TResponseRedux<TProduct[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    //Add new Register Semester
    // addRegisteredSemester: builder.mutation({
    //   query: (data) => ({
    //     url: "/semester-registrations/create-semester-registration",
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["semester"],
    // }),

    //Update Registered Semester
    // updateRegisteredSemester: builder.mutation({
    //   query: (args) => ({
    //     url: `/semester-registrations/${args.id}`,
    //     method: "PATCH",
    //     body: args.data,
    //   }),
    //   invalidatesTags: ["semester"],
    // }),

    //Add Course.
    // addCourse: builder.mutation({
    //   query: (data) => ({
    //     url: `/courses/create-course`,
    //     method: "POST",
    //     body: data,
    //   }),
    //   invalidatesTags: ["cousers"],
    // }),

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
export const {
  useGetAllProductsQuery
} = productManagementApi;
