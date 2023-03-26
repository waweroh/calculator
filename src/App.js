import './App.css';
import { useState } from 'react';

function App() {
  const[result, setResult] = useState("0")

  return (
    <div className='App w-full h-full flex justify-center bg-cyan-300'>
      <div className='w-1/3 h-1/3 bg-black text-blue-300 rounded-lg mt-12 p-2'>
        <div className='text-right mr-12 mt-20 mb-10 text-3xl'>{result}</div>
        <div className='grid grid-rows-4 grid-cols-4 gap-2'>
        <button className='w-20 h-20 rounded-full bg-gray-500 text-gray-900 font-bold'>AC</button>
          <button className='w-20 h-20 rounded-full bg-gray-500 text-gray-900 font-bold'>+/-</button>
          <button className='w-20 h-20 rounded-full bg-gray-500 text-gray-900 font-bold'>%</button>
          <button className='w-20 h-20 rounded-full bg-orange-500'>/</button>
          <button className='w-20 h-20 rounded-full bg-gray-900'>7</button>
          <button className='w-20 h-20 rounded-full bg-gray-900'>8</button>
          <button className='w-20 h-20 rounded-full bg-gray-900'>9</button>
          <button className='w-20 h-20 rounded-full bg-orange-500'>x</button>
          <button className='w-20 h-20 rounded-full bg-gray-900'>4</button>
          <button className='w-20 h-20 rounded-full bg-gray-900'>5</button>
          <button className='w-20 h-20 rounded-full bg-gray-900'>6</button>
          <button className='w-20 h-20 rounded-full bg-orange-500'>-</button>
          <button className='w-20 h-20 rounded-full bg-gray-900'>1</button>
          <button className='w-20 h-20 rounded-full bg-gray-900'>2</button>
          <button className='w-20 h-20 rounded-full bg-gray-900'>3</button>
          <button className='w-20 h-20 rounded-full bg-orange-500'>+</button>
          <button className='w-20 h-20 rounded-full bg-gray-900'>0</button>
          <button className='w-20 h-20 rounded-full bg-gray-900'>turn</button>
          <button className='w-20 h-20 rounded-full bg-gray-900'>.</button>
          <button className='w-20 h-20 rounded-full bg-orange-500'>=</button>

        </div>
        
      </div>
    </div>
    
  );
}

export default App;
