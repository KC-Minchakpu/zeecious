'use client'

import { useState, FormEvent } from 'react'
import Image, { StaticImageData } from 'next/image'
import { FaDownload, FaSearch } from 'react-icons/fa'
import { heroAssets } from '@/assets/pseudodata'
import styles from './Hero.module.css'

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState<string>('')

  const { heroImage, orbitImages } = heroAssets as {
    heroImage: StaticImageData
    orbitImages: StaticImageData[]
  }

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />

      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.left}>
          <h1 className={styles.title}>
            Delicious Meals, Delivered <br />
            <span>Right to Your Door!</span>
          </h1>

          <p className={styles.description}>
            “Our expert chefs and dedicated delivery team work together to serve
            you the best. Every meal is freshly prepared, carefully packaged,
            and delivered straight to your door—hot, delicious, and right on
            time.”
          </p>

          {/* SEARCH FORM */}
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Find your next favorite meal..."
            />
            <button type="submit">Search</button>
          </form>

          {/* ACTION BUTTONS */}
          <div className={styles.actions}>
            <button className={styles.downloadBtn}>
              <FaDownload />
              Download Our App
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className={styles.right}>
          {/* ORBIT WRAPPER */}
          <div className={styles.orbitWrapper}>
            {/* MAIN IMAGE */}
            <div className={styles.mainImage}>
              <Image
                src={heroImage}
                alt="Chef Abigail"
                fill
                className={styles.heroImg}
                priority
              />
            </div>

            {/* ORBITING IMAGES */}
            {orbitImages.map((img: StaticImageData, index: number) => (
              <div
                key={index}
                className={`${styles.orbit} ${styles[`delay${index}`]}`}
              >
                <Image
                  src={img}
                  alt={`Orbit ${index + 1}`}
                  fill
                  sizes="120px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
