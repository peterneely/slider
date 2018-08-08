import axios from 'axios';
// import fakeImages from '../tools/fakeImages';

const url =
  'https://api.unsplash.com/photos/?client_id=f5f4bbcf3847fd5342a04e819f640d77c35d78b1e8bcd687af33777fe9a4e602';

export const getImages = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return new Error(error);
  }
};

// export const getImages = () =>
//   new Promise(resolve => {
//     setTimeout(() => resolve(fakeImages), 1000);
//   });
