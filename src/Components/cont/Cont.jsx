import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFetchinggAsync } from '../../redux/slice';

const Cont = ({text,setText ,options}) => {
  const dispatch=useDispatch();

const {data,loading} = useSelector(state=>state.fetchingData)
// console.log(data, "ok")
useEffect(() => {
  dispatch(getFetchinggAsync(options));
}, [])// eslint-disable-line react-hooks/exhaustive-deps

 
  return (
    <div className="cont">
    {
      loading ? <div><Spinner animation="border" variant="primary" /> whait data ...</div> : data.filter(el=>el.food.label.trim().toLowerCase().includes(text.trim().toLowerCase())).map((el,i)=>
      <div key={i}>
        <div className="containerr">
            <img src={el.food.image ? el.food.image : "/default.jpg"} alt="Avatar" className="image imgvid"  />
            <div className="middle">
              <div className="text">
                
                <div className="details">

                    
                    <h5> {el.food.label}</h5>
                    
                    <Link to={"/food/" + el.food.foodId}>
                        <button  className='detail but'>More detail</button>
                    </Link>
                    
                    
                </div>
              </div>
            </div>
    </div>

      </div>)
    }
      </div>
  )
}

export default Cont