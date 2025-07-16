import men1_img from '../Assets/men1_img.jpg'
import men2_img from '../Assets/men2_img.webp'
import men3_img from '../Assets/men3_img.webp'
import men5_img from '../Assets/men5_img.webp'
import men6_img from '../Assets/men6_img.webp'
import men7_img from '../Assets/men7_img.jpg'
import men8_img from '../Assets/men8_img.jpg'
import men9_img from '../Assets/men9_img.webp'

import women1_img from '../Assets/women1_img.jpg'
import women2_img from '../Assets/women2_img.webp'
import women3_img from '../Assets/women3_img.jpg'
import women4_img from '../Assets/women4_img.jpg'
import women6_img from '../Assets/women6_img.jpeg'
import women7_img from '../Assets/women7_img.jpg'
import women8_img from '../Assets/women8_img.jpg'
import women9_img from '../Assets/women9_img.avif'
import women10_img from '../Assets/women10_img.jpg'
import women11_img from '../Assets/women11_img.jpg'

import kid1_img from '../Assets/kid1_img.jpg'
import kid2_img from '../Assets/kid2_img.avif'
import kid3_img from '../Assets/kid3_img.avif'
import kid4_img from '../Assets/kid4_img.jpg'
import kid6_img from '../Assets/kid6_img.jpg'
import kid7_img from '../Assets/kid7_img.jpg'
import kid8_img from '../Assets/kid8_img.webp'
import kid9_img from '../Assets/kid9_img.webp'
import kid10_img from '../Assets/kid10_img.jpg'


const all_products = [
  {
    id: 1,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: kid1_img,
    new_price: 85.0,
    old_price: 120.5,
  },
  {
    id: 2,
    name: "Stylish Women's Red Printed Kurta",
    category: "women",
    image: women11_img,
    new_price: 70.0,
    old_price: 99.0,
  },
  {
    id: 3,
    name: "Men's Slim Fit Checked Shirt",
    category: "men",
    image: men1_img,
    new_price: 95.0,
    old_price: 130.0,
  },
  {
    id: 4,
    name: "Girls Floral Print Cotton Dress",
    category: "kid",
    image: kid2_img,
    new_price: 65.5,
    old_price: 95.0,
  },
  {
    id: 5,
    name: "Men's Black Leather Jacket",
    category: "men",
    image: men2_img,
    new_price: 150.0,
    old_price: 210.0,
  },
  {
    id: 6,
    name: "Women's Casual Blue Denim Jacket",
    category: "women",
    image: women10_img,
    new_price: 120.0,
    old_price: 160.0,
  },
  {
    id: 7,
    name: "Unisex Running Sports Shoes",
    category: "men",
    image: men3_img,
    new_price: 90.0,
    old_price: 130.0,
  },
  {
    id: 8,
    name: "Kids Cotton T-Shirt Combo",
    category: "kid",
    image: kid3_img,
    new_price: 45.0,
    old_price: 70.0,
  },
  {
    id: 9,
    name: "Women's Elegant Party Gown",
    category: "women",
    image: women9_img,
    new_price: 180.0,
    old_price: 250.0,
  },
  {
    id: 10,
    name: "Men's Formal Grey Trousers",
    category: "men",
    image: men9_img,
    new_price: 75.0,
    old_price: 110.0,
  },
  {
    id: 11,
    name: "Women's Printed Saree with Blouse",
    category: "women",
    image: women8_img,
    new_price: 130.0,
    old_price: 180.0,
  },
  {
    id: 12,
    name: "Boys Superhero Theme T-shirt",
    category: "kid",
    image: kid4_img,
    new_price: 55.0,
    old_price: 80.0,
  },
  {
    id: 13,
    name: "Men's Blue Casual Polo",
    category: "men",
    image: men5_img,
    new_price: 60.0,
    old_price: 90.0,
  },
  {
    id: 14,
    name: "Women's Black Anarkali Suit",
    category: "women",
    image: women7_img,
    new_price: 140.0,
    old_price: 200.0,
  },
  {
    id: 15,
    name: "Kids Cartoon Printed Shorts",
    category: "kid",
    image: kid1_img,
    new_price: 35.0,
    old_price: 50.0,
  },
  {
    id: 16,
    name: "Men's Workout Track Pants",
    category: "men",
    image: men6_img,
    new_price: 85.0,
    old_price: 120.0,
  },
  {
    id: 17,
    name: "Women's Light Pink Top",
    category: "women",
    image: women6_img,
    new_price: 55.0,
    old_price: 90.0,
  },
  {
    id: 18,
    name: "Kids Denim Dungarees",
    category: "kid",
    image: kid6_img,
    new_price: 60.0,
    old_price: 85.0,
  },
  {
    id: 19,
    name: "Men's Olive Green Cargo Pants",
    category: "men",
    image: men7_img,
    new_price: 110.0,
    old_price: 145.0,
  },
  {
    id: 20,
    name: "Women's Chiffon Floral Dupatta",
    category: "women",
    image: women1_img,
    new_price: 40.0,
    old_price: 65.0,
  },
  {
    id: 21,
    name: "Boy's Printed Full Sleeve T-shirt",
    category: "kid",
    image: kid7_img,
    new_price: 50.0,
    old_price: 75.0,
  },
  {
    id: 22,
    name: "Men's Navy Blue Hoodie",
    category: "men",
    image: men8_img,
    new_price: 95.0,
    old_price: 135.0,
  },
  {
    id: 23,
    name: "Women's Yellow Maxi Dress",
    category: "women",
    image: women4_img,
    new_price: 160.0,
    old_price: 220.0,
  },
  {
    id: 24,
    name: "Kid's Winter Woollen Sweater",
    category: "kid",
    image: kid8_img,
    new_price: 70.0,
    old_price: 100.0,
  },
  {
    id: 25,
    name: "Men's Sports Jersey",
    category: "men",
    image: men9_img,
    new_price: 65.0,
    old_price: 100.0,
  },
  {
    id: 26,
    name: "Women's Cotton Palazzo Pants",
    category: "women",
    image: women3_img,
    new_price: 75.0,
    old_price: 105.0,
  },
  {
    id: 27,
    name: "Boy's Summer Shorts Set",
    category: "kid",
    image: kid9_img,
    new_price: 55.0,
    old_price: 85.0,
  },
  {
    id: 28,
    name: "Men's Casual Loafers",
    category: "men",
    image: men1_img,
    new_price: 100.0,
    old_price: 140.0,
  },
  {
    id: 29,
    name: "Women's Designer Net Saree",
    category: "women",
    image: women2_img,
    new_price: 190.0,
    old_price: 250.0,
  },
  {
    id: 30,
    name: "Kid's Raincoat Set with Bag",
    category: "kid",
    image: kid10_img,
    new_price: 85.0,
    old_price: 115.0,
  },
  {
    id: 31,
    name: "Men's Premium Leather Wallet",
    category: "men",
    image: men2_img,
    new_price: 60.0,
    old_price: 90.0,
  },
  {
    id: 32,
    name: "Women's Gold Plated Earrings",
    category: "women",
    image: women1_img,
    new_price: 50.0,
    old_price: 75.0,
  }
];

export default all_products;
