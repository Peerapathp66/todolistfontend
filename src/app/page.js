'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { useState, useEffect, Fragment } from 'react'


export default function Home() {
  const router = useRouter()

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const [nameError, setNameError] = useState(null)
  const [passwordError, setPasswordError] = useState(null)

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = () => {
    if (name === "") {
      setNameError('กรุณากรอก name')
      return
    }

    if (password === "") {
      setPasswordError('กรุณากรอก password')
      return
    }

    router.push('/page2')
  }

  return (
    <div className='boxwhite'>
      <div style={{ textAlign: 'center' }}>
        <h1>Login</h1>
        <label>
          <input
            type="text"
            style={{ color: 'black', margin: 'auto', display: 'block', marginBottom: '10px' }}
            value={name}
            onChange={handleNameChange}
            placeholder="username"
          />
        </label>
        {nameError == null ? null : nameError}

        <label>
          <input
            type="password"
            style={{ color: 'black', margin: 'auto', display: 'block', marginBottom: '10px', textAlign: 'center' }}
            value={password}
            onChange={handlePasswordChange}
            placeholder="password"
          />
        </label>
        {passwordError == null ? null : passwordError}

        <button onClick={handleSubmit} style={{ display: 'block', margin: 'auto' }}>
          Login
        </button>

        <a href='/page2' className='last-password'>
          Last your password?
        </a>
      </div>
    </div>
  );
}