import SelectBox from '@/app/shoes/_components/selectBox';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartPlus} from '@fortawesome/free-solid-svg-icons/faCartPlus';

export default function AddToCart() {
  const sizes = [
    {value: 'small', label: 'SMALL'},
    {value: 'medium', label: 'MEDIUM'},
    {value: 'large', label: 'LARGE'},
  ]

  const quantities = [
    {value: '1', label: '1'},
    {value: '2', label: '2'},
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'},
    {value: '6', label: '6'},
    {value: '7', label: '7'},
    {value: '8', label: '8'},
    {value: '9', label: '9'},
    {value: '10', label: '10'},
  ]

  return (
    <div className="bg-lightest_grey p-5">
      <p className="text-grey text-opacity-50 font-bold ml-2">SIZE</p>
      <SelectBox items={sizes} isMulti={false}/>

      <p className="text-grey text-opacity-50 font-bold ml-2">QUANTITY</p>
      <SelectBox items={quantities} isMulti={false}/>

      <button className="bg-blue text-white font-suez lg:text-2xl xl:text-3xl p-5 text-nowrap mx-auto flex items-center gap-3 w-fit">
        <FontAwesomeIcon icon={faCartPlus} className="w-8 h-5" />
        ADD TO CART
      </button>
    </div>
  )
}