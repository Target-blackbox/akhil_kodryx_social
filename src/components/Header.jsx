import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Skeleton from './Skeleton'

const Header = ({ isLoaded, onLogin, onSignup }) => {
    const [scrolled, setScrolled] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState(null)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-md' : 'bg-white'
                }`}
        >
            <div className="max-w-[1440px] mx-auto px-12 py-0">
                <div className="flex items-center justify-between h-[86px]">
                    {/* Logo */}
                    <div className="flex items-center">
                        {!isLoaded ? (
                            <Skeleton className="h-[50px] w-[160px]" />
                        ) : (
                            <a href="#home" className="block outline-none">
                                <img
                                    src="/kodryx.webp"
                                    alt="Kodrix"
                                    className="h-[60px] w-auto object-contain transition-transform hover:scale-105"
                                />
                            </a>
                        )}
                    </div>

                    {/* Navigation - pill shaped */}
                    <nav
                        className="flex items-center gap-1.5 bg-[#F8F8F8] px-3 py-1.5 rounded-full border border-[#D9D9D9]"
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {!isLoaded ? (
                            <div className="flex gap-8 items-center px-5 py-1.5">
                                <Skeleton className="h-4 w-12" />
                                <Skeleton className="h-4 w-16" />
                                <Skeleton className="h-4 w-20" />
                                <Skeleton className="h-4 w-12" />
                            </div>
                        ) : (
                            <>
                                {['Home', 'Features', 'How it Works'].map((item, index) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        className="relative px-5 py-1.5 text-[14px] font-medium"
                                    >
                                        <motion.span
                                            animate={{
                                                scale: hoveredIndex === index ? 1.05 : 1,
                                                color: hoveredIndex === index ? '#2F65E3' : 'rgba(0, 0, 0, 0.7)'
                                            }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: 400,
                                                damping: 30
                                            }}
                                            className="relative z-10 inline-block"
                                        >
                                            {item}
                                        </motion.span>
                                        {hoveredIndex === index && (
                                            <motion.div
                                                layoutId="nav-pill"
                                                className="absolute inset-0 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] backdrop-blur-md rounded-full z-0"
                                                initial={false}
                                                animate={{ opacity: 1 }}
                                                exit={{ opacity: 0 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 350,
                                                    damping: 30,
                                                    mass: 1
                                                }}
                                            />
                                        )}
                                    </a>
                                ))}
                            </>
                        )}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                        {!isLoaded ? (
                            <div className="flex gap-3">
                                <Skeleton className="h-10 w-24" />
                                <Skeleton className="h-10 w-32" />
                            </div>
                        ) : (
                            <>
                                <button
                                    onClick={onLogin}
                                    className="px-5 py-2.5 text-[14px] font-medium text-black/70 hover:text-[#2F65E3] transition-colors duration-200 border border-[#D9D9D9] rounded-lg cursor-pointer"
                                >
                                    Login
                                </button>
                                <button
                                    onClick={onSignup}
                                    className="px-5 py-2.5 text-[13px] font-semibold text-white bg-[#2F65E3] rounded-lg hover:bg-[#2555c7] transition-all duration-200"
                                >
                                    Start for free
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </motion.header>
    )
}

export default Header
