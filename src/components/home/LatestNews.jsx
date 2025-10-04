import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firbase';
import { Link } from 'react-router-dom';

export default function LatestNews() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "Blogs"));
      const blogList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogs(blogList);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="w-full bg-[#F8F8F8] pb-32">
      <div className="w-[90%] mx-auto">
        {/* Header */}
        <div className="mb-16 text-left">
          <p className="uppercase text-sm font-semibold tracking-wide text-gray-700">
            Latest News
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-black">
            Manor Pharmacy Health Updates & Articles
          </h2>
        </div>

        {/* Swiper with custom pagination */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          className="latest-news-swiper"
        >
          {blogs.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-3xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
                <img
                  src={item.image}
                  alt="Pharmacy News"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6 flex flex-col gap-y-2 flex-1">
                  <p className="text-gray-700 text-sm">{item.date}</p>
                  <p className="mt-3 text-gray-900 leading-relaxed flex-1">
                    {item.description.slice(0, 80)}...
                  </p>
                  <Link to="/blogs" className="mt-4 flex text-[#fff] items-center">
                    <span className="bg-[#80E900] rounded-full py-3 px-6">
                      Read more
                    </span>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom CSS for exact bullet points like image */}
      <style jsx global>{`
        .latest-news-swiper {
          padding-bottom: 4rem !important;
        }
        
        .latest-news-swiper .swiper-pagination {
          position: relative;
          bottom: 0;
          margin-top: 2rem;
          text-align: left;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .latest-news-swiper .custom-bullet {
          width: 12px;
          height: 12px;
          background: #D1D5DB;
          border-radius: 50%;
          opacity: 0.5;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
        }
        
        .latest-news-swiper .custom-bullet.swiper-pagination-bullet-active {
          width: 40px;
          height: 12px;
          background: #80E900;
          opacity: 1;
          border-radius: 6px;
        }
        
        .latest-news-swiper .custom-bullet:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}