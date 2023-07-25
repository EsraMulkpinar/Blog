import React from 'react'
import SideBar from './sub-components/side-bar'

const Blog = () => {
  return (
    <div className='flex '>
        <div className="w-1/4"><SideBar /></div>
        <div className="w-3/4">Blogs</div>
    </div>
  )
}

export default Blog