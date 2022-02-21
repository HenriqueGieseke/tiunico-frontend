import axios from 'axios';

const getDbConnectionStatus = async () => {
  try {
    const status = await axios({
      method: 'get',
      url: 'http://localhost:5000/dbConnectionStatus',
    });

    return status;
  } catch (error) {
    console.log(error);
  }
};

export { getDbConnectionStatus };
