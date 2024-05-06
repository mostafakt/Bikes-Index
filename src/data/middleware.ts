import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query"; 
import { Mutex } from "async-mutex";
import { BaseUrl } from "src/env"; 
const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: BaseUrl,
});

const customFetchBase: BaseQueryFn<
  string | FetchArgs,
  any,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {

  const urlEnd = typeof args === "string" ? args : args.url;
  const adjustedUrl = urlEnd;
  const adjustedArgs =
    typeof args === "string" ? adjustedUrl : { ...args, url: adjustedUrl };

  await mutex.waitForUnlock();
  const  result = (await baseQuery(adjustedArgs, api, extraOptions)) as any; 
  console.log(JSON.stringify(result))

  // Example: Log the 'Content-Type' header
  
  return result;
};

export default customFetchBase;
