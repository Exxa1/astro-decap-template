type nav_item = {
  name: string;
  link: string;
};

type nav_items = nav_item[];

type call_to_action = nav_item;

const nav_items: nav_items = [
    { name: "Főoldal", link: "/" },
    { name: "Siker történetek", link: "/posts" },
    { name: "Rólam", link: "/rolunk" },
];

const call_to_action = { name: "Foglalj Időpontot", link: "/contact" };

export { nav_items, call_to_action };
