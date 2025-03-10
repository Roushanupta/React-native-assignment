import axios from 'axios';

const fetchUserData = async (size = 80) => {
  try {
    const response = await axios.get(`https://random-data-api.com/api/users/random_user?size=${size}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data', error);
    return [];
  }
};

export default fetchUserData;
