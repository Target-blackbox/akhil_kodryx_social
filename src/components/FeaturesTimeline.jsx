import { motion, useInView, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import Skeleton from './Skeleton'
import { platformData, IconSvg } from './PlatformSections'

const platformFeatures = {
    'WhatsApp': [
        {
            title: 'Single file forwarding',
            description: 'Send PDF, images, or documents via WhatsApp instantly. Perfect for invoices, reports, and confirmations. Reach your customers where they are most active.',
            image: '/whatsapp image_website.png',
            color: 'transparent',
            blob: 'bg-blob-green',
            accent: '#037312',
            hasBg: false
        },
        {
            title: 'Bulk WhatsApp Messaging',
            description: 'Send messages to multiple contacts using Excel/CSV. Ideal for marketing campaigns, newsletters, and announcements. Scale your outreach effortlessly.',
            image: '/bulk_messages.png',
            color: 'transparent',
            blob: 'bg-blob-pink',
            accent: '#C62828',
            hasBg: false
        },
        {
            title: 'Auto-Reply Chatbot',
            description: 'Automatically respond to incoming messages with keyword-based rules. Great for FAQs, lead qualifying, and 24/7 customer support.',
            image: '/auto_reply chatbot.png',
            color: 'transparent',
            blob: 'bg-blob-blue',
            accent: '#004CFD',
            hasBg: false,
            showBlob: false
        },
    ],
    'Instagram': [
        {
            title: 'Comment Automation',
            description: 'Reply to comments and send a DM to engage your followers. Boost participation and turn casual scrolls into meaningful conversations.',
            image: '/insta_comment.jpg',
            color: 'transparent',
            blob: 'bg-blob-pink',
            accent: '#E1306C',
            hasBg: false
        },
        {
            title: 'Story Automation',
            description: 'Auto respond to story replies and reactions. Engage with your audience exactly when they show interest in your disappearing content.',
            image: '/insta_story.png',
            color: 'transparent',
            blob: 'bg-blob-blue',
            accent: '#5851DB',
            hasBg: false
        },
        {
            title: 'Live Automation',
            description: 'Send a message to followers who are active during lives. Capitalize on the energy of real-time broadcasting to build deeper connections.',
            image: '/insta_live_trial.png',
            color: 'transparent',
            blob: 'bg-blob-green',
            accent: '#833AB4',
            hasBg: false
        },
        {
            title: 'DM Automation',
            description: 'Automatically reply to the followers who messages you. Provide instant value and support to every direct inquiry, 24/7.',
            image: '/insta_dm.jpg',
            color: 'transparent',
            blob: 'bg-blob-pink',
            accent: '#FD1D1D',
            hasBg: false
        }
    ]
}

const FeatureBlock = ({ feature, index, isLoaded }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-10% 0px -10% 0px' })

    const isEven = index % 2 === 0

    return (
        <div ref={ref} className="relative py-12 md:py-16 overflow-visible">
            {/* Background Blob Decorations */}
            {feature.showBlob !== false && (
                <div className={`bg-blob ${feature.blob} ${isEven ? '-left-20' : '-right-20'} top-1/2 -translate-y-1/2 opacity-10`} />
            )}

            <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-24`}>
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
                    className="flex-1 space-y-6 md:px-8"
                >
                    {!isLoaded ? (
                        <div className="space-y-4">
                            <Skeleton className="h-12 w-3/4 mb-4" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                            <Skeleton className="h-4 w-4/5" />
                        </div>
                    ) : (
                        <>
                            <div className="inline-block px-4 py-1.5 rounded-full bg-white/50 border border-black/5 text-[12px] font-bold tracking-wider uppercase backdrop-blur-sm shadow-sm" style={{ color: feature.accent }}>
                                Feature 0{index + 1}
                            </div>
                            <h2 className="text-[42px] md:text-[52px] font-black leading-[1.1] text-black">
                                {feature.title}
                            </h2>
                            <p className="text-[18px] text-black/50 leading-relaxed max-w-[500px]">
                                {feature.description}
                            </p>
                            <div className="pt-4">
                                <button className="group flex items-center gap-2 text-[15px] font-bold text-black border-b-2 border-black/10 hover:border-black transition-all duration-300 pb-1">
                                    Explore More
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </>
                    )}
                </motion.div>

                {/* Illustration - Static & Enlarged */}
                <div className="flex-[1.2] relative">
                    {!isLoaded ? (
                        <Skeleton className="w-full aspect-square rounded-3xl" />
                    ) : (
                        <div className={`relative w-full aspect-[4/3] ${feature.hasBg ? `rounded-[40px] bg-gradient-to-br ${feature.color} p-12 shadow-2xl border border-white/40` : ''} overflow-visible group flex items-center justify-center`}>
                            {feature.hasBg && <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] pointer-events-none rounded-[40px]" />}

                            <img
                                src={feature.image}
                                alt={feature.title}
                                className="w-full h-full object-contain relative z-10 drop-shadow-2xl scale-95 md:scale-100 transform-gpu"
                            />

                            {feature.hasBg && (
                                <>
                                    <div className={`absolute top-10 ${isEven ? 'right-10' : 'left-10'} w-24 h-24 bg-white/20 rounded-full blur-2xl`} />
                                    <div className={`absolute bottom-10 ${isEven ? 'left-10' : 'right-10'} w-32 h-32 bg-white/20 rounded-full blur-3xl`} />
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {/* Connection Node */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:flex">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    className="w-4 h-4 rounded-full bg-white border-4 border-[#2F65E3] shadow-lg"
                />
            </div>
        </div>
    )
}

const ComingSoon = ({ platform }) => {
    const accentColor = '#1E3A8A' // Reserved for Telegram

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 md:py-24 max-w-[1240px] mx-auto px-6"
        >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] overflow-visible">
                {/* Main Teaser Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="md:col-span-2 md:row-span-2 relative p-12 rounded-[48px] overflow-hidden group border border-white/20 bg-white/40 shadow-xl backdrop-blur-3xl"
                >
                    <div className="absolute -right-20 -top-20 w-96 h-96 blur-[120px] opacity-20 pointer-events-none" style={{ backgroundColor: accentColor }} />
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                            <div className="inline-block px-4 py-2 rounded-full bg-white/50 border border-black/5 text-[12px] font-bold tracking-[0.2em] uppercase mb-8" style={{ color: accentColor }}>
                                Platform Expansion
                            </div>
                            <h2 className="text-[48px] md:text-[72px] font-black text-black leading-[1.1] mb-6">
                                {platform} <br />
                                <span className="text-black/20 italic">is coming soon.</span>
                            </h2>
                            <p className="text-[18px] text-black/50 leading-relaxed max-w-[450px]">
                                We're meticulously building {platform} support to ensure the highest reliability and speed for your business automations.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <button className="px-10 py-5 bg-[#2F65E3] text-white rounded-[24px] font-bold shadow-[0_20px_40px_rgba(47,101,227,0.25)] hover:bg-[#2555c7] hover:-translate-y-2 transition-all duration-300">
                                Pre-Register Now
                            </button>
                            <button className="px-10 py-5 bg-white border border-black/10 text-black rounded-[24px] font-bold hover:bg-black/5 transition-all duration-300">
                                Explore Alpha
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Shrouded Preview 1 */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="relative rounded-[40px] border border-white/30 overflow-hidden bg-white/40 shadow-xl backdrop-blur-2xl p-8"
                >
                    <div className="absolute inset-0 grayscale contrast-[150%] opacity-20 pointer-events-none"
                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.2) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center bg-white/50 border border-white">
                            <span className="text-2xl">⚡</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Automated Flows</h3>
                        <p className="text-sm text-black/40 leading-relaxed">Multi-step sequences designed specifically for {platform}'s unique API.</p>
                    </div>
                    <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-black/5 rounded-full blur-2xl" />
                </motion.div>

                {/* Shrouded Preview 2 */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative rounded-[40px] border border-white/30 overflow-hidden bg-white/40 shadow-xl backdrop-blur-2xl p-8"
                >
                    <div className="relative z-10">
                        <div className="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center bg-white/50 border border-white">
                            <span className="text-2xl">🔗</span>
                        </div>
                        <h3 className="text-xl font-bold mb-2">Direct Integration</h3>
                        <p className="text-sm text-black/40 leading-relaxed">No third-party wrappers. Direct, low-latency connection to your backend.</p>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-3xl opacity-10" style={{ backgroundColor: accentColor }} />
                </motion.div>

            </div>
        </motion.div>
    )
}

const FeaturesTimeline = ({ isLoaded, activePlatform, setActivePlatform, onSignup }) => {
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    })

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    const activeFeatures = platformFeatures[activePlatform] || []

    const getTimelineGradient = () => {
        if (activePlatform === 'WhatsApp') {
            return 'from-[#03543F] via-[#064e3b] to-[#03543F]'
        }
        return 'from-[#833AB4] via-[#FD1D1D] to-[#FCB045]' // Instagram Brand Gradient
    }

    const getTimelineShadow = () => {
        if (activePlatform === 'WhatsApp') {
            return 'shadow-[0_0_12px_rgba(3,84,63,0.3)]'
        }
        return 'shadow-[0_0_15px_rgba(225,48,108,0.4)]'
    }

    return (
        <section ref={containerRef} className="py-12 md:py-20 bg-white overflow-hidden relative min-h-[800px]">
            <AnimatePresence mode="wait">
                {activeFeatures.length > 0 ? (
                    <motion.div
                        key={`${activePlatform}-features`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Dynamic Guiding Line */}
                        <div className="absolute left-1/2 top-[440px] bottom-[360px] w-[3px] -translate-x-1/2 hidden md:block z-10">
                            {/* Background Track */}
                            <div className="absolute inset-0 bg-[#F4F4F4] rounded-full" />
                            {/* Active Filling Line */}
                            <motion.div
                                style={{ scaleY, transformOrigin: 'top' }}
                                className={`absolute inset-0 bg-gradient-to-b ${getTimelineGradient()} ${getTimelineShadow()} rounded-full`}
                            />
                        </div>

                        <div className="max-w-[1440px] mx-auto px-6 md:px-24 relative z-20">
                            {/* Section Header */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center mb-24 relative z-30"
                            >
                                <div className="absolute left-1/2 -top-12 -translate-x-1/2 w-10 h-10 rounded-2xl bg-black/[0.02] border border-black/5 flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 rounded-full bg-[#2F65E3]" />
                                </div>
                                <h2 className="text-[13px] font-bold text-black/30 tracking-[0.3em] uppercase mb-6">Execution Suite</h2>
                                <h3 className="text-[44px] md:text-[64px] font-black text-black leading-[1.05] tracking-tight">
                                    Engineering for {activePlatform}. <br />
                                    <span className="text-black/20 italic">Designed for speed.</span>
                                </h3>
                            </motion.div>

                            {/* Feature Blocks */}
                            <div className="space-y-0 relative">
                                {activeFeatures.map((feature, index) => (
                                    <FeatureBlock key={feature.title} feature={feature} index={index} isLoaded={isLoaded} />
                                ))}
                            </div>

                            {/* Bottom CTA */}
                            <motion.div
                                id="features-cta"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-center mt-32 relative z-50"
                            >
                                {!isLoaded ? (
                                    <div className="flex justify-center">
                                        <Skeleton className="h-16 w-56 rounded-2xl" />
                                    </div>
                                ) : (
                                    <div className="relative inline-block group">
                                        <div className="absolute inset-x-[-20%] inset-y-[-20%] bg-black/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                                        <button
                                            onClick={onSignup}
                                            className="relative z-10 px-14 py-6 text-[18px] font-black text-white bg-[#2F65E3] rounded-[28px] shadow-[0_20px_40px_rgba(47,101,227,0.25)] hover:shadow-[0_30px_60px_rgba(47,101,227,0.4)] hover:-translate-y-2 transition-all duration-300 cursor-pointer active:scale-95"
                                        >
                                            Start for free
                                        </button>
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                ) : (
                    <ComingSoon key={activePlatform} platform={activePlatform} />
                )}
            </AnimatePresence>

            {/* Bottom Platform Selector */}
            <div className="relative z-10 mt-24 max-w-[1440px] mx-auto px-6 pb-4 flex justify-center">
                {!isLoaded ? (
                    <Skeleton className="h-[88px] w-[500px] rounded-[44px]" />
                ) : (
                    <div className="relative inline-flex flex-wrap justify-center gap-3 p-3 bg-white/40 backdrop-blur-3xl border border-black/5 rounded-[44px] shadow-[0_8px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-shadow duration-300">
                        {platformData.map((platform) => {
                            const isActive = activePlatform === platform.name
                            return (
                                <button
                                    key={platform.name}
                                    onClick={() => {
                                        setActivePlatform(platform.name)
                                        // Scroll strategy - simple scroll to top of section
                                        const el = document.getElementById('features')
                                        if (el) {
                                            const y = el.getBoundingClientRect().top + window.scrollY - 100
                                            window.scrollTo({ top: y, behavior: 'smooth' })
                                        }
                                    }}
                                    className="relative group px-8 py-3.5 rounded-[32px] outline-none transition-all duration-300"
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="bottom-active-pill"
                                            className="absolute inset-0 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.04)] border border-black/5 rounded-[32px]"
                                            transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                                        />
                                    )}

                                    <div className="relative z-10 flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-[18px] flex items-center justify-center transition-all duration-300 ${isActive ? 'shadow-md scale-105' : 'opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0'
                                            }`}
                                            style={{
                                                background: isActive ? `linear-gradient(135deg, ${platform.color}, ${platform.color}dd)` : 'rgba(0,0,0,0.03)',
                                            }}>
                                            <IconSvg
                                                type={platform.icon}
                                                className="w-5 h-5"
                                                color={isActive ? '#ffffff' : '#000000'}
                                            />
                                        </div>
                                        <span className={`text-[16px] font-bold tracking-tight transition-all duration-300 ${isActive ? 'text-black' : 'text-black/30 group-hover:text-black/60'
                                            }`}>
                                            {platform.name}
                                        </span>
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>
        </section>
    )
}

export default FeaturesTimeline
