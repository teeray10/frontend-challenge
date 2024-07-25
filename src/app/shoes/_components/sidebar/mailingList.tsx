import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons/faEnvelope';
import {faXmark} from '@fortawesome/free-solid-svg-icons/faXmark';

export default function MailingList() {
  return (
    <div className="bg-blue text-white flex flex-col items-center gap-4 py-5 px-7 relative text-center lg:ml-5">
      <FontAwesomeIcon icon={faXmark} className="absolute right-3 top-3 w-5 h-5"/>
      <FontAwesomeIcon icon={faEnvelope} className="w-10 h-10"/>
      <h4 className="font-suez text-xl">SIGN UP TO OUR MAILING LIST!</h4>

      <div className="w-full">
        <p className="ml-3 mb-1 font-bold text-sm text-left">EMAIL</p>
        <input type="text" placeholder="ENTER EMAIL ADDRESS" className="w-full py-2 px-3 text-grey" />
      </div>

      <button className="bg-white text-blue font-suez text-xl px-12 py-4">SUBMIT</button>
    </div>
  )
}