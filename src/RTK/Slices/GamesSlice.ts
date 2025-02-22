// RTK Query :
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Game } from "../types/GameType";
export const GameApi = createApi({
  reducerPath: "GameApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://free-to-play-games-database.p.rapidapi.com/api",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "194bc6b69dmshea152ded1f782cap167ce7jsn19a51789b881"
      );
      headers.set(
        "X-RapidAPI-Host",
        "free-to-play-games-database.p.rapidapi.com"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllGames: builder.query<Game[], void>({
      query: () => `/games`,
    }),
  }),
});

export const { useGetAllGamesQuery } = GameApi;
