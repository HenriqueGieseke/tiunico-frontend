import axios from 'axios';

const postMessage = async (message) => {
  try {
    const sendMessage = await axios({
      method: 'post',
      url: 'http://localhost:5000/addMessage',
      data: { message },
    });

    return sendMessage;
  } catch (error) {
    console.log(error);
  }
};

export { postMessage };
