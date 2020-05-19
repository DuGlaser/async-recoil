export class MovieModel {
  /*
   *@param {String} Poster
   *@param {String} Title
   *@param {String} Type
   *@param {String} Year
   *@param {String} imdbID
   */

  constructor({ Poster = '', Title = '', Type = '', Year = '', imdbID = '' }) {
    this.Poster = Poster;
    this.Title = Title;
    this.Type = Type;
    this.Year = Year;
    this.imdbID = imdbID;
  }
}
