import Link from 'next/link';
import { FcAbout } from "react-icons/fc";
import { PiVideoFill } from "react-icons/pi"
import { AiFillCaretDown } from "react-icons/ai"

const Navbar = () => {

  return (
    <nav className="flex-center top-0 z-50 w-full bg-black-100 py-1 text-black">
      <div className="flex-between mx-auto w-full px-1 xs:px-1 sm:px-3">
        <Link prefetch href="/About">
          {/* <Image src='/Logo.png' width={75} height={58} className='!w-[155px] !h-[120px]' alt='JSM logo' /> */}
          <div className='flex'><FcAbout className='h-[22px] w-[22px] mt-[-1px] sm:h-[25px] sm:w-[25px] sm:mt-[-2px] md:h-[30px] md:w-[30px] md:mt-[-3px] lg:h-[35px] lg:w-[35px] lg:mt-[-2px] xl:h-[35px] xl:w-[35px] xl:mt-[-2px] 2xl:h-[40px] 2xl:w-[40px] 2xl:mt-[-2px]' /><div className='text-center text-[13px] h-full ml-[1px] mt-[1px] sm:ml-[0px] sm:mt-[1px] sm:text-[14px] md:ml-[2px] md:mt-[2px] md:text-[14px] lg:ml-[2px] lg:mt-[4px] lg:text-[16px] xl:ml-[2px] xl:mt-[4px] xl:text-[16px] 2xl:ml-[5px] 2xl:mt-[5px] 2xl:text-[18px]'>About us</div></div>
        </Link>

        {/* <Image 
          src="/hamburger-menu.svg"
          width={30}
          height={30}
          alt="Hamburger menu"
          className="block md:hidden"
        /> */}

        {/* <ul className="flex-center gap-x-3 max-md:hidden md:gap-x-10">
          <li className="body-text text-gradient_blue-purple !font-bold">
            <Link
              href="https://jsmastery.pro/next13"
              target="_blank"
            >
              Next.js 13.4 Course
            </Link>
          </li>
          <li className="body-text !font-normal">
            <Link
              href="https://jsmastery.pro/masterclass"
              target="_blank"
            >
              Masterclass
            </Link>
          </li>
        </ul> */}

        <div>
            <div className='flex'>
                <PiVideoFill className='h-[22px] w-[22px] mt-[0px] sm:h-[25px] sm:w-[25px] sm:mt-[0px] md:h-[30px] md:w-[30px] md:mt-[-1px] lg:h-[35px] lg:w-[35px] lg:mt-[-2px] xl:h-[35px] xl:w-[35px] xl:mt-[-2px] 2xl:h-[40px] 2xl:w-[40px] 2xl:mt-[-2px]' />
                <div className="dropdown relative inline-block">
                    <div className="dropbtn-h ml-[5px] divide-solid border-[1px] divide-[#dddddd8c] p-[0px] cursor-pointer flex justify-center items-center bg-[#fff] text-[12px] sm:ml-[5px] sm:p-[0px] sm:text-[14px] md:ml-[5px] md:p-[0px] md:text-[14px] lg:ml-[5px] lg:p-[0px] lg:text-[14px] xl:ml-[5px] xl:p-[0px] xl:text-[14px] 2xl:ml-[5px] 2xl:p-[0px] 2xl:text-[16px]">
                        <button className="dropbtn bg-white divide-none py-[1px] px-[2px] sm:p-[1px] md:p-[2px] lg:p-[3px] xl:p-[3px] 2xl:p-[5px]">How to buy</button>
                        <AiFillCaretDown className="dropbtn-b " />
                    </div>
                    <div id="myDropdown" className="dropdown-content hidden absolute z-[1] ml-[4px] sm:ml-[3px] md:ml-[3px] lg:ml-[4px] xl:ml-[4px] 2xl:ml-[2px]">
                        <Link href="/Guide" className='px-[1px] py-[1px] text-center border-[1px] divide-solid divide-[#dddddd8c] block bg-white w-[85px] text-[12px] text-black sm:px-[3px] sm:py-[1px] sm:text-[14px] sm:w-[100px] md:px-[3px] md:py-[2px] md:text-[14px] md:w-[100px] lg:px-[2px] lg:py-[2px] lg:text-[14px] lg:w-[100px] xl:px-[2px] xl:py-[2px] xl:text-[14px] xl:w-[100px] 2xl:px-[3px] 2xl:py-[4px] 2xl:text-[16px] 2xl:w-[120px]'>Men Kameez</Link>
                        <Link href="/Guide" className='px-[1px] py-[1px] text-center border-[1px] divide-solid divide-[#dddddd8c] block bg-white w-[85px] text-[12px] text-black sm:px-[3px] sm:py-[1px] sm:text-[14px] sm:w-[100px] md:px-[3px] md:py-[2px] md:text-[14px] md:w-[100px] lg:px-[2px] lg:py-[2px] lg:text-[14px] lg:w-[100px] xl:px-[2px] xl:py-[2px] xl:text-[14px] xl:w-[100px] 2xl:px-[3px] 2xl:py-[4px] 2xl:text-[16px] 2xl:w-[120px]'>Gand Afghani</Link>
                        <Link href="/Guide" className='px-[1px] py-[1px] text-center border-[1px] divide-solid divide-[#dddddd8c] block bg-white w-[85px] text-[12px] text-black sm:px-[3px] sm:py-[1px] sm:text-[14px] sm:w-[100px] md:px-[3px] md:py-[2px] md:text-[14px] md:w-[100px] lg:px-[2px] lg:py-[2px] lg:text-[14px] lg:w-[100px] xl:px-[2px] xl:py-[2px] xl:text-[14px] xl:w-[100px] 2xl:px-[3px] 2xl:py-[4px] 2xl:text-[16px] 2xl:w-[120px]'>Party Dress</Link>
                        {/* <a className="pr-[3px] pl-[3px] pt-[4px] pb-[4px] border-[1px] divide-solid divide-[#dddddd8c] block bg-white w-[120px]" >Men Kameez</a> */}
                        {/* <a className="pr-[3px] pl-[3px] pt-[4px] pb-[4px] border-[1px] divide-solid divide-[#dddddd8c] block bg-white w-[120px]" >Gand Afghani</a> */}
                        {/* <a className="pr-[3px] pl-[3px] pt-[4px] pb-[4px] border-[1px] divide-solid divide-[#dddddd8c] block bg-white w-[120px]" >Party Dress</a> */}
                    </div>
                </div>
            </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar