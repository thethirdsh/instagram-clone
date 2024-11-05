import Footer from '@/components/footer'

const ResetPassword = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="flex flex-col items-center rounded border-[1px] border-gray-300 mt-32 md:mt-64 w-[345px] h-[375px]">
        <p className="font-semibold text-center text-xl pt-9">
          Change your password
        </p>
        <p className="text-xs text-gray-500 text-center pt-8 w-[80%]">
          Your password should be 10-32 characters long and include uppercase
          letters, lowercase letters, numbers, and special characters ($, @, #,
          !).
        </p>
        <form action="submit" className="flex flex-col items-center pt-6 w-full">
          <input
            type="password"
            placeholder="New password"
            className="border-[1px] border-gray-300 rounded w-[80%] text-black text-xs font-light bg-[#FAFAFA] pl-2.5 mt-1.5 h-10 focus:outline-gray-500"
          />
          <input
            type="password"
            placeholder="Confirm new password"
            className="border-[1px] border-gray-300 rounded w-[80%] text-black text-xs font-light bg-[#FAFAFA] pl-2.5 mt-1.5 h-10 focus:outline-gray-500"
          />
          <button
            type="submit"
            className="flex justify-center items-center bg-[#0099FF] rounded-lg mt-8 w-[80%] mt-4 h-8"
          >
            <p className="text-white text-sm font-medium">Reset password</p>
          </button>
        </form>
      </div>
      <div className="hidden lg:flex mt-52">
        <Footer />
      </div>
    </div>
  )
}

export default ResetPassword
