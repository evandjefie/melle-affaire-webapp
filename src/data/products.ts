import { Product } from '../context/CartContext';

export const products: Product[] = [
  // Appetizers
  {
    id: 1,
    name: "Salade César",
    nameFr: "Salade César",
    nameEn: "Caesar Salad",
    description: "Notre salade César signature avec poulet grillé, croutons et parmesan.",
    descriptionFr: "Notre salade César signature avec poulet grillé, croutons et parmesan.",
    descriptionEn: "Our signature Caesar salad with grilled chicken, croutons, and parmesan.",
    price: 12.50,
    image: "https://images.pexels.com/photos/6107787/pexels-photo-6107787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "appetizers"
  },
  {
    id: 2,
    name: "Salade Niçoise",
    nameFr: "Salade Niçoise",
    nameEn: "Niçoise Salad",
    description: "Thon, œufs, tomates, olives et haricots verts sur lit de laitue.",
    descriptionFr: "Thon, œufs, tomates, olives et haricots verts sur lit de laitue.",
    descriptionEn: "Tuna, eggs, tomatoes, olives, and green beans on a bed of lettuce.",
    price: 14.00,
    image: "https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "appetizers"
  },
  
  // Cocktails
  {
    id: 3,
    name: "Mojito Classique",
    nameFr: "Mojito Classique",
    nameEn: "Classic Mojito",
    description: "Rhum, menthe fraîche, sucre de canne, citron vert et eau gazeuse.",
    descriptionFr: "Rhum, menthe fraîche, sucre de canne, citron vert et eau gazeuse.",
    descriptionEn: "Rum, fresh mint, cane sugar, lime, and soda water.",
    price: 9.00,
    image: "https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "cocktails"
  },
  {
    id: 4,
    name: "Smoothie Tropical",
    nameFr: "Smoothie Tropical",
    nameEn: "Tropical Smoothie",
    description: "Mangue, ananas, banane et jus d'orange frais.",
    descriptionFr: "Mangue, ananas, banane et jus d'orange frais.",
    descriptionEn: "Mango, pineapple, banana, and fresh orange juice.",
    price: 7.50,
    image: "https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "cocktails"
  },
  
  // Crepes
  {
    id: 5,
    name: "Crêpe Nutella-Banane",
    nameFr: "Crêpe Nutella-Banane",
    nameEn: "Nutella-Banana Crepe",
    description: "Crêpe sucrée garnie de Nutella et tranches de banane fraîche.",
    descriptionFr: "Crêpe sucrée garnie de Nutella et tranches de banane fraîche.",
    descriptionEn: "Sweet crepe filled with Nutella and fresh banana slices.",
    price: 8.00,
    image: "https://images.pexels.com/photos/53483/strawberries-crepe-dessert-sweet-53483.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "crepes"
  },
  {
    id: 6,
    name: "Crêpe Jambon-Fromage",
    nameFr: "Crêpe Jambon-Fromage",
    nameEn: "Ham and Cheese Crepe",
    description: "Crêpe salée avec jambon de qualité et emmental fondant.",
    descriptionFr: "Crêpe salée avec jambon de qualité et emmental fondant.",
    descriptionEn: "Savory crepe with quality ham and melted Swiss cheese.",
    price: 10.00,
    image: "https://images.pexels.com/photos/9928322/pexels-photo-9928322.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "crepes"
  },
  
  // Desserts
  {
    id: 7,
    name: "Gaufre Belge",
    nameFr: "Gaufre Belge",
    nameEn: "Belgian Waffle",
    description: "Gaufre croustillante servie avec crème fouettée et fruits rouges.",
    descriptionFr: "Gaufre croustillante servie avec crème fouettée et fruits rouges.",
    descriptionEn: "Crispy waffle served with whipped cream and red berries.",
    price: 8.50,
    image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "desserts"
  },
  {
    id: 8,
    name: "Cake Citron",
    nameFr: "Cake Citron",
    nameEn: "Lemon Cake",
    description: "Cake moelleux au citron avec glaçage au sucre.",
    descriptionFr: "Cake moelleux au citron avec glaçage au sucre.",
    descriptionEn: "Soft lemon cake with sugar glaze.",
    price: 6.00,
    image: "https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "desserts"
  },
  
  // Kids
  {
    id: 9,
    name: "Goûter Enfant",
    nameFr: "Goûter Enfant",
    nameEn: "Kids Snack Box",
    description: "Mini sandwich, fruits frais, petit gâteau et jus de fruits.",
    descriptionFr: "Mini sandwich, fruits frais, petit gâteau et jus de fruits.",
    descriptionEn: "Mini sandwich, fresh fruit, small cake and fruit juice.",
    price: 9.50,
    image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "kids"
  },
  {
    id: 10,
    name: "Salade de Fruits",
    nameFr: "Salade de Fruits",
    nameEn: "Fruit Salad",
    description: "Mélange de fruits frais de saison.",
    descriptionFr: "Mélange de fruits frais de saison.",
    descriptionEn: "Mix of fresh seasonal fruits.",
    price: 7.00,
    image: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    category: "kids"
  }
];

export const categories = [
  { id: "all", nameFr: "Tous", nameEn: "All" },
  { id: "appetizers", nameFr: "Entrées", nameEn: "Appetizers" },
  { id: "cocktails", nameFr: "Cocktails", nameEn: "Cocktails" },
  { id: "crepes", nameFr: "Crêpes", nameEn: "Crepes" },
  { id: "desserts", nameFr: "Desserts", nameEn: "Desserts" },
  { id: "kids", nameFr: "Goûters Enfants", nameEn: "Kids Snacks" }
];