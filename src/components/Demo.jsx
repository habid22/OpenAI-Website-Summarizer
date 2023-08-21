import { useState, useEffect } from 'react'
import {copy, linkIcon, loader, tick} from '../assets/assets';

const Demo = () => {
  return (
   <section className='mt-16 w-full max-w-xl'>
    {/* Search */}
    <div className='flex flex-col w-full gap-2'>
      <form className= "relative flex justify-center items-center"
       onSubmit={ () => {}}>

        <img src={linkIcon} alt="link_icon" className='absolute left-0 my-2 ml-3 w-5'/>

        <input type="text" 
        placeholder="Paste a URL" value="" 
        onChange={() => {}}
        className= "url_input peer"
        style={{ backgroundColor: '#22303C',  borderColor: 'white' }}

        />

        <button type="submit" className="submit_btn peer-focus:border-gray-700 per-focus:text-gray-700"
        >
          ⤶

          </button>

      </form>
      {/* Browser URL History*/}
    </div>
    {/* Display Results */}


   </section>
  )
}

export default Demo
