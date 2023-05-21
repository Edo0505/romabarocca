import React from 'react';
import {VscArrowSmallLeft} from 'react-icons/vsc';
import { useGlobalContext } from '../context';
import {AiFillGithub} from 'react-icons/ai';
import {FaSchool} from 'react-icons/fa';
const linkSpotify='https://open.spotify.com/playlist/4DvteColbVCrs7iIgc4r6x?si=yPwnUK02TG67O3qpR2-yNw&utm_source=copy-link&nd=1';
const SideBar = () => {
    const {isSidebarOpen,closeSidebar} = useGlobalContext();
    const link1='https://github.com/Edo0505/React-Scuola-sitoscuola';
    const link2='https://www.iisenzoferrari.edu.it/';
    return (
    <aside className={`${isSidebarOpen ? 'sidebar show-sidebar': 'sidebar'}`}>
      <button onClick={closeSidebar}>
        <VscArrowSmallLeft className='transition ease-in-out delay-150 scale-150 hover:rotate-90'/>
      </button>
      <section className='grid justify-center mt-20'>
            <ul>
            <a href="Audio guide Chiesa del Gesù.pdf" download='Audio-guide'><li className='transition ease-in-out rounded-lg p-7 cursor-pointer mx-10 hover:shadow-2xl hover:text-yellow-400'>Audio-guide</li></a>
                <a href={linkSpotify} target='_blank' rel="noreferrer"><li className='transition ease-in-out rounded-lg p-7 cursor-pointer mx-10 hover:shadow-2xl hover:text-green-700'>Spotify</li></a>
                <a href="Video-Riassunto.mp4" download='Video-Riassunto.mp4'><li className='transition ease-in-out rounded-lg p-7 cursor-pointer mx-10 hover:shadow-2xl hover:text-red-600'>Video-Riassunto</li></a>
            </ul>
            <div className='mx-auto flex mt-28'>
                <a href={link1} target='_blank' rel="noreferrer"><AiFillGithub className='transition ease-in-out mx-10 scale-150 cursor-pointer hover:-translate-y-2'/></a> 
                <a href={link2} target='_blank' rel="noreferrer"><FaSchool className='transition ease-in-out mx-10 scale-150 cursor-pointer hover:-translate-y-2'/></a> 
            </div>
        </section>
    </aside>
  )
}

export default SideBar;