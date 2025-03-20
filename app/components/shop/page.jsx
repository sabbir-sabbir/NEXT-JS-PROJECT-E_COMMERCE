export default function Shop(){
    return(
        <>
        <div className="w-full h-auto  my-3 py-6 px-12 grid grid-cols-1 md:grid-cols-2   ">
             <div className="flex flex-col justify-center items-start space-y-5 ">
               <div><h3 className="  text-2xl  md:text-4xl font-extrabold font-poppins tracking-wider text-[#90e0ef] " >100 + Exclusive <span className="text-[#ffbd00]">Shops</span> </h3></div>
               <div><p className=" text-[16px]  md:text-[18px] text-zinc-700 ">Find Your Best Choises With us</p></div>
               <div><p className=" w-[75%] text-[16px]  md:text-[18px] text-zinc-400 ">Lorem is is non. Assumenda tenetur voluptas non. Assumenda tenetur voluptas ipsum dolor sit amet consectetur, adipisicing elit. Totam ipsum is non. is non. Assumenda tenetur voluptas Assumenda tenetur is non. Assumenda tenetur voluptas voluptas dicta voluptates accusamus pariatur perfere  is non. Assumenda tenetur voluptasndis non. Assumenda tenetur voluptas eaque!</p></div>
               
               <div>
              <button className="w-28 h-8 rounded-md text-white bg-blue-500 hover:bg-gray-500">SHOP NOW</button>
               </div>
             </div>
             <div>
             <div><img className="" src="/shoping.svg" alt="gift" /></div>
             </div>
        </div>
        </>
    )
}
