'use client'

import React from 'react'

interface LoginProps {
  onLoginSuccess: () => void
  onClose: () => void
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // fake auth
    localStorage.setItem('loginData', 'true')
    onLoginSuccess()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" required />
      <input type="password" placeholder="Password" required />

      <button type="submit">Login</button>
      <button type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  )
}

export default Login
