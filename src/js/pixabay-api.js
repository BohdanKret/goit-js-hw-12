import axios from 'axios';

const API_KEY = '47077986-634596916a6757457166893bd';
const BASE_URL = `https://pixabay.com/api/`;

export default async function dataRequest(userRequest, page = 1, per_page = 15) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: `${userRequest}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page,
  });

  const { data } = await axios(`${BASE_URL}?${params}`);

  return data;
}
