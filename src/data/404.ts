type NotFoundPage = {
  alert: string;
  message: string;
  action: string;
  link: string;
};

const NotFoundPage: NotFoundPage = {
  alert: "404",
  message: "Ez az oldal nem található.",
  action: "Vissza a főoldalra",
  link: "/",
};

export default NotFoundPage;
