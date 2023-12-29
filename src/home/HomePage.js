import React, {useState, useEffect} from "react";
import axios from 'axios';
import ItemBox from './ItemBox';
import Home from './Home.css'

function HomePage(){
    const [items, setItems] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8080/items/all').then(response => {
        setItems(response.data);
      }).catch(error => {
        console.error('Error fetching data:', error);
      });
    }, []); 
  
    useEffect(() => {
      // Apply the class to the body element when the component mounts
      document.body.classList.add('body-Home');
  
      // Clean up - remove the class when the component unmounts
      return () => {
        document.body.classList.remove('body-Home');
      };
    }, []);
    
    return (
      <div class="swatch">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    );
}

export default HomePage;
