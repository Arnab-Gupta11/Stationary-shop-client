import { baseApi } from "@/redux/api/baseApi";
const metaDataApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMetadata: builder.query({
      query: () => {
        return {
          url: "/meta",
          method: "GET",
        };
      },
      providesTags: ["brand", "category", "product", "order", "review", "user"],
    }),
  }),
});
export const { useGetMetadataQuery } = metaDataApi;
