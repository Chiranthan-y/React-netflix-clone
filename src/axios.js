import axiso from 'axios';

const instance = axiso.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
