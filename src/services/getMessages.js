import axios from 'axios';

const getMessages = async () => {
  try {
    const messages = await axios({
      method: 'get',
      url: 'http://localhost:5000/getMessages',
    });

    return messages;
  } catch (error) {
    console.log(error);
  }
};

export { getMessages };
