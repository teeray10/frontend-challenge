"use client";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {useState} from 'react';
import ImageThumbnail from '@/app/shoes/_components/imageThumbnail';

export default function Carousel({items}: any) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="col-span-1 select-none ">
      <div className="carousel w-full mb-4">
        {
          items?.map((item: any, index: number) => (
            <div key={index} className={`carousel-item relative w-full cursor-zoom-in ${selectedIndex == index ? 'block' : 'hidden'}`}>
              <img src={item.src} alt={item.alt} className="w-full object-cover hidden lg:block" onClick={() => (document?.getElementById('image-modal') as any)?.showModal()}/>
              <img src={item.src} alt={item.alt} className="w-full object-cover lg:hidden"/>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <FontAwesomeIcon icon={faChevronLeft} className="w-3 cursor-pointer" onClick={() => setSelectedIndex(index > 0 ? --index : items.length - 1)}/>
                <FontAwesomeIcon icon={faChevronRight} className="w-3 cursor-pointer" onClick={() => setSelectedIndex(index < items.length - 1 ? ++index : 0)}/>
              </div>
            </div>
          ))
        }
      </div>
      <div className="grid grid-cols-4 gap-4">
        {
          items?.map((item: any, index: number) => (
            <ImageThumbnail onSelect={() => setSelectedIndex(index)} key={index} item={item} isSelected={index == selectedIndex}/>
          ))
        }
      </div>
      <dialog id="image-modal" className="modal ">
        <div className="bg-lightest_grey flex justify-center w-screen h-screen max-h-screen">
          <form method="dialog">
            <button className="absolute right-5">Close</button>
          </form>
          <img src={items[selectedIndex].src} alt={items[selectedIndex].alt} className="h-full"/>
        </div>
      </dialog>
    </section>
  )
}