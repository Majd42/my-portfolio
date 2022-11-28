import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Portfolio from './components/Portfolio/Portfolio'
import {
  BrowserRouter as Router,
 
} from "react-router-dom";
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import ecommerceImg from './assets/ecommerce.png' 
import furnitureImg from './assets/furniture.png' 
import mealImg from './assets/mealsearch.png' 
import XO from './assets/Tic Tac Toe.jpg' 
import { useState } from 'react';


function App() {
  const [active, setActive] = useState(false)
  
  const projects = [
    {
      id: 1,
      title:'Ecommerce Shop',
      img: ecommerceImg,
      discription:'A Fullstack online Shop with a dynamic cart system and payment method to finalize your order.',
      technologies: 'React.js, MaterialUi, JSX, CSS, node.js, express.js',
      url:'https://shopinonline.netlify.app/store',
      git:'https://github.com/Majd42/fullstack-ecommerce',
    },

    {
      id: 2,
      title:'Furniture Shop',
      img: furnitureImg,
      discription:'An Amazing looking online Furniture shop with the ability to add and delete items in a cart and store the cart in the local storage.' ,
      url:'https://monumental-cascaron-a2cc2b.netlify.app',
      git:'https://github.com/Majd42/Furniture-Shop',
    },
    {
      id:3,
      title:'Resturant Meal Search',
      img: mealImg,
      discription:'I used MealDB API to build a restaurant meal search by ingredient name.',
      technologies: 'JavaScript, HTML, CSS',
      url:'https://bucolic-douhua-579d59.netlify.app',
      git:'https://github.com/Majd42/Meal-Search',
    },
    {
      id:4,
      title:'Tic Tac Toe',
      img: XO,
      discription:'I Built a Tic Tac Toe Game using HTML, CSS, and JavaScript.',
      technologies: 'JavaScript, HTML, CSS',
      url:'https://tubular-salamander-d6fc19.netlify.app',
      git:'https://github.com/Majd42/Tic-Tac-Toe',
    }
  ]


  return (
    <>
      <Router >
        <Header active={active} setActive={setActive} />
        
        <AnimatedRoutes projects= {projects} active={active} setActive={setActive}/>
        
      </Router>
    </>
  );
}

export default App;
  