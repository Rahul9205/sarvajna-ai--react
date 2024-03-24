import React, { useState } from 'react'
import {assets} from '../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const Sidebar = () => {
  const[extended,setExtended]=useState(false)
  const{onSent,prevPrompt,setRecentPrompt,newChat}=useContext(Context)

  const loadPrompt = async(prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }
  return (
    <>
      <div className="hidden md:flex md:min-h-screen flex-col justify-between bg-[#f0f4f9]">
        {/* top */}
        <div  className="">
            {/* menu */}
            <img onClick={()=>setExtended(!extended)}  className="w-5 block m-2.5 cursor-pointer" src={assets.menu_icon} alt=" menu_icon" />

            <div onClick={()=>newChat()} className="m-2.5 inline-flex items-center gap-2.5 px-2.5 py-3.5 bg-[#e6eaf1] rounded-2xl text-sm text-grey cursor-pointer">
                {/* new chat */}
                <img className="w-5" src={assets.plus_icon} alt=" plus_icon" />
                {extended?<p>New Chat</p>:null}
            </div>
            {extended?
            <div className="flex flex-col animate-fadeIn">
                {/* recent */}
                <p className="m-5 ">Recent</p>
                {prevPrompt.map((item,index)=>{
                  return(

                    <div onClick={()=>loadPrompt(item)} className="flex items-center gap-2.5 p-2.5 pr-10 rounded-3xl text-[#282828] cursor-pointer hover:bg-[#e2e6eb]">
                    {/* message_icon */}
                    <img className="w-5" src={assets.message_icon} alt="" />
                    <p>{item.slice(0,18)}...</p>
                   </div>

                  )
                })}
                
            </div>: null}
        </div>
        <div className="flex flex-col  align-middle m-2.5 p-2.5">
            {/* bottom */}
            <div className="flex flex-row items-center m-2.5 cursor-pointer hover:bg-[#e2e6eb] rounded-3xl ">
            {/* bottom-item ,recent entry */}
                <img className="w-8 m-2.5 " src={assets.question_icon} alt="" />
                {extended?
                <p>{"  "} Help</p>:null
                }
            </div>
            <div className=" flex flex-row items-center  m-2.5 cursor-pointer hover:bg-[#e2e6eb] rounded-3xl" >
            {/* bottom-item ,recent entry */}
                <img className="w-8 m-2.5" src={assets.history_icon} alt="" />
                {extended?<p>Activity</p>:null}
            </div>
            <div className=" flex flex-row items-center m-2.5 cursor-pointer hover:bg-[#e2e6eb] rounded-3xl" >
            {/* bottom-item ,recent entry */}
                <img className="w-8 m-2.5" src={assets.setting_icon} alt="" />
                {extended?<p>Settings</p>:null}
            </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar;

