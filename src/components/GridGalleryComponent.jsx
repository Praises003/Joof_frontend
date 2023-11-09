import React from 'react'
import ImageGallery from 'react-image-gallery'

const GridGalleryComponent = ({ ...props }) => {
    
  return (
    <div>
        <ImageGallery fullscreen={true} {...props} />
  
    </div>
  )
}

export default GridGalleryComponent