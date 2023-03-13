import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://62becfba0bc9b125615fd0f7.mockapi.io/api/books',
});

export const getAllContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await contactsInstance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
