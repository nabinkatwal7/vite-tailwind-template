export const loginHandler = () => {
  const token = localStorage.setItem("token", "login token");

  return token;
};
