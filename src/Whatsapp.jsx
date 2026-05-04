import React from 'react';
import Chat from './Chat';
import { chats } from './data'; // 👈 IMPORTANT

const Whatsapp = () => {
  return (
    <div className="w-full xl:w-[30%] md:w-[40%] sm:w-[60%] p-10 shadow-xl mx-auto">
      
      {chats.map((item) => (
        <Chat
          key={item.id}
          name={item.name}
          message={item.message}
          time={item.time}
          image={item.image}
        />
      ))}

    </div>
  );
};

export default Whatsapp;