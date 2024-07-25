import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass';
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import SelectBox from '@/app/shoes/_components/selectBox';

const brands = [
  {value: 'superbalist', label: 'SUPERBALIST'},
  {value: 'mango', label: 'Mango'},
  {value: 'nike', label: 'Nike'},
  {value: 'adidas', label: 'Adidas'}
];

const colours = [
  {value: 'red', label: 'Red'},
  {value: 'green', label: 'Green'},
  {value: 'navy', label: 'Navy'},
  {value: 'white', label: 'White'},
  {value: 'black', label: 'Black'},
  {value: 'grey', label: 'Grey'}
];

export default function SearchBox() {
  return (
    <section className="flex flex-col border-blue border-2 pb-5">
      <div className="bg-blue text-white flex w-full mb-5 px-5 py-3 gap-2">
        <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-4 mt-1"/>
        <div className="flex flex-col">
          <p>Hide</p>
          <div className="flex gap-3">
            <h4 className="font-suez text-xl">SEARCH REWAY</h4>
            <FontAwesomeIcon icon={faMagnifyingGlass} className="w-5"/>
          </div>
        </div>
      </div>

      <div className="flex flex-col px-5">
        <p className="text-grey text-opacity-50 font-bold ml-2">BRANDS</p>
        <SelectBox items={brands} isMulti={true} />

        <p className="text-grey text-opacity-50 font-bold ml-2">COLOUR</p>
        <SelectBox items={colours} isMulti={true} />
      </div>

      <button className="bg-blue text-white font-suez flex gap-2 items-center py-4 px-6 w-fit mx-auto">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="w-3" />
        SEARCH
      </button>
    </section>
  )
}