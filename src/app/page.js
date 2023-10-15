'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect, Fragment } from 'react'

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = () => {
    if (name === "") {
      setNameError('กรุณากรอก name');
      return;
    }

    if (password === "") {
      setPasswordError('กรุณากรอก password');
      return;
    }

    router.push("/page2?username=" + name);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-500">
      <div className="bg-white p-8 rounded-md">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Login</h1>
          <label className="block mb-4">
            <input
              type="text"
              className="bg-gray-300 p-2 rounded-md w-72 mx-auto"
              value={name}
              onChange={handleNameChange}
              placeholder="username"
            />
          </label>
          {nameError && <div className="text-red-500 mb-4">{nameError}</div>}
          <label className="block mb-4">
            <input
              type="password"
              className="bg-gray-300 p-2 rounded-md w-72 mx-auto"
              value={password}
              onChange={handlePasswordChange}
              placeholder="password"
            />
          </label>
          {/* {passwordError && <div className="text-red-500 mb-4">{passwordError}</div>} */}
          {passwordError ? <div className="text-red-500 mb-4">{passwordError}</div> : null}

          <button
            className="bg-blue-500 text-white p-4 rounded-md w-72 mx-auto mb-4"
            onClick={handleSubmit}
          >
            Login
          </button>
          <a href='/page2' className='block text-center'>Last your password?</a>
        </div>
      </div>
    </div>
  );
}

