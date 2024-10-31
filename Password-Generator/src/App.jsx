import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllow, setnumberAllow] = useState(false)
  const [charAllow, setcharAllow] = useState(false)
  const [password, setpassword] = useState("")

  //using useRef
  const passwordRef = useRef(null)

  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num = "0123456789"
    let char = "(){}[]!@#$%^&*+_-"

    if (numberAllow) str+= "0123456789"
    if (charAllow) str+= "(){}[]!@#$%^&*+_-"

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
      
    }
    setpassword(pass)
  },[length, numberAllow, charAllow, setpassword])

  const copyPasswordToClickboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    PasswordGenerator()
  }, [length, numberAllow, charAllow, PasswordGenerator])

  return (
    <>

    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800  text-orange-500">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input ref={passwordRef} type="text" value={password} className='outline-none w-full py-1 px-3' placeholder="Password" readOnly />
          <button onClick={copyPasswordToClickboard} className='bg-blue-800 outline-none text-white px-3 text-lg'>copy</button>
      </div>
      <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1'>
              <input type="range" min={8} max={20} value={length} className='cursor-pointer' onChange={(e) => {setlength(e.target.value) }} />
              <label > length: {8}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked= {numberAllow} id='numberInput' className='cursor-pointer' onChange={() => {setnumberAllow((prev) => !prev)}} />
            <label htmlFor='numberInput' className='text-white'> Numbers </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked= {numberAllow} id='numberInput' className='cursor-pointer' onChange={() => {setnumberAllow((prev) => !prev)}} />
            <label htmlFor='numberInput' className='text-white'> Characters </label>
          </div>
      </div>

    </div>
    </>
  )
}

export default App
