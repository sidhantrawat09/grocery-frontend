import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const menuItemApi = createApi({
    reducerPath: "menuItemApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://localhost:44329/api/"
    }),
    tagTypes: ["MenuItems"],
    endpoints: (builder)=>({
        getMenuItems: builder.query({
            query: ()=>({
                url:"menuItem"
            }),
            providesTags:["MenuItems"], 
        }),
        getMenuItem: builder.query({
            query: (id)=>({
                url:`menuItem/${id}`,
            }),
            providesTags:["MenuItems"],
        }),
    })
});

export const {useGetMenuItemsQuery, useGetMenuItemQuery} = menuItemApi
export default menuItemApi;