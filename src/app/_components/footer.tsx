import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSquareFacebook} from '@fortawesome/free-brands-svg-icons/faSquareFacebook';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';

export default function Footer() {
  return (
    <footer className={`font-pt_sans font-bold bg-dark_grey flex flex-col justify-between items-center text-center text-white gap-10 tracking-wide py-10 lg:px-52 lg:text-left lg:flex-row`}>
      <div className="flex flex-col gap-10 lg:flex-row lg:gap-24 leading-8">
        <div>
          <h4 className="font-suez text-white text-xl">Account</h4>
          <div className="opacity-50">
            <a><p>Account details</p></a>
            <a><p>Orders</p></a>
            <a><p>Returns and Exchanges</p></a>
          </div>
        </div>
        <div>
          <h4 className="font-suez text-white text-xl">The Company</h4>
          <div className="opacity-50">
            <a><p>About us</p></a>
            <a><p>Careers</p></a>
            <a><p>Contact</p></a>
          </div>
        </div>
      </div>
      <div>
        <h4 className="font-suez text-xl mb-2">Follow Us!</h4>
        <div className="flex flex-row justify-center gap-5 text-white lg:gap-10">
          <FontAwesomeIcon icon={faSquareFacebook} className="w-6 h-6 lg:w-9 lg:h-9" />
          <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 lg:w-9 lg:h-9" />
        </div>
      </div>
    </footer>
  )
}
