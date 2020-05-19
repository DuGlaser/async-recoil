import { sendGet } from './baseApi';
import { MovieApiModel } from './models/movieApiModel';
import { MovieModel } from './models/movieModel';

export class MovieApi {
  constructor() {
    this.MOVIE_API_URL = process.env.REACT_APP_OMDB_API;
  }

  async index(title) {
    const data = await sendGet(this.MOVIE_API_URL, { params: { s: title } });
    const Search = data.Search.map((movie) => {
      return new MovieModel({
        Poster: movie.Poster,
        Title: movie.Title,
        Type: movie.Type,
        Year: movie.Year,
        imdbID: movie.imdbID,
      });
    });

    return new MovieApiModel({
      Response: data.Response,
      Search,
      totalResults: data.totalResults,
    });
  }
}
