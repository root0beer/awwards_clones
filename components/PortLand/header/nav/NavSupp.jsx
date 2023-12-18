import React, { useState } from 'react'
import styles from "./Nav.module.scss";
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from '@/components/Portland/header/nav/link/Link';
import Curve from '@/components/Portland/header/nav/curve/Curve';
import Footer from '@/components/Portland/header/nav/footer/Footer';

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
]

export default function NavSupp() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={styles.menu}
      >
       <div className={styles.body}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return <Link 
                        key={index} 
                        data={{...data, index}} 
                        isActive={selectedIndicator == data.href} 
                        setSelectedIndicator={setSelectedIndicator}>
                        </Link>
                      })
                    }
            </div>
            <Footer />
        </div>
        <Curve />
    </motion.div>
  )
}