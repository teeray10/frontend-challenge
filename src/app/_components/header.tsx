"use client";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGift} from '@fortawesome/free-solid-svg-icons/faGift';
import {faStar} from '@fortawesome/free-regular-svg-icons/faStar';
import {faHeart} from '@fortawesome/free-regular-svg-icons/faHeart';
import {faTag} from '@fortawesome/free-solid-svg-icons/faTag';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const links = [
  {name: "apparels"},
  {name: "shoes"},
  {name: "equipment"},
  {name: "gift"}
]

export default function Header() {
  const path = usePathname();
  const isActiveLink = (href: string) => path === '/' + href;

  return (
    <nav className="font-suez navbar flex justify-between p-5 lg:px-11 lg:py-6">
      <Link href="/">
        <img src="/logo.svg"
             alt="Reway Logo"
        />
      </Link>
      <ul className="hidden font-medium gap-3 lg:flex lg:gap-8 hover:*:text-blue hover:*:cursor-pointer">
        {
          links?.map((link) => (
            <li key={link.name}>
              <Link href={`/${link.name}`} scroll={false} className={`uppercase ${isActiveLink(link.name) ? 'text-blue' : ''}`}>{link.name}</Link>
            </li>
          ))
        }
      </ul>
      <div className="gap-2 text-grey hidden lg:flex xl:gap-5">
        <FontAwesomeIcon icon={faGift} className="w-6 h-5 cursor-pointer hover:text-blue" />
        <FontAwesomeIcon icon={faStar} className="w-6 h-5 cursor-pointer hover:text-blue" />
        <FontAwesomeIcon icon={faHeart} className="w-6 h-5 cursor-pointer hover:text-blue" />
        <FontAwesomeIcon icon={faTag} className="w-6 h-5 cursor-pointer hover:text-blue" />
      </div>
      <div className="text-blue text-[17px] hidden lg:inline">
        <button className="hover:outline outline-[3px] outline-blue rounded-md w-24 h-10">SIGN UP</button>
        <button className="border-[3px] border-blue w-28 h-10 rounded-md ml-3 lg:ml-8 hover:text-white hover:border-transparent hover:bg-blue">LOGIN</button>
      </div>
      <div className="dropdown dropdown-end lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost">
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
        <div className="dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-3 shadow flex flex-col">
          <ul className="flex flex-col gap-1">
            {
              links?.map((link) => (
                <li key={link.name}>
                  <Link href={`/${link.name}`} scroll={false} className={`uppercase ${isActiveLink(link.name) ? 'text-blue' : ''}`}>{link.name}</Link>
                </li>
              ))
            }
          </ul>
          <div className="flex my-3 gap-1">
            <FontAwesomeIcon icon={faGift} className="w-6 h-5 cursor-pointer hover:text-blue"/>
            <FontAwesomeIcon icon={faStar} className="w-6 h-5 cursor-pointer hover:text-blue"/>
            <FontAwesomeIcon icon={faHeart} className="w-6 h-5 cursor-pointer hover:text-blue"/>
            <FontAwesomeIcon icon={faTag} className="w-6 h-5 cursor-pointer hover:text-blue"/>
          </div>
          <button className="w-fit">SIGN UP</button>
          <button className="w-fit">LOGIN</button>
        </div>
      </div>
    </nav>
  )
}