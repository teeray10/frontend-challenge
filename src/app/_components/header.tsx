import Image from 'next/image';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGift} from '@fortawesome/free-solid-svg-icons/faGift';
import {faStar} from '@fortawesome/free-regular-svg-icons/faStar';
import {faHeart} from '@fortawesome/free-regular-svg-icons/faHeart';
import {faTag} from '@fortawesome/free-solid-svg-icons/faTag';
import {Suez_One} from 'next/font/google';

const suez = Suez_One({weight: "400", subsets: ["latin"]});

export default function Header() {
  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">
          <Image
            src="/logo.svg"
            alt="Reway Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
        <ul className="menu menu-horizontal px-1 hidden font-medium lg:flex">
          <li><a>APPARELS</a></li>
          <li><a>SHOES</a></li>
          <li><a>EQUIPMENT</a></li>
          <li><a>GIFT</a></li>
        </ul>
        {/*<div className="w-10">*/}
        {/*</div>*/}
      </div>
      <div className="navbar-center hidden lg:flex">

      </div>
      <div className="navbar-end">
        <div className="flex gap-5 text-grey">
          <FontAwesomeIcon icon={faGift} className="w-6 h-5" />
          <FontAwesomeIcon icon={faStar} className="w-6 h-5" />
          <FontAwesomeIcon icon={faHeart} className="w-6 h-5" />
          <FontAwesomeIcon icon={faTag} className="w-6 h-5" />
        </div>
        <div className={suez.className + " text-blue text-[17px]"}>
          <button>SIGN UP</button>
          <button className="border-[3px] w-28 h-10 rounded-s">LOGIN</button>
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"/>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a>APPARELS</a></li>
          <li><a>SHOES</a></li>
          <li><a>EQUIPMENT</a></li>
          <li><a>GIFT</a></li>
        </ul>
      </div>
    </nav>
  )
}