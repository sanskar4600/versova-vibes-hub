import type { MenuCategory, MenuItem } from "./restaurant";

import butterChicken from "@/assets/dish-butter-chicken.jpg";
import tandoori from "@/assets/dish-tandoori.jpg";
import paneerTikka from "@/assets/dish-paneer-tikka.jpg";
import pizza from "@/assets/dish-pizza.jpg";
import cocktails from "@/assets/drinks-cocktails.jpg";
import lavaCake from "@/assets/dessert-lava-cake.jpg";

/** [name, price, veg, spicy, description, chefPick?] */
type Row = [string, number, boolean, 0 | 1 | 2 | 3, string, boolean?];

const build = (rows: Row[]): MenuItem[] =>
  rows.map(([name, price, veg, spicy, desc, chef]) => ({
    name,
    price,
    veg,
    spicy,
    desc,
    chef: Boolean(chef),
  }));

const withImage = (items: MenuItem[], map: Record<string, string>) =>
  items.map((i) => (map[i.name] ? { ...i, image: map[i.name] } : i));

export const MENU: MenuCategory[] = [
  {
    id: "north-indian",
    icon: "🥘",
    label: "North Indian",
    items: withImage(
      build([
        ["Butter Chicken", 449, false, 1, "Tandoor-kissed chicken in a velvet tomato-cashew gravy.", true],
        ["Chicken Handi", 469, false, 2, "Slow-cooked in a clay handi with onion, ginger and whole spice."],
        ["Chicken Kolhapuri", 459, false, 3, "Fiery Kolhapuri masala, coconut and dry red chilli."],
        ["Chicken Tikka Masala", 479, false, 2, "Charred tikka simmered in a smoky makhani base."],
        ["Paneer Butter Masala", 399, true, 1, "Cottage cheese in a silky buttered tomato gravy.", true],
        ["Dal Makhani", 349, true, 1, "Black lentils simmered overnight with cream and butter."],
        ["Kadai Paneer", 389, true, 2, "Wok-tossed paneer with bell pepper and crushed coriander."],
        ["Veg Kolhapuri", 359, true, 3, "Mixed vegetables in a bold Kolhapuri spice blend."],
        ["Malai Kofta", 379, true, 0, "Soft cheese dumplings in a saffron cashew cream."],
        ["Jeera Rice", 199, true, 0, "Basmati tempered with roasted cumin and ghee."],
        ["Butter Naan", 79, true, 0, "Tandoor naan brushed with white butter."],
        ["Garlic Naan", 89, true, 0, "Naan loaded with garlic and coriander."],
        ["Laccha Paratha", 89, true, 0, "Flaky multi-layered whole wheat paratha."],
      ]),
      { "Butter Chicken": butterChicken, "Paneer Butter Masala": paneerTikka },
    ),
  },
  {
    id: "chicken",
    icon: "🍗",
    label: "Chicken Specials",
    items: withImage(
      build([
        ["Tandoori Chicken", 549, false, 2, "Half bird marinated 24 hours, roasted in the clay oven.", true],
        ["Chicken Tikka", 449, false, 2, "Boneless thigh, hung curd and kasuri methi."],
        ["Chicken Seekh Kebab", 429, false, 2, "Minced chicken skewers with mint and green chilli."],
        ["Chicken Lollipop", 399, false, 2, "Frenched wings tossed in a sticky schezwan glaze.", true],
        ["Chicken Wings", 379, false, 2, "Choose classic BBQ or hot buffalo."],
        ["Chicken Crispy", 389, false, 2, "Shredded chicken, crisp fried with pepper and soy."],
        ["Chicken Biryani", 429, false, 2, "Dum-cooked long grain rice with saffron and birista."],
        ["Chicken Fried Rice", 329, false, 1, "Wok fried with egg, spring onion and garlic."],
        ["Chicken Noodles", 329, false, 1, "Hakka noodles tossed with shredded chicken."],
        ["Chicken Shawarma", 299, false, 1, "Rolled in pita with garlic toum and pickles."],
        ["Peri Peri Chicken", 499, false, 3, "African bird's eye chilli marinade, flame grilled."],
        ["Grilled Chicken Steak", 549, false, 1, "With herb butter, mash and seasonal greens."],
        ["BBQ Chicken", 529, false, 1, "Smoked and lacquered in house barbecue sauce."],
        ["Roasted Chicken", 599, false, 1, "Whole leg roast with rosemary jus."],
      ]),
      { "Tandoori Chicken": tandoori },
    ),
  },
  {
    id: "vegetarian",
    icon: "🥬",
    label: "Vegetarian",
    items: withImage(
      build([
        ["Paneer Tikka", 379, true, 2, "Malai-marinated paneer with charred peppers.", true],
        ["Veg Crispy", 299, true, 2, "Julienne vegetables, crisp fried and tossed."],
        ["Spring Roll", 269, true, 1, "Crackling rolls with a sweet chilli dip."],
        ["Veg Manchurian", 299, true, 2, "Dry or gravy, your call."],
        ["Mushroom Chilli", 329, true, 2, "Button mushrooms with onion, capsicum and soy."],
        ["Veg Fried Rice", 279, true, 1, "Classic wok fried rice with garden vegetables."],
        ["Veg Noodles", 279, true, 1, "Soft noodles with crunchy vegetables."],
        ["Hakka Noodles", 289, true, 1, "Street-style Hakka with chilli oil."],
        ["Veg Pizza", 479, true, 0, "Nine inch thin crust with garden toppings."],
        ["Cheese Garlic Bread", 249, true, 0, "Molten mozzarella and roasted garlic butter."],
        ["Pasta Alfredo", 399, true, 0, "Penne in a parmesan cream sauce."],
        ["Pasta Arrabbiata", 399, true, 2, "Penne in a spicy tomato and chilli sugo."],
      ]),
      { "Paneer Tikka": paneerTikka, "Veg Pizza": pizza },
    ),
  },
  {
    id: "chinese",
    icon: "🥢",
    label: "Chinese",
    items: build([
      ["Chicken Manchurian", 379, false, 2, "Crisp chicken in a glossy garlic ginger sauce."],
      ["Chicken Schezwan", 389, false, 3, "Loaded with house-ground schezwan chilli paste.", true],
      ["Chicken Triple Rice", 429, false, 2, "Rice, noodles and gravy in one legendary plate."],
      ["Chicken Hakka Noodles", 349, false, 1, "Wok tossed on high flame."],
      ["Chicken Chowmein", 339, false, 1, "Street-style chowmein with shredded chicken."],
      ["Veg Triple Rice", 379, true, 2, "The vegetarian take on the classic triple."],
      ["Veg Manchurian", 299, true, 2, "Cabbage dumplings in Manchurian gravy."],
      ["Spring Roll", 269, true, 1, "Golden rolls with vegetable filling."],
      ["Schezwan Rice", 299, true, 3, "Fiery, smoky and unapologetically hot."],
      ["Hot Garlic Chicken", 399, false, 3, "Pungent garlic sauce with dry red chilli."],
      ["Chilli Chicken", 389, false, 3, "Indo-Chinese icon, dry or semi-gravy."],
      ["Dragon Chicken", 419, false, 3, "Crisp strips in a sweet-hot dragon glaze."],
    ]),
  },
  {
    id: "western",
    icon: "🍔",
    label: "Western Food",
    items: build([
      ["Cheese Burger", 329, false, 1, "Chicken patty, cheddar, pickles and burger sauce."],
      ["Double Chicken Burger", 429, false, 1, "Two patties, double cheese, brioche bun.", true],
      ["Beef-style Veg Burger", 349, true, 1, "Plant patty with smoked barbecue mayo."],
      ["Loaded Fries", 299, false, 2, "Cheese sauce, jalapeño and pulled chicken."],
      ["French Fries", 179, true, 0, "Sea salt and cracked pepper."],
      ["Fish & Chips", 549, false, 0, "Beer-battered fillet with tartare."],
      ["Grilled Chicken", 499, false, 1, "Lemon herb marinade with grilled vegetables."],
      ["Chicken Steak", 549, false, 1, "Choice of pepper, mushroom or barbecue sauce."],
      ["BBQ Steak", 629, false, 1, "Smoky glaze, buttered corn and mash."],
      ["Club Sandwich", 299, false, 0, "Triple decker with fries."],
      ["Chicken Sandwich", 279, false, 0, "Grilled chicken, lettuce and aioli."],
      ["Caesar Salad", 329, false, 0, "Cos lettuce, parmesan, croutons, classic dressing."],
      ["Greek Salad", 319, true, 0, "Feta, olives, cucumber and oregano."],
      ["Pasta", 399, true, 1, "Choice of Alfredo, Arrabbiata, Pink or Pesto."],
      ["Mac & Cheese", 359, true, 0, "Three cheese bake with herb crumb."],
      ["Lasagna", 449, true, 1, "Layered pasta with rich tomato and béchamel."],
    ]),
  },
  {
    id: "italian",
    icon: "🍕",
    label: "Italian",
    items: withImage(
      build([
        ["Margherita Pizza", 479, true, 0, "San Marzano tomato, fior di latte, basil.", true],
        ["Pepperoni Pizza", 599, false, 1, "Chicken pepperoni with molten mozzarella."],
        ["Farmhouse Pizza", 549, true, 0, "Onion, capsicum, corn, tomato and mushroom."],
        ["Cheese Burst Pizza", 629, true, 0, "Double crust filled with liquid cheese."],
        ["White Sauce Pasta", 399, true, 0, "Béchamel, garlic and parmesan."],
        ["Red Sauce Pasta", 399, true, 1, "Slow-cooked tomato basil sugo."],
        ["Garlic Bread", 199, true, 0, "Baked with herb butter."],
        ["Bruschetta", 249, true, 0, "Toasted sourdough, tomato, basil, olive oil."],
      ]),
      { "Margherita Pizza": pizza },
    ),
  },
  {
    id: "cafe",
    icon: "☕",
    label: "Cafe",
    items: build([
      ["Espresso", 149, true, 0, "Single origin, thick crema."],
      ["Americano", 169, true, 0, "Espresso lengthened with hot water."],
      ["Latte", 199, true, 0, "Silky steamed milk and micro foam."],
      ["Cold Coffee", 229, true, 0, "Blended with ice cream and chocolate.", true],
      ["Cappuccino", 189, true, 0, "Equal parts espresso, milk and foam."],
      ["Hot Chocolate", 219, true, 0, "Belgian dark chocolate, steamed milk."],
      ["Mocha", 219, true, 0, "Chocolate and espresso in balance."],
      ["Iced Coffee", 199, true, 0, "Cold brewed over ice."],
    ]),
  },
  {
    id: "mocktails",
    icon: "🍹",
    label: "Mocktails",
    items: build([
      ["Virgin Mojito", 249, true, 0, "Lime, mint, soda and crushed ice.", true],
      ["Blue Lagoon", 259, true, 0, "Blue curaçao syrup with lemonade."],
      ["Mint Cooler", 249, true, 0, "Fresh mint, lime and sugarcane."],
      ["Lemon Mint", 229, true, 0, "Sharp, cold and endlessly refreshing."],
      ["Fruit Punch", 269, true, 0, "Seasonal fruit blend with citrus."],
      ["Watermelon Cooler", 259, true, 0, "Cold pressed watermelon with basil."],
    ]),
  },
  {
    id: "cocktails",
    icon: "🍸",
    label: "Cocktails",
    items: withImage(
      build([
        ["Mojito", 399, true, 0, "White rum, lime, mint and soda."],
        ["Martini", 449, true, 0, "Gin or vodka, stirred, olive or twist."],
        ["Old Fashioned", 499, true, 0, "Bourbon, bitters, demerara, orange oil.", true],
        ["Whiskey Sour", 469, true, 0, "Whiskey, lemon, sugar and silky foam."],
        ["Cosmopolitan", 449, true, 0, "Vodka, triple sec, cranberry and lime."],
        ["Margarita", 449, true, 0, "Tequila, lime and a salted rim."],
        ["Long Island", 549, true, 0, "Five spirits, one very good night."],
      ]),
      { "Old Fashioned": cocktails },
    ),
  },
  {
    id: "desserts",
    icon: "🍰",
    label: "Desserts",
    items: withImage(
      build([
        ["Brownie", 249, true, 0, "Fudgy walnut brownie, warm."],
        ["Chocolate Lava Cake", 299, true, 0, "Molten centre with vanilla bean ice cream.", true],
        ["Ice Cream", 179, true, 0, "Vanilla, chocolate or seasonal."],
        ["Cheesecake", 319, true, 0, "New York baked with berry compote."],
        ["Gulab Jamun", 189, true, 0, "Warm, syrup soaked, two pieces."],
        ["Rabdi", 219, true, 0, "Reduced milk with pistachio and saffron."],
        ["Kulfi", 199, true, 0, "Malai kulfi on a stick."],
      ]),
      { "Chocolate Lava Cake": lavaCake },
    ),
  },
];

export const SIGNATURE = [
  MENU[0].items[0],
  MENU[1].items[0],
  MENU[2].items[0],
  MENU[5].items[0],
  MENU[8].items[2],
  MENU[9].items[1],
].filter(Boolean) as MenuItem[];
