import { sendGet } from './baseApi';
import { MovieApiModel } from './models/movieApiModel';
import { MovieModel } from './models/movieModel';

export class MovieApi {
  constructor() {
    this.MOVIE_API_URL = process.env.REACT_APP_OMDB_API;
  }

  async index(title) {
    console.log('MovieApi index()');
    const data = await sendGet(this.MOVIE_API_URL, { params: { s: title } });

    if (data.Response === 'True') {
      // OMDBでIDがかぶることがあるため
      const filterSearch = data.Search.filter((movie, index, self) => {
        return self.findIndex((item) => item.imdbID === movie.imdbID) === index;
      });

      const Search = filterSearch.map((movie) => {
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
    } else {
      return new MovieApiModel({
        Response: data.Response,
        Search: data.Search,
        totalResults: data.totalResults,
      });
    }
  }
}
