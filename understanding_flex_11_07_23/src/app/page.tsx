import Image from 'next/image'

export default function Home() {
  return (
    // <div className='m-16 flex flex-wrap h-96 items-center justify-center 
    // border-4 border-red-600 '> 
    //   <div className="p-8 h-20 w-30 bg-lime-600 text-center"> Box 1 </div> 
    //   <div className="p-8 h-20 w-30 bg-slate-600 text-center"> Box 2 </div>
    //   <div className="p-8 h-20 w-30 bg-blue-600 text-center"> Box 3 </div>
    //   <div className="p-8 h-20 w-30 bg-orange-600 text-center"> Box 4 </div>
    // </div>

    <div className='m-16 flex flex-wrap h-96 items-center justify 
     justify-between border-4 border-red-600 '>
      <div className="ml-4 p-8 h-20 w-30 bg-lime-600 text-center"> Box 1 </div>
      <div className="p-8 h-20 w-30 bg-slate-600 text-center"> Box 2 </div>
      <div className="p-8 h-20 w-30 bg-blue-600 text-center"> Box 3 </div>
      <div className="mr-4 p-8 h-20 w-30 bg-orange-600 text-center"> Box 4 </div>
    </div>


  )
}

