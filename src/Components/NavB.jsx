import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFetchinggAsync } from '../redux/slice';

const NavB = ({text,setText ,options}) => {
  
  const dispatch=useDispatch();
  const handleSubmit=(e)=>{
    e.preventDefault();
     dispatch(getFetchinggAsync(options));
  }
  return (
    <div className='navb'>
      <div className="navL">
      
       <Link to='/'> 
       <img src="https://rapidapi.com/cdn/images?url=https://rapidapi-prod-apis.s3.amazonaws.com/d7/523608718e442abc945fa15f1d53a2/c46b869cfc74246426116282a2d67fd8.png" className='imglog' alt='' />
        </Link> 
      </div>
      <div className="navM">




          <form onSubmit={handleSubmit}>
            <div className="searchbar">
            
                
                  
                
                <input placeholder="Rechercher" className="searchInput"  value={text}  onChange={(e)=>setText(e.target.value)} /> 
                <div className='serch-r'> <button style={{all: "unset",cursor:"pointer"}}> <i className="fa-solid fa-magnifying-glass searchIcon "></i></button></div>
                
            </div>
          </form>

          </div>
     
        </div>
  )
}

export default NavB