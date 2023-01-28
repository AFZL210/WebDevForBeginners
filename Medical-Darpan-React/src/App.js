import React, {useState} from 'react'
import './App.css';

import Navbar from './components/Navbar/Navbar';
import SearchBox from './components/SearchBox/SearchBox';
import Sidebar from './components/Sidebar/Sidebar';
import Content from './components/Content/Content';


function App() {

  const [medicine,setMedicine] = useState([
    {
      ind:0,
      img:"https://res.cloudinary.com/primeflix/image/upload/v1670829687/IMG_20221211_180547_auto_x2_ju425p.jpg",
      title:"Favipirapir 400mg (Fabiflu) Tablets",
      price:"1,775",
      company:"Glenmark Pharmaceutical Limited",
      location:"PARVAT PATIYA, SURAT, GUJRAT"
    },
    {
      ind:1,
      img:"https://res.cloudinary.com/primeflix/image/upload/v1670829687/IMG_20221211_180547_auto_x2_ju425p.jpg",
      title:"Favipirapir 400mg (Fabiflu) Tablets",
      price:"1,775",
      company:"Glenmark Pharmaceutical Limited",
      location:"PARVAT PATIYA, SURAT, GUJRAT"
    },
    
    {
      ind:2,
      img:"https://res.cloudinary.com/primeflix/image/upload/v1670829687/IMG_20221211_180547_auto_x2_ju425p.jpg",
      title:"Favipirapir 400mg (Fabiflu) Tablets",
      price:"1,775",
      company:"Glenmark Pharmaceutical Limited",
      location:"PARVAT PATIYA, SURAT, GUJRAT"
    },
    {
      ind:3,
      img:"https://res.cloudinary.com/primeflix/image/upload/v1670829687/IMG_20221211_180547_auto_x2_ju425p.jpg",
      title:"Favipirapir 400mg (Fabiflu) Tablets",
      price:"1,775",
      company:"Glenmark Pharmaceutical Limited",
      location:"PARVAT PATIYA, SURAT, GUJRAT"
    },
    {
      ind:4,
      img:"https://res.cloudinary.com/primeflix/image/upload/v1670829687/IMG_20221211_180547_auto_x2_ju425p.jpg",
      title:"Favipirapir 400mg (Fabiflu) Tablets",
      price:"1,775",
      company:"Glenmark Pharmaceutical Limited",
      location:"PARVAT PATIYA, SURAT, GUJRAT"
    },
    {
      ind:5,
      img:"https://res.cloudinary.com/primeflix/image/upload/v1670829687/IMG_20221211_180547_auto_x2_ju425p.jpg",
      title:"Favipirapir 400mg (Fabiflu) Tablets",
      price:"1,775",
      company:"Glenmark Pharmaceutical Limited",
      location:"PARVAT PATIYA, SURAT, GUJRAT"
    },
  ])

  const [sides,setSides] = useState([
    {
      ind:0,
      title:"Related Category",
      descriptions:["Paracetemol Tablets","Paracetemol Syrup","Paracetemol Power","Aceclofnac","Paracetemol"]
    },
    {
      ind:1,
      title:"Related Brands",
      descriptions:["Paracetemol Tablets","Paracetemol Syrup","Paracetemol Power","Aceclofnac","Paracetemol"]
    },
    {
      ind:2,
      title:"Brand Type",
      descriptions:["Paracetemol Tablets","Paracetemol Syrup","Paracetemol Power","Aceclofnac","Paracetemol"]
    }
  ])

  const onContact = () => {
    console.log("Contact Seller Clicked!")
  }

  const onClickSide = () => {
    console.log("Side clicked")
  }

  return (
    <div className="App">
      <Navbar/>
      <SearchBox/>
      <Sidebar sides={sides}/>
      <Content medicines={medicine} onContact={onContact}/>
    </div>
  );
}

export default App;
