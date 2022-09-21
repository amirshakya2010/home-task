import axios from 'axios';

export default class Api {
    constructor() {
      this.api_url = `https://api.punkapi.com/v2`;
    }
    init = () => {
      let headers = {
        Accept: "application/json"
      };
      this.client = axios.create({baseURL: this.api_url, timeout: 31000, headers: headers});
      return this.client;
    };
    getProductList = (params) => {
      return this.init().get("/beers", {params: params});
    };
  }