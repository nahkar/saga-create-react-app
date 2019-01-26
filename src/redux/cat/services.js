export default {
  getRandomCat: () => {
    return fetch('https://api.thecatapi.com/v1/images/search?limit=1').then(res => res.json());
  }
};
