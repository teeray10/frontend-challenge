import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';

export default function Breadcrumbs() {
  return (
    <div className="flex gap-2 items-center text-grey">
      <p className="text-blue">Home</p>
      <FontAwesomeIcon icon={faChevronRight} className="w-5 h-4"/>
      <p className="text-blue">Boots</p>
      <FontAwesomeIcon icon={faChevronRight} className="w-5 h-4"/>
      <p className="">Dylan Hiker Boots</p>
    </div>
  )
}