import React, { useRef, useState } from 'react';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';

export default function WeSolveDigital() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

const testimonials = [ { id: 1, name: "Masirul Jones", role: "Team Leader", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format", rating: 5, quote: "There are many variations of passages of Lorem Ipsum available, but the majority have a suffered alteration in some form, by injected humour.", number: "01" }, { id: 2, name: "Masirul Jones", role: "Team Leader", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format", rating: 5, quote: "There are many variations of passages of Lorem Ipsum available, but the majority have a suffered alteration in some form, by injected humour.", number: "02" }, { id: 3, name: "Masirul Jones", role: "Team Leader", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&auto=format", rating: 5, quote: "There are many variations of passages of Lorem Ipsum available, but the majority have a suffered alteration in some form, by injected humour.", number: "03" }, { id: 4, name: "Masirul Jones", role: "Team Leader", image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face&auto=format", rating: 5, quote: "There are many variations of passages of Lorem Ipsum available, but the majority have a suffered alteration in some form, by injected humour.", number: "04" },
   { id: 4, name: "Masirul Jones", role: "Team Leader", image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face&auto=format", rating: 5, quote: "There are many variations of passages of Lorem Ipsum available, but the majority have a suffered alteration in some form, by injected humour.", number: "04" }
 ];

  return (
    <div className="w-full bg-[#F8F8F8] py-32">
      <div className="w-[90%] mx-auto">
        {/* Header */}
        <div className="mb-16 text-left">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-600">
            WHAT WE DO
          </p>
          <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
            We Solve Digital Challenges
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // snapGrid length = number of pagination bullets
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
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="group relative h-full transform rounded-2xl bg-white p-8 transition-all duration-300">
                <div className="mb-6 flex items-center space-x-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-16 w-16 rounded-full object-cover ring-4 ring-lime-50 group-hover:ring-lime-100"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>

                <div className="mb-4 flex space-x-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-orange-400 text-orange-400" />
                  ))}
                </div>

                <blockquote className="text-base leading-relaxed text-gray-700 group-hover:text-gray-900">
                  “{t.quote}”
                </blockquote>
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
                activeIndex === idx ? 'w-28 bg-lime-500' : 'w-3 bg-gray-400/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
