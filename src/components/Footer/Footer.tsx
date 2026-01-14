'use client'

import React from 'react'
import Link from 'next/link'
import { GiChefToque } from 'react-icons/gi'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa'
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from 'react-icons/hi'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Section */}
          <div className={styles.section}>
            <Link href="/" className={styles.logo}>
              <GiChefToque size={32} color="#fbbf24" />
              <span className={styles.logoText}>Zeecious Food</span>
            </Link>
            <p className={styles.description}>
              Bringing the finest flavors to your doorstep. Experience the magic
              of authentic cuisine prepared by world-class chefs.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon}>
                <FaFacebookF />
              </a>
              <a href="#" className={styles.socialIcon}>
                <FaTwitter />
              </a>
              <a href="#" className={styles.socialIcon}>
                <FaInstagram />
              </a>
              <a href="#" className={styles.socialIcon}>
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.list}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/menu">Our Menu</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Contact Us</h3>
            <ul className={styles.list}>
              <li className={styles.contactItem}>
                <HiOutlineLocationMarker className={styles.icon} />
                <span>123 Foodie Street, Flavour Town</span>
              </li>
              <li className={styles.contactItem}>
                <HiOutlinePhone className={styles.icon} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className={styles.contactItem}>
                <HiOutlineMail className={styles.icon} />
                <span>hello@zeecious.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.copyrightInfo}>
            <p>&copy; {currentYear} Zeecious Food. All rights reserved.</p>
            <p className={styles.developer}>
              Designed & Developed By{' '}
              <a
                href="https://www.linkedin.com/in/kevin-cross-minchakpu-7897379a"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.developerLink}
              >
                <span className={styles.name}>Kevin Cross Minchakpu</span>
              </a>
            </p>
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
