import React from 'react'

const ProfileImage = ({ size, src }) => {
    console.log(size);
    return (
        <div className=''>
            <img src={src} alt='' style={{ width: size, height: 'auto' }} />
        </div>
    )
}

export default ProfileImage
