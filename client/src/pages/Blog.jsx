import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { blog_data } from '../assets/assets'

const Blog = () => {

  const { id } = useParams()

  const [data, setdata] = useState(null)

  const fetchBlogData = async () => {
    const data = blog_data.find(item => item._id === id)
    setdata(data)
  }

  useEffect(() => {
    fetchBlogData()
  }, [])

  return data ? (
    <div>
      <h1>Blog</h1>
    </div>
  ) : <div>Loading...</div>
}

export default Blog
