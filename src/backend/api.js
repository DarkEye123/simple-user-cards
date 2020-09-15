import { usersData } from './mocks';
import { fakeApi } from './helpers';
import { getRandomInt } from './helpers/index';

let data = usersData;

export const loadUsersApi = async () => await fakeApi(data);
export const updateUserApi = async user => {
  await fakeApi(user);
  console.log(user);
  data = [{ ...user }, ...data.filter(u => u.id !== user.id)];
  return { ...user };
};
export const deleteUserApi = async user => {
  await fakeApi(user);
  data = [...data.filter(u => u.id !== user.id)];
};
export const addUserApi = async user => {
  const id = `${getRandomInt(100)} ${new Date()}`;
  const newUser = { ...user, id };
  await fakeApi(newUser);
  data.push(newUser);
  return newUser;
};
