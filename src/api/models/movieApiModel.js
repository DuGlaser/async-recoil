import { MovieModel } from './movieModel';

export class MovieApiModel {
  /*
   *@param {String} Response
   *@param {MovieModel} Search
   *@param {totalResults} string
   */

  constructor({
    Response = '',
    Search = new MovieModel({}),
    totalResults = '',
  }) {
    this.Response = Response;
    this.Search = Search;
    this.totalResults = totalResults;
  }
}
