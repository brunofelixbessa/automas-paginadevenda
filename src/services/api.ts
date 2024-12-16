import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const DEFAULT_NUMBER = import.meta.env.VITE_DEFAULT_NUMBER;

const api = axios.create({
  baseURL: 'https://api.automas.me',
  headers: {
    'apikey': API_KEY,
    'Content-Type': 'application/json',
  },
});

export const sendTextMessage = async (text: string) => {
  try {
    const response = await api.post('/message/sendText/futura_tecnologia', {
      number: DEFAULT_NUMBER,
      text,
    });
    return response.data;
  } catch (error: any) {
    console.error('Error sending message:', error);
    throw error;
  }
};
