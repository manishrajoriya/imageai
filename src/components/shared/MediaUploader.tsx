import React from 'react'
import {toast, } from 'react-hot-toast'
import { CldUploadWidget } from 'next-cloudinary';

const MediaUploader = () => {
    
    const onUploadSuccessHandler = (result: any) => {

        console.log(result.info.secure_url)
        toast.success('Image uploaded successfully')
    }

    const onUploadErrorHandler = (error: any) => {
        console.log(error)
        toast.error('Error uploading image')
    }

  return (
    <CldUploadWidget
    uploadPreset='jsm_imaginai'
    options={{
        multiple: false, // Restrict to a single file upload
        
        resourceType: 'image', 
    }}
    onSuccess={onUploadSuccessHandler}
    onError={onUploadErrorHandler}
    />
  )
}

export default MediaUploader