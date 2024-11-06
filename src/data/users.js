const users = [
  {
    email: "m@gmail.com",
    password: "pass",
  },
  {
    email: "r@gmail.com",
    password: "pass",
  },
  {
    email: "n@gmail.com",
    password: "pass",
  },
];

export const getUserByEmail = (email) => {
  const found = users.find((user) => user.email === email);
  return found;
};
