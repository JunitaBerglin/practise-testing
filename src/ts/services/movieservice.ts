import { IMovie } from "../models/IMovie";
import { IOmdbResponse } from "../models/IOmdbResponse";

export const getData = async (
  searchText: string
): Promise<IMovie[]> => {
  return axios
    .get<IOmdbResponse>(
      "http://omdbapi.com/?apikey=416ed51a&s=" + searchText
    )
    .then((data) => {
      return data.data.Search;
    })
    .catch(() => {
      return [];
    });
};
