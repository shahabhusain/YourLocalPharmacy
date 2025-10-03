import React, { useRef, useState } from 'react';
import { IoMdArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

export default function LatestNews() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

const articles = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/6823565/pexels-photo-6823565.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "Sep 28, 2025",
    text: "Flu Vaccination Season is Here – Protect yourself and your loved ones with our quick and convenient flu jabs available at Manor Pharmacy.",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/3985170/pexels-photo-3985170.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "Sep 18, 2025",
    text: "Travel Clinic Now Open – Get essential travel vaccinations and health advice before your next trip abroad.",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/3683081/pexels-photo-3683081.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "Aug 30, 2025",
    text: "New Vitamin B12 Injection Service – Boost your energy levels and overall wellness with our pharmacist-led B12 clinic.",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/3952235/pexels-photo-3952235.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "Aug 15, 2025",
    text: "Blood Testing Made Simple – Fast, reliable, and affordable blood tests now available at our pharmacy for your convenience.",
  },
  // {
  //   id: 5,
  //   img: "https://cdn.pixabay.com/photo/2016/11/29/09/32/ear-1868618_1280.jpg",
  //   date: "Jul 25, 2025",
  //   text: "Ear Wax Removal Service – Safe and effective microsuction ear wax removal available. Clear your ears and improve your hearing today.",
  // },
  {
    id: 6,
    img: "https://images.pexels.com/photos/6231534/pexels-photo-6231534.jpeg?auto=compress&cs=tinysrgb&w=800",
    date: "Jul 10, 2025",
    text: "Pharmacy First – Access trusted advice and treatment for common conditions directly from your local pharmacist without the wait.",
  },
];



  return (
    <div className="w-full bg-[#F8F8F8] py-32">
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

        {/* Swiper */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setTotalPages(swiper.snapGrid.length);
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Pagination]}
          className="mySwiper pb-12"
        >
          {articles.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-white rounded-3xl shadow hover:shadow-lg transition overflow-hidden flex flex-col">
                <img
                  src={item.img}
                  alt="Pharmacy News"
                  className="h-48 w-full object-cover"
                />
                <div className="p-6 flex flex-col gap-y-2 flex-1">
                  <p className="text-gray-700 text-sm">{item.date}</p>
                  <p className="mt-3 text-gray-900 leading-relaxed flex-1">
                    {item.text}
                  </p>
                  <button className="mt-4 flex text-[#fff] items-center">
                    <span className="bg-[#80E900] rounded-full py-3 px-6">
                      Read more
                    </span>
                    <span className="h-[45px] w-[45px] rotate-320 flex items-center justify-center bg-[#80E900] rounded-full ml-2">
                      <IoMdArrowForward size={20} />
                    </span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Manual bullets */}
        <div className="mt-8 flex justify-start gap-3">
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => swiperRef.current?.slideTo(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'w-28 bg-lime-500'
                  : 'w-3 bg-gray-400/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
