'use client'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react'
import { FaRegSquarePlus } from 'react-icons/fa6'
import Image from 'next/image'

export default function Upload() {
  const { userId } = useSelector((state: RootState) => state.user)
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  //const [caption, setCaption] = useState<string>('')
  const [file, setFile] = useState<File | null>(null)
  const [uploadUrl, setUploadUrl] = useState<string | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
    setFile(selectedFile)

    if (selectedFile) {
      const reader = new FileReader()
      reader.onload = () => setPreviewUrl(reader.result as string)
      reader.readAsDataURL(selectedFile)
    } else {
      setPreviewUrl(null)
    }
  }

  const handlePost = async () => {
    if (!file) return alert('Please select a file')

    const formData = new FormData()
    formData.append('file', file)

    try {
      const base64File = await toBase64(file) // Convert file to Base64

      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ file: base64File }),
      })

      const data = await res.json()
      if (res.ok) {
        setUploadUrl(data.url)
        console.log(uploadUrl)
        await savePostToDatabase(data.url, 'caption')
      } else {
        console.error(data.error)
        alert('Upload failed')
      }
    } catch (err) {
      console.error('Error uploading file:', err)
    } finally {
      setFile(null)
      setPreviewUrl(null)
      onOpenChange()
    }
  }

  const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result as string)
      reader.onerror = (error) => reject(error)
    })
  }

  const savePostToDatabase = async (imageUrl: string, caption: string) => {
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        imageUrl,
        caption,
      }),
    })

    if (response.ok) {
      alert('Post created successfully')
    } else {
      alert('Failed to create post')
    }
  }

  return (
    <>
      <button
        className="pl-3 pt-2 pb-2 mb-1 mt-1 flex flex-row items-center rounded-lg hover:bg-gray-200"
        onClick={onOpen}
      >
        <FaRegSquarePlus className="text-3xl" />
        <p className="text-xs text-black md:text-sm lg:text-base pl-4 hidden lg:flex">
          Create
        </p>
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <input type="file" onChange={handleFileChange} />
                {previewUrl && (
                  <div className="mt-4">
                    <Image
                      src={previewUrl}
                      width={300}
                      height={300}
                      alt="Preview"
                      className="w-full h-auto rounded-md"
                    />
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handlePost}>
                  Post
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
