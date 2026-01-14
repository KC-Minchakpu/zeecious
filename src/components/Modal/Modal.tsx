'use client'

import React from 'react'
import styles from './Modal.module.css'

interface ModalProps {
  title?: string
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>

        {title && <h2 className={styles.title}>{title}</h2>}

        {children}
      </div>
    </div>
  )
}

export default Modal
