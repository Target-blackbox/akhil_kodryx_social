import { motion, AnimatePresence } from 'framer-motion'
import Skeleton from './Skeleton'

export const platformData = [
    {
        name: 'WhatsApp',
        color: '#03543F', // Deep Forest Green
        textColor: 'text-[#064e3b]',
        waveColor: 'bg-[#f0fdf4]',
        icon: 'whatsapp',
        accent: '#D1FAE5' // Soft Mint
    },
    {
        name: 'Instagram',
        color: '#4C1D95', // Deep Plum/Mulberry
        textColor: 'text-[#4c1d95]',
        waveColor: 'bg-[#f5f3ff]',
        icon: 'instagram',
        accent: '#EDE9FE' // Soft Lavender
    },
    {
        name: 'Telegram',
        color: '#1E3A8A', // Deep Midnight Blue
        textColor: 'text-[#1e3a8a]',
        waveColor: 'bg-[#eff6ff]',
        icon: 'telegram',
        accent: '#DBEAFE' // Soft Sky
    },
]

export const IconSvg = ({ type, className = '', color = 'currentColor' }) => {
    switch (type) {
        case 'whatsapp':
            return (
                <svg className={className} viewBox="0 0 24 24" fill={color}>
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217s.231.001.332.005c.101.004.24-.042.37.282.13.324.462 1.126.505 1.213.043.087.072.188.014.303-.058.116-.115.188-.188.274-.073.087-.154.195-.231.274-.076.082-.14.168-.063.303.076.134.341.563.731.911.503.448.921.586 1.131.671.21.085.332.072.419-.029.087-.101.37-.433.469-.578.099-.144.197-.121.332-.072.134.05.852.404 1.011.483.159.08.265.12.303.188.038.067.038.397-.106.802zm6.603-2.416c0 5.523-4.477 10-10 10-1.853 0-3.584-.506-5.064-1.385l-4.566 1.353 1.341-4.721C2.81 15.632 2 13.914 2 12 2 6.477 6.477 2 12 2c5.522 0 10 4.477 10 10z" />
                </svg>
            )
        case 'instagram':
            return (
                <svg className={className} viewBox="0 0 24 24" fill={color}>
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
            )
        case 'telegram':
            return (
                <svg className={className} viewBox="0 0 24 24" fill={color}>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1 .22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .33z" />
                </svg>
            )
        default:
            return null
    }
}

const PlatformSections = ({ isLoaded, activePlatform, setActivePlatform }) => {
    const activeData = platformData.find(p => p.name === activePlatform) || platformData[0]

    return (
        <section id="features" className="relative py-10 md:py-14 bg-white bg-grain overflow-hidden flex items-center justify-center">
            {/* Morphing Atmospheric Lighting */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeData.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 highlight-horizon -z-10"
                    style={{ '--horizon-color': activeData.color }}
                />
            </AnimatePresence>

            <div className="max-w-[1440px] mx-auto px-6 w-full relative z-20">
                {!isLoaded ? (
                    <div className="flex flex-col items-center gap-8">
                        <Skeleton className="h-4 w-32" />
                        <div className="flex gap-6">
                            <Skeleton variant="circle" className="w-20 h-20" />
                            <Skeleton variant="circle" className="w-20 h-20" />
                            <Skeleton variant="circle" className="w-20 h-20" />
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-10"
                        >
                            <h2 className="text-[12px] font-bold text-black/20 tracking-[0.4em] uppercase mb-3">Gateway</h2>
                            <p className="text-[17px] text-black/40 font-medium">Select a platform to reveal its power.</p>
                        </motion.div>

                        <div className="relative inline-flex flex-wrap justify-center gap-3 p-3 bg-white/40 backdrop-blur-3xl border border-white/60 rounded-[44px] shadow-[0_20px_50px_rgba(0,0,0,0.04)]">
                            {platformData.map((platform) => {
                                const isActive = activePlatform === platform.name
                                return (
                                    <button
                                        key={platform.name}
                                        onClick={() => setActivePlatform(platform.name)}
                                        className="relative group px-10 py-5 rounded-[36px] outline-none transition-all duration-500"
                                    >
                                        {isActive && (
                                            <motion.div
                                                layoutId="active-pill"
                                                className="absolute inset-0 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-black/5 rounded-[36px]"
                                                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                            />
                                        )}

                                        <div className="relative z-10 flex items-center gap-5">
                                            {/* App-style Icon Container */}
                                            <div className={`w-12 h-12 rounded-[22px] flex items-center justify-center transition-all duration-500 ${isActive ? 'scale-110 shadow-lg' : 'opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0'
                                                }`}
                                                style={{
                                                    background: isActive ? `linear-gradient(135deg, ${platform.color}, ${platform.color}dd)` : 'rgba(0,0,0,0.03)',
                                                }}>
                                                <IconSvg
                                                    type={platform.icon}
                                                    className="w-6 h-6"
                                                    color={isActive ? '#ffffff' : '#000000'}
                                                />
                                            </div>
                                            <span className={`text-[17px] font-black tracking-tight transition-all duration-500 ${isActive ? 'text-black translate-x-1' : 'text-black/20 group-hover:text-black/40'
                                                }`}>
                                                {platform.name}
                                            </span>
                                        </div>
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default PlatformSections
