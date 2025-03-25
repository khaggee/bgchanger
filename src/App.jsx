import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div className="w-100% h-screen duration-300"
    style={{backgroundColor: color}}>

    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadwo-lg bg-white px-3 py-2 rounded-3xl'>
      <button onClick={ () => setcolor("blue") } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}}>BLUE</button>
      <button onClick={ () => setcolor("green") } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"GREEN"}}>GREEN</button>
      <button onClick={ () => setcolor("yellow") } className='outline-none px-4 py-1 rounded-full text-BLACK shadow-lg' style={{backgroundColor:"yellow"}}>Yellow</button>
      <button onClick={ () => setcolor("orange") } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"orange"}}>ORANGE</button>
      <button onClick={ () => setcolor("RED") } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"RED"}}>RED</button>
      <button onClick={ () => setcolor("maroon") } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"maroon"}}>MAROON</button>
      <button onClick={ () => setcolor("WHEAT") } className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"WHEAT"}}>WHEAT</button>
      <button onClick={ () => setcolor("BROWN") } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"BROWN"}}>BROWN</button>
      <button onClick={ () => setcolor("black") } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}}>BLACK</button>
      <button onClick={ () => setcolor("AQUA") } className='outline-none px-4 py-1 rounded-full text-black shadow-lg' style={{backgroundColor:"AQUA"}}>AQUA</button>
      <button onClick={ () => setcolor("darkblue") } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"darkblue"}}>DARKBLUE</button>
      <button onClick={ () => setcolor("PURPLE") } className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"PURPLE"}}>PURPLE</button>
      </div>
    </div>
    </div>


      
  )
}

export default App
