// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { createApi } from "@reduxjs/toolkit/query/react";
// import customFetchBase from "./middleware";
// import { IBikesResponse } from "../types/bikes";


// export const bikeApi = createApi({
//     baseQuery: customFetchBase,
//     reducerPath: "bike",
//     tagTypes: ["search"],
//     endpoints: (builder) => ({
//         getBikes: builder.query<IBikesResponse, void>({
//             query: (request: any) => ({
//                 url: `search?page=${request.page ?? 1}&per_page=${request.perPage ?? 2}&query=${request.query}`,
//                 method: "GET"
//             }),
//         }),

//     }),
// });
// export const { useGetBikesQuery } = bikeApi;
