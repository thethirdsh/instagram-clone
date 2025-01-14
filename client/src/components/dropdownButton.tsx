import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react'
import { useState } from 'react'
import { LuAlignJustify } from 'react-icons/lu'

export default function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false)

  if(!isOpen) console.log('not open')

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/authentication/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        // Handle successful logout (e.g., redirect to login page)
        window.location.href = '/login'
        console.log('Logged out successfully')
      } else {
        console.error('Logout failed')
      }
    } catch (error) {
      console.error('Error logging out:', error)
    }
  }

  const handleAction = (key: React.Key) => {
    if (key === 'log-out') {
      handleLogout()
    }
    setIsOpen(false) // Close the dropdown
  }

  return (
    <div className="flex w-full align-end">
      <Dropdown>
        <DropdownTrigger>
          <button className="flex items-center w-full h-11 rounded-lg px-4 hover:bg-gray-200">
            <LuAlignJustify className="text-3xl" />
            <p className="text-xs text-black md:text-sm lg:text-base pl-4 hidden lg:flex">
              More
            </p>
          </button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions" onAction={handleAction}>
          <DropdownItem key="new">New file</DropdownItem>
          <DropdownItem key="copy">Copy link</DropdownItem>
          <DropdownItem key="edit">Edit file</DropdownItem>
          <DropdownItem key="log-out">Log out</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}
