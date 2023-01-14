import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards';
import data from "./db.json";
import {useState,useEffect} from "react";


function App() {
    const [rooms,setRooms] = useState(data)

    const handleFavorite = (id) =>{
      console.log(id,"room id")
      const updatedTodos = rooms.map((item) =>
            item.id === id ? { ...item, fevorite: !item.fevorite } : item
        );
        setRooms(updatedTodos)
    }
console.log(rooms)
  return (
    <div className="App">
      <Navbar/>
      <div className="Products">
      {
        rooms?.map((rooms,i) =>(
          <Cards
          key={i}
          image={rooms.Image2}
          price={rooms.Price}
          name={rooms.Hotelname}
          about={rooms.About}
          favorite = {rooms.fevorite}
          handleFavorite={handleFavorite}
          id={rooms.id}
          />
        ))

      }
     

      </div>
    </div>
  );
}

export default App;
