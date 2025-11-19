type nav_item = {
  name: string;
  link: string;
};

type nav_items = nav_item[];

type call_to_action = nav_item;

const nav_items: nav_items = [
    { name: "Kezdőlap", link: "/" },
    { name: "Hírek", link: "/posts" },
    { name: "Rólunk", link: "/rolunk" },
    { name: "Támogass", link: "/adoegyszazalek" },
];

const call_to_action = { name: "Call to action", link: "/contact" };

export { nav_items, call_to_action };
