import { User } from "../model/user-mondel";

export async function createUser(user) {
  try {
    await User.create(user);
  } catch (e) {
    throw new Error(e);
  }
}
