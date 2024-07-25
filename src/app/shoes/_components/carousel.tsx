"use client";

import Image from 'next/image';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {useState} from 'react';
import Thumbnail from '@/app/shoes/_components/thumbnail';

export default function Carousel({items}: any) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="col-span-1 select-none mb-5">
      <div className="carousel w-full mb-4">
        {
          items?.map((item: any, index: number) => (
            <div key={item.id} className={`carousel-item relative w-full cursor-zoom-in ${selectedIndex == index ? 'block' : 'hidden'}`}>
              <Image
                src={item.src}
                alt={item.alt}
                className="w-full object-cover" />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <FontAwesomeIcon icon={faChevronLeft} className="w-3 cursor-pointer" onClick={() => setSelectedIndex(index > 0 ? --index : items.length - 1)}/>
                <FontAwesomeIcon icon={faChevronRight} className="w-3 cursor-pointer" onClick={() => setSelectedIndex(index < items.length -1 ? ++index : 0)}/>
              </div>
            </div>
          ))
        }
      </div>
      <div className="grid grid-cols-4 gap-4">
        {
          items?.map((item: any, index: number) => (
            <Thumbnail onSelect={() => setSelectedIndex(index)} key={item.id} item={item} isSelected={index == selectedIndex} />
          ))
        }
      </div>
    </section>
  )
}