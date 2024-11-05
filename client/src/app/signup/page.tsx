import Footer from '@/components/footer'
import Link from 'next/link'

const Signup = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col justify-center items-center pt-10 lg:pt-32">
        <div className="flex flex-col justify-center items-center border-[1px] border-gray-300 w-[350px] h-[510px]">
          <p className="text-5xl font-semibold text-black font-dancingScript pb-2">
            Instagram
          </p>
          <p className="text-center font-semibold text-gray-500 pt-4 w-[80%]">
            {' '}
            Sign up to see photos and videos from your friends.
          </p>
          <form className="flex flex-col justify-center items-center pt-2">
            <input
              type="text"
              placeholder="Mobile Number or Email"
              className="border-[1px] border-gray-300 rounded w-[80%] text-black text-xs font-light bg-[#FAFAFA] pl-2.5 h-10 focus:outline-gray-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="border-[1px] border-gray-300 rounded w-[80%] text-black text-xs font-light bg-[#FAFAFA] pl-2.5 mt-1.5 h-10 focus:outline-gray-500"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="border-[1px] border-gray-300 rounded w-[80%] text-black text-xs font-light bg-[#FAFAFA] pl-2.5 mt-1.5 h-10 focus:outline-gray-500"
            />
            <input
              type="text"
              placeholder="Username"
              className="border-[1px] border-gray-300 rounded w-[80%] text-black text-xs font-light bg-[#FAFAFA] pl-2.5 mt-1.5 h-10 focus:outline-gray-500"
            />
            <p className="text-center text-xs text-gray-500 font-light pt-4 w-[80%]">
              People who use our service may have uploaded your contact
              information to Instagram.{' '}
              <span className="text-[#003366] text-xs font-light">
                {' '}
                Learn More
              </span>
            </p>
            <p className="text-center text-xs text-gray-500 font-light pt-4 w-[80%]">
              By signing up, you agree to our{' '}
              <span className="text-[#003366]"> Terms </span> ,{' '}
              <span className="text-[#003366]"> Privacy Policy</span> and{' '}
              <span className="text-[#003366]"> Cookies Policy </span> .
            </p>
            <button
              type="submit"
              className="flex justify-center items-center bg-[#0099FF] rounded-lg w-[80%] mt-4 h-8"
            >
              <p className="text-white text-sm font-medium">Sign up</p>
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center border-[1px] border-gray-300 text-sm mt-2.5 w-[350px] h-16">
          <p>
            Have an account?
            <Link href="/login">
              <span className="font-semibold text-[#0099FF]"> Log in</span>
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden lg:flex mt-28">
        <Footer />
      </div>
    </div>
  )
}

export default Signup
