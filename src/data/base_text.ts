type NotFoundPage = {
  alert: string;
  message: string;
  action: string;
  link: string;
};

type AllRightsReserved = {
  text: string;
};

const NotFoundPage: NotFoundPage = {
  alert: "404",
  message: "Ez az oldal nem található",
  action: "Vissza a főoldalra",
  link: "/",
};

const allRightsReserved: AllRightsReserved = {
  text: "Minden jog fenntartva",
};

export default {NotFoundPage, allRightsReserved};
