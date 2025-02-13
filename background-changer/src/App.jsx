import { useState } from "react";

function App() {
  const [color, setColor] = useState("gray-800")

  return (
    <div className={`flex justify-center items-center bg-${color} h-screen`}>
      <div className="mt-[500px] w-[800px] flex justify-evenly">
        <button className="bg-red-600 w-[80px] border border-gray-800 rounded-xl" onClick={() => {
          setColor("red-600");
        }}>Red</button>
        <button className="bg-yellow-600 w-[80px] border border-gray-800 rounded-xl" onClick={() => {
          setColor("yellow-600")
        }}>Yellow</button>
        <button className="bg-black text-white w-[80px] border border-gray-800 rounded-xl" onClick={() => {
          setColor("black")
        }}>Black</button>
        <button className="bg-purple-600 w-[80px] border border-gray-800 rounded-xl" onClick={() => {
          setColor("purple-600")
        }}>Purple</button>
        <button className="bg-green-600 w-[80px] border border-gray-800 rounded-xl" onClick={() => {
          setColor("green-600")
        }}>Green</button>
        <button className="bg-blue-600 w-[80px] border border-gray-800 rounded-xl" onClick={() => {
          setColor("blue-600")
        }}>Blue</button>
        <button className="bg-amber-600 w-[80px] border border-gray-800 rounded-xl" onClick={() => {
          setColor("amber-600")
        }}>Default</button>
      </div>
    </div>
  )
}

export default App
