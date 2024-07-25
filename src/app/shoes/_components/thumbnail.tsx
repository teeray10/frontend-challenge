import Image from 'next/image';

export default function Thumbnail({item, onSelect, isSelected}: any) {
  return (
    <div className={`max-h-24 cursor-pointer relative border-blue ${isSelected ? 'border-2' : ''}`} onClick={onSelect}>
      <div className={`w-full h-full bg-[#1B1B1B] absolute top-0 left-0 opacity-25 ${isSelected ? 'block' : 'hidden'}`}></div>
      <Image
        src={item.src}
        alt={item.alt}
        className="w-full h-full object-cover" />
    </div>
  )
}