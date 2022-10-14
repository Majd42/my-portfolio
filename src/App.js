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
      discription:'an online Shop where you can add items to your cart and which updates dynamicaly and finally finish your purchase with payment.',
      technologies: 'React.js, MaterialUi, JSX, CSS',
      url:'http://google.com',
      git:'http://github.com',
    },
    {
      id: 2,
      title:'Furniture Shop',
      img: furnitureImg,
      discription:'an online Shop where you can add items to your cart and which updates dynamicaly and finally finish your purchase with payment.',
      technologies: 'Vanilla JavaScript, HTML, CSS',
      url:'http://google.com',
      git:'http://github.com',
    },
    {
      id:3,
      title:'Resturant Meal Search',
      img: mealImg,
      discription:'an online Shop where you can add items to your cart and which updates dynamicaly and finally finish your purchase with payment.',
      technologies: 'JavaScript, HTML, CSS',
      url:'http://google.com',
      git:'http://github.com',
    },
    {
      id:4,
      title:'Tic Tac Toe',
      img: XO,
      discription:'an online Shop where you can add items to your cart and which updates dynamicaly and finally finish your purchase with payment.',
      technologies: 'JavaScript, HTML, CSS',
      url:'http://google.com',
      git:'http://github.com',
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
  