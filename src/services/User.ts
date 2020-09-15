import {
  loadUsersApi,
  deleteUserApi,
  updateUserApi,
  addUserApi,
} from '../backend/api';
import { User } from '../types';

// This is trivial solution, in proper project I'd use probably some ORM solution
interface UserAPI {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

function fromAPI(user: UserAPI): User {
  return {
    id: user.id,
    email: user.email,
    avatar: user.avatar,
    firstName: user.first_name,
    lastName: user.last_name,
    fullName: `${user.first_name} ${user.last_name}`,
  };
}

// Simplification, there would be multiple errors for the APP
interface UserAPIError {
  id: string;
  message: string;
}

const fetchUsers = async () => {
  try {
    const data = (await loadUsersApi()) as UserAPI[];
    return data.map(user => fromAPI(user));
  } catch (e) {
    // TODO add rollbar error reporting if there will be time
    console.warn(e);
    throw e;
  }
};

const deleteUser = async (user: User) => {
  try {
    await deleteUserApi(user);
  } catch (e) {
    // TODO add rollbar error reporting if there will be time
    console.warn(e);
    throw e;
  }
};

const editUser = async (user: User) => {
  try {
    return await updateUserApi(user);
  } catch (e) {
    // TODO add rollbar error reporting if there will be time
    console.warn(e);
    throw e;
  }
};

const createUser = async (user: User) => {
  try {
    return await addUserApi(user);
  } catch (e) {
    // TODO add rollbar error reporting if there will be time
    console.warn(e);
    throw e;
  }
};

export { fetchUsers, deleteUser, editUser, createUser };
