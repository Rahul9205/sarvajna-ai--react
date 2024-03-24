import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {
    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}= useContext(Context)
  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative">
        <div className="flex items-center justify-between text-[22px] p-[20px] text-[#585858]">
            <p>Sarvajna AI</p>
            <img className="w-[40px] rounded-[50%]" src={assets.user_icon} alt="" />
        </div>
        <div className="max-w-[900px] m-auto">
            {!showResult?<>

            <div className="m-[50px] text-[56px] text-[#c4c7c5] font-[500] p-[20px]">
                <p><span className="bg-gradient-to-r from-custom-blue to-custom-red bg-clip-text text-transparent">Hello,I'm Sarvajna</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="grid grid-cols-auto-fill gap-[15px] p-[20px]">
                <div className="h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className="text-[#585858] text-[17px]">Suggest beautiful places to see on an upcoming road trip</p>
                    <img className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[20px]" src={assets.compass_icon} alt="" />
                </div>
                <div className="h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className="text-[#585858] text-[17px]">Briefly summarize this concept: urban planning</p>
                    <img className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[20px]" src={assets.bulb_icon} alt="" />
                </div>
                <div className="h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className="text-[#585858] text-[17px]">Brainstorm team bonding activities for our work retreat</p>
                    <img className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[20px]" src={assets.message_icon} alt="" />
                </div>
                <div className="h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer hover:bg-[#dfe4ea]">
                    <p className="text-[#585858] text-[17px]">Improve the readability of the following code</p>
                    <img className="w-[35px] p-[5px] absolute bg-white rounded-[20px] bottom-[10px] right-[20px]" src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            : <div className="pl-0 pr-[5%] max-h-[70vh] overflow-y-scroll no-scrollbar">
                <div className=" ml-[40px] mr-[0px] flex items-center gap-5">
                    <img className="w-10 rounded-[50%]" src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="flex items-start gap-5">
                    <img src={assets.gemini_icon} alt="" />
                    {loading ?
                    <div className="w-full flex flex-col gap-2.5 animate-wiggle">
                        <hr className="animate-wiggle rounded-md border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-5" />
                        <hr className="animate-wiggle rounded-md border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-5" />
                        <hr className=" animate-wiggle rounded-md border-none bg-[#f6f7f8] bg-gradient-to-r from-[#9ed7ff] via-[#ffffff] to-[#9ed7ff] bg-[length:800px_50px] h-5" />

                    </div>
                    :
                    <p className="text-lg font-[300] leading-7" dangerouslySetInnerHTML={{__html:resultData}}></p>

                    }
                    
                </div>
            </div>
            }
            <div className="absolute bottom-0 w-[100%] max-w-[900px] pl-[0px] pr-[20px] m-auto">
    <div className="flex flex-col md:flex-row items-center content-between gap-[20px] bg-[#f0f4f9] pl-[10px] pr-[20px] rounded-[50px]" >
        <input onChange={(e)=>(setInput(e.target.value))} value ={input}
        className="flex-1 bg-transparent  p-[8px] text-[18px] focus:outline-none focus:border-blue-500" type="text"  placeholder='Enter a prompt here'/>
        <div className="flex items-center gap-[15px]">
        <img className=" flex-row w-[20px] cursor-pointer" src={assets.gallery_icon} alt="" />
        <img className=" flex-row w-[20px] cursor-pointer" src={assets.mic_icon} alt="" />
        <img onClick={()=>onSent()} className=" flex-row w-[20px] cursor-pointer" src={assets.send_icon} alt="" />
        </div>
        
    </div>
    <p className=" text-[13px] ml-[15px] mr-auto text-center font-[300]">Sarvajna may display inccurate info,including about people,so double check its responses</p>
</div>

        </div>
    </div>
  )
}

export default Main