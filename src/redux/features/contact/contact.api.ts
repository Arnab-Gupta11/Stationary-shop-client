import { baseApi } from "@/redux/api/baseApi";
import { TContact } from "@/types/contact.types";
import { TQueryParam, TResponseRedux } from "@/types/global";

const contactManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllContacts: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: `/contact`,
          method: "GET",
        };
      },
      providesTags: ["contact"],
      transformResponse: (response: TResponseRedux<TContact[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getContactDetails: builder.query({
      query: (args) => {
        return {
          url: `/contact/${args.id}`,
          method: "GET",
        };
      },
      providesTags: ["contact"],
    }),

    // Add new Product
    sendContactMessage: builder.mutation({
      query: (data) => ({
        url: "/contact",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["contact"],
    }),
  }),
});
export const { useGetAllContactsQuery, useGetContactDetailsQuery, useSendContactMessageMutation } = contactManagementApi;
