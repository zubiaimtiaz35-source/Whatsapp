import React from 'react'

function Chat({ name, image, time, message, total }) {
  return (
    <div className="flex justify-between items-center p-3 shadow my-3">
      
      {/* LEFT SIDE */}
      <div className="flex gap-3 items-center">
        
        <img 
          src={image} 
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <h5 className="font-semibold">{name}</h5>
          <p className='text-gray-400 text-sm'>{message}</p>
        </div>
        
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col items-end gap-1">
        <p className='text-gray-500 text-sm'>{time}</p>

        {/* 🟢 unread dot */}
        <div className="w-5 h-5 flex justify-center items-center text-xs text-white font-semibold bg-green-600 rounded-full">
          {total}
        </div>
      </div>

    </div>
  )
}

export default Chat;