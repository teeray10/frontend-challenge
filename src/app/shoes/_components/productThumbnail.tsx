import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShop} from '@fortawesome/free-solid-svg-icons/faShop';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons/faArrowRight';
import {faTag} from '@fortawesome/free-solid-svg-icons/faTag';

export default function ProductThumbnail({product}: any) {
  let discountPercentage;
  if (product.salePrice) {
    discountPercentage = Math.round((product.price - product.salePrice) / product.price * 100);
  }
  return (
    <div className="flex flex-col justify-between gap-1 text-grey group outline outline-0 outline-blue hover:bg-lightest_grey cursor-pointer hover:outline-4">
      <div>
        <div className="relative">
          <img src={product.src} alt={product.name} />
          {
            discountPercentage &&
            <span className="absolute top-0 right-0 flex items-center w-fit h-fit bg-blue text-white rounded-md py-1 px-2 italic font-bold text-sm lg:text-lg">
              <FontAwesomeIcon icon={faTag} className="w-5 h-5 mr-1"/>{discountPercentage}% Off
            </span>
          }
          {
            product.lowStock &&
            <span className="absolute bottom-2 left-2 bg-black/50 z-10 text-white font-bold italic rounded-sm py-1 px-2">LOW STOCK</span>
          }
        </div>
        <h4 className="font-suez text-xl uppercase text-black mx-3 mt-3">{product.name}</h4>
      </div>
      <div className="px-3 pb-3">
        <div className="flex items-center gap-1 font-bold uppercase">
          <FontAwesomeIcon icon={faShop} className="w-3 h-3"/>
          <p>{product.vendor}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-suez text-blue text-xl">R {product.salePrice || product.price}</p>
          <a className="flex items-center font-bold text-sm">
            View
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-3"/>
          </a>
        </div>
      </div>
    </div>
  )
}