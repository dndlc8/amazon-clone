import axios from "axios";

const instance = axios.create({
  baseURL: 'https://us-central1-challenge-db636.cloudfunctions.net/api'

  //'http://localhost:5001/challenge-db636/us-central1/api' // THE API (cloud function) URL
});


export default instance;

