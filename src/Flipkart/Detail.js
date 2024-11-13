import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {
    const {id} = useParams();
    const [data, setData] = useState();
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
          .then((res) => res.json())
          .then((data) => setData(data))
          .catch((e) => {
            console.log(e);
          });
      });
  return (
    <div>
      <img src={data?.images}/>
    </div>
  )
}

export default Detail
