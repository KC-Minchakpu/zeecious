'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { GiChefToque } from 'react-icons/gi'
import { HiOutlineShoppingCart, HiMenu, HiX } from 'react-icons/hi'
import { FaHome, FaStar, FaPhoneAlt } from 'react-icons/fa'
import { MdRestaurantMenu } from 'react-icons/md'
import styles from './Navbar.module.css'
import { useCart } from '@/contexts/CartContext'
import { useAuth } from '@/contexts/AuthContext'
import Login from '../Login/Login'

const Navbar: React.FC = () => {
  const router = useRouter()
  const pathname = usePathname()
  const { totalItems } = useCart()
  const { isAuthenticated, logout } = useAuth()

  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home', icon: <FaHome /> },
    { href: '/menu', label: 'Menu', icon: <MdRestaurantMenu /> },
    { href: '/about', label: 'About', icon: <FaStar /> },
    { href: '/contact', label: 'Contact', icon: <FaPhoneAlt /> },
  ]

  const handleLogout = () => {
    logout()
    setIsOpen(false)
    router.push('/')
  }

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <Link
              href="/"
              className={styles.logo}
              onClick={() => setIsOpen(false)}
            >
              <GiChefToque size={32} color="#fbbf24" />
              <span className={styles.logoText}>Zeecious Food</span>
            </Link>

            <div
              className={`${styles.navLinks} ${isOpen ? styles.navActive : ''}`}
            >
              {navLinks.map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`${styles.link} ${
                    pathname === href ? styles.linkActive : styles.linkInactive
                  }`}
                >
                  {icon}
                  {label}
                  <span
                    className={`${styles.underline} ${
                      pathname === href ? styles.underlineActive : ''
                    }`}
                  />
                </Link>
              ))}

              <div className={styles.mobileOnlyBtn}>
                {!isAuthenticated ? (
                  <button
                    className={styles.loginBtn}
                    onClick={() => {
                      router.push('/login')
                      setIsOpen(false)
                    }}
                  >
                    Login
                  </button>
                ) : (
                  <button className={styles.loginBtn} onClick={handleLogout}>
                    Logout
                  </button>
                )}
              </div>
            </div>

            <div className={styles.actions}>
              <div
                className={styles.cart}
                onClick={() => {
                  router.push('/cart')
                  setIsOpen(false)
                }}
              >
                <HiOutlineShoppingCart />
                {totalItems > 0 && (
                  <span className={styles.cartBadge}>{totalItems}</span>
                )}
              </div>

              <div className={styles.desktopBtn}>
                {!isAuthenticated ? (
                  <button
                    className={styles.loginBtn}
                    onClick={() => router.push('/login')}
                  >
                    Login
                  </button>
                ) : (
                  <button className={styles.loginBtn} onClick={handleLogout}>
                    Logout
                  </button>
                )}
              </div>

              <button
                className={styles.hamburger}
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {pathname === '/login' && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <button
              className={styles.modalClose}
              onClick={() => router.push('/')}
            >
              &times;
            </button>
            <h2 className={styles.modalTitle}>Foodie-Frenzy</h2>
            <Login onLoginSuccess={() => {}} onClose={() => router.push('/')} />
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
