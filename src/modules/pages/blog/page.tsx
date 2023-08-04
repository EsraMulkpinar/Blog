import React from 'react'
import SideBar from './sub-components/sideBar'

const Blog = () => {
  return (
    <div className='flex' >
        <div className="w-3/8 "><SideBar /></div>
        <div className="w-5/8">Blogs</div>
    </div>
  )
}

export default Blog