import { LuMail } from "react-icons/lu";
import { MdFileDownload } from "react-icons/md";

export default function Contact() {
    return (
        <section className="container">
            <h3 className="font-semibold text-3xl pt-6 mb-6" id="contact">Contact</h3>
            <p>Une opportunité d&apos;alternance ?</p>
            <div className="flex flex-col gap-8 my-8">
                <div className="flex flex-row gap-x-3">
                    <LuMail className="text-[24px] aria-hidden"></LuMail>
                    <p className="underline"><span className="blockspam aria-hidden hidden">Span block</span>ludivine.veloso@laposte.net</p>
                </div>
                <div>
                <div className=" border border-gray-700 bg-[#060a12] rounded-full hover:scale-110 transition-all flex flex-row p-2  cursor-pointer w-[112px]">
                    <MdFileDownload className="text-[24px] text-white aria-hidden ">
                    </MdFileDownload>
                    <a id="cv" href="https://drive.google.com/file/d/1wJgsG-5BMWazsAWnZqepfC91OfsIIk6X/view?usp=sharing" target="_blank" className=" text-white">Mon CV</a>
                </div>
                </div>
            </div>
        </section>
    )
}
