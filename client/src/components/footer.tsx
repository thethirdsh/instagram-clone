import Link from 'next/link'

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full gap-6">
      <div className="flex flex-row gap-4">
        <Link href="">
          <p className="text-gray-500 text-xs hover:underline font-normal">
            Meta
          </p>
        </Link>
        <Link href="">
          <p className="text-gray-500 text-xs hover:underline font-normal">
            About
          </p>
        </Link>
        <Link href="">
          <p className="text-gray-500 text-xs hover:underline font-normal">
            Blog
          </p>
        </Link>
        <Link href="">
          <p className="text-gray-500 text-xs hover:underline font-normal">
            Jobs
          </p>
        </Link>
        <Link href="">
          <p className="text-gray-500 text-xs hover:underline font-normal">
            Help
          </p>
        </Link>
        <Link href="">
          <p className="text-gray-500 text-xs hover:underline font-normal">
            API
          </p>
        </Link>
        <Link href="">
          <p className="text-gray-500 text-xs hover:underline font-normal">
            Privacy
          </p>
        </Link>
        <Link href="">
          <p className="text-gray-500 text-xs hover:underline font-normal">
            Terms
          </p>
        </Link>
        <Link href="">
          <p className="text-gray-500 text-xs hover:underline font-normal">
            Locations
          </p>
        </Link>
        <Link href="">
          <p className="text-gray-500 text-xs hover:underline font-normal">
            Instagram Lite
          </p>
        </Link>
        <Link href="">
          <p className="text-gray-500 text-xs hover:underline font-normal">
            Threads
          </p>
        </Link>
        <Link href="">
          <p className="text-gray-500 text-xs hover:underline font-normal">
            Contact Uploading & Non-Users
          </p>
        </Link>
        <Link href="">
          <p className="text-gray-500 text-xs hover:underline font-normal">
            Meta Verified
          </p>
        </Link>
      </div>
      <div className="flex flex-row gap-4">
        <button className="flex flex-row justify-center">
          <p className='text-xs text-gray-500'>English </p>
          <svg
            className="-mr-1 h-4 w-4 text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <p className='text-xs text-gray-500'>&#9400; 2024 Instagram from Momen</p>
      </div>
    </div>
  )
}

export default Footer
