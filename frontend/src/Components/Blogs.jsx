import axios from 'axios'
import React, { useEffect } from 'react'

const Blogs = () => {
  const sendRequest = axios.get("http://localhost:5000/api/blog").catch(err => console.log(err))
  useEffect(() => {

  },[])

  return (
    <div>
      
    </div>
  )
}

export default Blogs;
