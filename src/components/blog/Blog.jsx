import React, { useEffect, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firbase'

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  const [search, setSearch] = useState("")
  const [selectedBlog, setSelectedBlog] = useState(null)

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Blogs"))
        const blogList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setBlogs(blogList)

        // Set first blog as default selected
        if (blogList.length > 0) {
          setSelectedBlog(blogList[0])
        }
      } catch (error) {
        console.log("error in blogs", error)
      }
    }
    fetchBlogs()
  }, [])

  const searchFilter = search === ""
    ? blogs
    : blogs.filter((item) =>
        item.title?.toLowerCase().includes(search.toLowerCase())
      )

  return (
    <div className='md:mt-[400px] mt-[350px] mb-[100px] flex flex-col md:flex-row justify-between w-[90%] mx-auto'>
      
      {/* LEFT SIDE (Selected Blog) */}
      <div className='flex flex-col gap-y-5 md:w-[65%]'>
        {selectedBlog ? (
          <>
            <img src={selectedBlog.image} alt={selectedBlog.title} />
            <h1 className='text-[24px] font-bold text-black'>{selectedBlog.title}</h1>
            <div className='text-[14px] font-[400] text-[#4E4E4E] flex items-center gap-5'>
              <span>{selectedBlog.date}</span>
            </div>
            <p className='text-[14px] font-[400] text-[#4E4E4E]'>
              {selectedBlog.description}
            </p>
          </>
        ) : (
          <p className="text-gray-500">Select a blog to see details</p>
        )}
      </div>

      {/* RIGHT SIDE (Blog List + Search) */}
      <div className='border-[#0000000e] border-[1px] flex flex-col gap-y-5 rounded-md py-3 px-5 md:w-[30%] mt-5 md:mt-0'>
        
        {/* Search Bar */}
        <div className='flex outline focus-within:outline-[#80E900] border-none py-3 px-5 rounded-md bg-[#F8F8F888] items-center justify-between '>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            className='focus:outline-none border-none'
            type="text"
            placeholder='search'
          />
          <FaSearch size={20} className='text-[#80E900]' />
        </div>

        {/* Blog List */}
        <div className='flex flex-col gap-y-4'>
          {searchFilter.map((item, index) => (
            <div
              onClick={() => setSelectedBlog(item)} // ✅ Correct handler
              key={item.id || index}
              className='border-[#0000000e] gap-4 border-[1px] flex items-center justify-between rounded-md py-3 px-5 cursor-pointer hover:bg-gray-100 transition'
            >
              <img className='w-[150px] rounded-md' src={item.image} alt={item.title} />
              <div>
                <h1 className='text-[16px] font-bold text-[#000000be]'>{item.title.slice(0, 15)}...</h1>
                <p className='text-[14px] font-medium'>{item.date}</p>
                <p className='text-[14px] font-medium'>{item.description.slice(0, 30)}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog
