import Footer from '@/components/footer'
import Lock from './../../../icons/lock.svg'
import Link from 'next/link'

const ForgotPassword = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex flex-col items-center rounded-sm border-[1px] border-gray-300 mt-16 md:mt-36 w-[345px] md:w-[388px] h-[534px]">
        <div className="flex justify-center items-center rounded-full border-2 border-black mt-6 w-[101px] h-[130px] md:h-[101px]">
          <div className="w-14 h-14">
            <Lock />
          </div>
        </div>
        <p className="font-semibold pt-4">Trouble logging in?</p>
        <p className="text-center text-gray-500 text-sm pt-5 w-[80%]">
          Enter your email, phone, or username and we&apos;ll send you a link to
          get back into your account.
        </p>
        <input
          type="text"
          placeholder="Email, Phone, or Username"
          className="border-[1px] border-gray-300 rounded-md w-[80%] text-black text-xs font-light bg-[#FAFAFA] pl-2.5 mt-3 h-10 focus:outline-gray-500"
        />
        <button
          type="submit"
          className="flex justify-center items-center bg-[#0099FF] rounded-lg w-[80%] mt-4 h-8"
        >
          <p className="text-white text-sm font-medium">Send login link</p>
        </button>
        <div className="flex flex-row items-center gap-5 pt-8 w-[80%]">
          <hr className="w-[39%] border-gray-300" />
          <p className="text-sm font-medium text-gray-500">OR</p>
          <hr className="w-[39%] border-gray-300" />
        </div>
        <Link href="/signup" className="text-sm font-semibold pt-10 hover:opacity-45">
          Create new account
        </Link>
        <div className='flex justify-center items-center bg-gray-100 border-[1px] border-gray-300 mt-14 w-full h-10'>
          <Link
            href="/login"
            className="text-sm font-semibold hover:opacity-45"
          >
            Back to login
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex pt-36">
        <Footer />
      </div>
    </div>
  )
}

export default ForgotPassword
