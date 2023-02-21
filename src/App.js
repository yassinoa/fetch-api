
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [food, setFood] = useState([])
  useEffect(() => {
    const options = {
          method: 'GET',
      url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
      headers: {
        'X-RapidAPI-Key': '1494826916msh87ccd689b4cb2d1p1dadf1jsned311779ae75',
        'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
      }
    };

    const fetchfoods= async ()=>{
     try {
      const foods= await axios.request(options).then(function (response) {
        setFood(response.data.hints)
        console.log(response.data.hints);
      }).catch(function (error) {
        console.error(error);
      });
        
        
      } catch (error) {
        
        console.log(error)
      }
    }
    fetchfoods();
  }, [])
  
  return (
    <div className="App">
      <div className="cont">
     {food.map((el, index)=> 
          <div key={index} > 

              
              <div className="containerr">
            <img src={el.food.image} alt="Avatar" className="image imgvid"  />
            <div className="middle">
              <div className="text">
                {/* <i class="fa-brands fa-youtube"></i> */}
                <div className="details">

                    
                    <h5> {el.food.label}</h5>
                    
                    
                     <button  className='detail but'>More detail</button>
                     
                    
                </div>
              </div>
            </div>
    </div>
            
          </div>


)}
</div>
    </div>
  );
}

export default App;


/*
function App() {
  const [food, setFood] = useState([])
  useEffect(() => {
    const options = {
          method: 'GET',
      url: 'https://edamam-food-and-grocery-database.p.rapidapi.com/parser',
      headers: {
        'X-RapidAPI-Key': '1494826916msh87ccd689b4cb2d1p1dadf1jsned311779ae75',
        'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
      }
    };

    const fetchfoods= async ()=>{
     try {
      const foods= await axios.request(options).then(function (response) {
        setFood(response.data.hints)
        console.log(response.data.hints);
      }).catch(function (error) {
        console.error(error);
      });
        
        
      } catch (error) {
        
        console.log(error)
      }
    }
    fetchfoods();
  }, [])
  
  return (
    <div className="App">
      <div className="cont">
     {food.map((el, index)=> 
          <div key={index} > 

              
              <div className="containerr">
            <img src={el.food.image} alt="Avatar" className="image imgvid"  />
            <div className="middle">
              <div className="text">
                {/* <i class="fa-brands fa-youtube"></i> }
                <div className="details">

                    
                    <h5> {el.food.label}</h5>
                    
                    
                     <button  className='detail but'>More detail</button>
                     
                    
                </div>
              </div>
            </div>
    </div>
            
          </div>


)}
</div>
    </div>
  );
}

export default App;*/