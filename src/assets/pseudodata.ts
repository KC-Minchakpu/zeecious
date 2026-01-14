import { StaticImageData } from 'next/image'
import { FaFacebook, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'
import { FiUser, FiSmartphone, FiMail, FiHome } from 'react-icons/fi'
import { FaUtensils } from 'react-icons/fa'

import HeroImage from './heroImage.png'
import Image1 from './Image1.png'
import Image2 from './Image2.png'
import Image3 from './Image3.png'
import Image4 from './Image4.png'

// FOOTER
export const socialIcons = [
  {
    icon: FaFacebook,
    link: 'https://www.facebook.com/octatesystems',
    color: '#3b5998',
    label: 'Facebook',
  },
  {
    icon: FaInstagram,
    link: 'https://www.instagram.com/octatesystems',
    color: '#E1306C',
    label: 'Instagram',
  },
  {
    icon: FaXTwitter,
    link: 'https://x.com/octatesystems',
    color: '#000',
    label: 'X',
  },
  {
    icon: FaYoutube,
    link: 'https://youtube.com/octatesystems',
    color: '#FF0000',
    label: 'Youtube',
  },
]

// CONTACT
export const contactFormFields = [
  {
    label: 'Full Name',
    name: 'name',
    type: 'text',
    placeholder: 'Enter your full name',
    Icon: FiUser,
  },
  {
    label: 'Phone Number',
    name: 'phone',
    type: 'tel',
    placeholder: '+91 12345 67890',
    pattern: '[+]{0,1}[0-9]{10,13}',
    Icon: FiSmartphone,
  },
  {
    label: 'Email Address',
    name: 'email',
    type: 'email',
    placeholder: 'your.email@example.com',
    Icon: FiMail,
  },
  {
    label: 'Address',
    name: 'address',
    type: 'text',
    placeholder: 'Enter your delivery address',
    Icon: FiHome,
  },
  {
    label: 'Dish Name',
    name: 'dish',
    type: 'text',
    placeholder: 'Enter dish name (e.g., Butter Chicken)',
    Icon: FaUtensils,
  },
]

// HERO
export const heroAssets: {
  heroImage: StaticImageData
  orbitImages: StaticImageData[]
} = {
  heroImage: HeroImage,
  orbitImages: [Image1, Image2, Image3, Image4],
}
