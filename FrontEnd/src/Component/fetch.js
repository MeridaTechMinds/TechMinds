import axios from 'axios'
import React, { useEffect } from 'react'

const fetch = () => {
    useEffect(()=>{
        axios.get('http://192.168.0.122:9000/api/blog')
        .then((response)=>{
            console.log(response.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    })
  return (
    <div>

    </div>
  )
}

export default fetch