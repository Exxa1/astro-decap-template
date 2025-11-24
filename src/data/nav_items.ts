type nav_item = {
  name: string;
  link: string;
};

type nav_items = nav_item[];

type call_to_action = nav_item;

const nav_items: nav_items = [
    { name: "Home", link: "/" },
    { name: "Testimonials", link: "/posts" },
    { name: "About", link: "/rolunk" },
    { name: "Portfolio", link: "/portfolio" },
];

const call_to_action = { name: "Book Your Session", link: "/contact" };

export { nav_items, call_to_action };
