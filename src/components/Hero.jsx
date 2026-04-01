import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import Skeleton from './Skeleton'

const testimonials = [
    {
        quote: 'Impressed by the professionalism and the automation',
        author: 'Sarah Jenkins',
        handle: '@sarahj_marketing',
        bg: 'bg-[#DAF7D9]',
    },
    {
        quote: 'A seamless experience from start to finish. Highly recommend!',
        author: 'David Rodriguez',
        handle: '@davidr_growth',
        bg: 'bg-[#FFD8E9]',
    },
    {
        quote: 'Reliable and trustworthy. Made my life so much easier!',
        author: 'Emily Chen',
        handle: '@emilyc_social',
        bg: 'bg-[#C5EFFF]',
    },
]

const Hero = ({ isLoaded, setIsLoaded, onSignup, setActivePlatform }) => {
    const { scrollY } = useScroll()

    // Parallax Transforms
    const y1 = useTransform(scrollY, [0, 500], [0, -80])
    const y2 = useTransform(scrollY, [0, 500], [0, 100])
    const opacityHero = useTransform(scrollY, [0, 400], [1, 0])

    const slowScrollToCTA = () => {
        let attempts = 0;

        const checkHeightAndScroll = () => {
            const cta = document.getElementById('features-cta');
            if (!cta) return;

            // Target is the CTA, ensuring it's visible at the bottom of the screen
            const targetY = cta.getBoundingClientRect().top + window.scrollY - window.innerHeight + 150;

            // If the CTA is too high up (like < 1000px from top), the layout hasn't reflowed yet
            // The minimum height of the hero + features is much larger.
            if (targetY < 1500 && attempts < 15) {
                attempts++;
                setTimeout(checkHeightAndScroll, 50);
                return;
            }

            const startY = window.scrollY;
            const distance = targetY - startY;
            const duration = 2500; // 2.5s cinematic tour
            let startTime = null;

            const animation = (currentTime) => {
                if (startTime === null) startTime = currentTime;
                const timeElapsed = currentTime - startTime;
                const process = Math.min(timeElapsed / duration, 1);

                // smooth easeInOutCubic curve for a premium feel
                const ease = process < 0.5 ? 4 * process ** 3 : 1 - Math.pow(-2 * process + 2, 3) / 2;

                window.scrollTo(0, startY + distance * ease);
                if (timeElapsed < duration) {
                    requestAnimationFrame(animation);
                }
            };
            requestAnimationFrame(animation);
        };

        // Start checking 50ms after the click gives React time to unmount old platform
        setTimeout(checkHeightAndScroll, 50);
    };

    return (
        <section id="home" className="pt-24 pb-8 min-h-[90vh] relative overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-12 relative z-10">
                <div className="grid grid-cols-2 gap-12 items-center min-h-[calc(100vh-140px)]">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ y: y1 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        {!isLoaded ? (
                            <div className="mb-10 space-y-6">
                                <div className="space-y-4">
                                    <Skeleton className="h-16 w-3/4" />
                                    <Skeleton className="h-16 w-1/2" />
                                    <Skeleton className="h-16 w-2/3" />
                                </div>
                                <div className="space-y-2">
                                    <Skeleton className="h-4 w-[440px]" />
                                    <Skeleton className="h-4 w-[380px]" />
                                </div>
                                <div className="flex gap-3 pt-4">
                                    <Skeleton className="h-12 w-40" />
                                    <Skeleton className="h-12 w-48" />
                                </div>
                            </div>
                        ) : (
                            <>
                                <h1 className="text-[54px] font-extrabold leading-[1.12] mb-5 text-black">
                                    Automate
                                    <br />
                                    Conversations.
                                    <br />
                                    <span className="text-[#2F65E3]">Convert Followers.</span>
                                </h1>

                                <p className="text-[16px] text-black/50 mb-8 leading-relaxed max-w-[440px]">
                                    Build smart auto-replies and turn conversations into
                                    conversions across Instagram, WhatsApp, and Telegram.
                                </p>

                                <div className="flex gap-3 mb-10">
                                    <button
                                        onClick={onSignup}
                                        className="px-7 py-3 text-[14px] font-semibold text-white bg-[#2F65E3] rounded-lg shadow-[0_4px_12px_rgba(47,101,227,0.3)] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                                    >
                                        Start for free
                                    </button>
                                    <button className="px-7 py-3 text-[14px] font-semibold text-black border border-[#D9D9D9] rounded-lg hover:bg-[#F8F8F8] transition-all duration-200">
                                        See how it works
                                    </button>
                                </div>
                            </>
                        )}

                        {/* Testimonial Cards */}
                        <div className="relative w-full overflow-hidden mt-4 pb-4 -mb-4 pt-4 -mt-4">
                            <style>{`
                                @keyframes marquee-scroll {
                                    0% { transform: translateX(0); }
                                    100% { transform: translateX(calc(-50% - 0.5rem)); }
                                }
                                .animate-marquee-scroll {
                                    animation: marquee-scroll 25s linear infinite;
                                }
                            `}</style>
                            <div className="flex w-[calc(200%+1rem)] animate-marquee-scroll hover:[animation-play-state:paused]">
                                {[...Array(2)].map((_, groupIndex) => (
                                    <div
                                        key={groupIndex}
                                        className="w-[calc(50%-0.5rem)] shrink-0 grid grid-cols-3 gap-4"
                                        style={{ marginRight: groupIndex === 0 ? '1rem' : 0 }}
                                    >
                                        {testimonials.map((t, i) => (
                                            <motion.div
                                                key={`${groupIndex}-${i}`}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                                                className={`${t.bg} p-5 rounded-2xl cursor-pointer hover:-translate-y-1 transition-transform duration-200 gpu-accelerated relative min-h-[140px]`}
                                            >
                                                {!isLoaded ? (
                                                    <div className="space-y-3">
                                                        <Skeleton className="h-4 w-full" />
                                                        <Skeleton className="h-4 w-2/3" />
                                                        <div className="flex items-center gap-2 mt-4">
                                                            <Skeleton variant="circle" className="w-8 h-8" />
                                                            <div className="space-y-1">
                                                                <Skeleton className="h-2 w-12" />
                                                                <Skeleton className="h-2 w-8" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <div className="text-[28px] font-black text-black/10 leading-none mb-2">
                                                            ❝
                                                        </div>
                                                        <p className="text-[12px] font-bold text-black/70 mb-5 leading-[1.6] italic">
                                                            {t.quote}
                                                        </p>
                                                        <div className="flex items-center gap-2.5">
                                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2F65E3] to-[#004CFD] flex items-center justify-center">
                                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                                                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                                                </svg>
                                                            </div>
                                                            <div>
                                                                <div className="text-[11px] font-bold text-black">{t.author}</div>
                                                                <div className="text-[10px] text-[#999999]">{t.handle}</div>
                                                            </div>
                                                        </div>
                                                    </>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Real Hero Image */}
                    <motion.div
                        style={{ y: y2, opacity: opacityHero }}
                        className="flex items-center justify-center relative min-h-[500px]"
                    >
                        {!isLoaded && (
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center w-full z-0 p-12">
                                <Skeleton className="w-full aspect-[4/3] rounded-3xl" />
                            </div>
                        )}

                        <div className="relative w-full max-w-[720px]">
                            <img
                                src="/hero_section_image.webp"
                                alt="Kodrix AI - Automate Conversations"
                                onLoad={() => setTimeout(() => setIsLoaded(true), 2000)}
                                className={`w-full h-auto object-contain transform translate-y-14 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                            />

                            {/* Interactive Floating Icons container bounds */}
                            {isLoaded && (
                                <div className="absolute inset-0 pointer-events-none transform translate-y-14 z-20">
                                    <style>{`
                                        @keyframes icon-vibrate {
                                            0%, 100% { transform: scale(1) translate(0, 0); }
                                            25% { transform: scale(1.05) translate(-2px, 2px); }
                                            50% { transform: scale(1.02) translate(2px, -1px); }
                                            75% { transform: scale(1.08) translate(-1px, 2px); }
                                        }
                                        .animate-icon-vibrate {
                                            animation: icon-vibrate 2s ease-in-out infinite;
                                        }
                                        .animate-icon-vibrate-delayed {
                                            animation: icon-vibrate 2s ease-in-out infinite;
                                            animation-delay: 0.5s;
                                        }
                                        .animate-icon-vibrate-late {
                                            animation: icon-vibrate 2s ease-in-out infinite;
                                            animation-delay: 1.2s;
                                        }
                                        @keyframes notification-pop {
                                            0% { transform: scale(0) translateY(10px); opacity: 0; }
                                            15% { transform: scale(1.2) translateY(-2px); opacity: 1; }
                                            25% { transform: scale(1) translateY(0); opacity: 1; }
                                            70% { transform: scale(1) translateY(0); opacity: 1; }
                                            100% { transform: scale(0) translateY(-10px); opacity: 0; }
                                        }
                                        .animate-notification-pop {
                                            animation: notification-pop 5s ease-in-out infinite;
                                        }
                                    `}</style>

                                    {/* WhatsApp */}
                                    <div
                                        className="absolute top-[35%] left-[20%] w-[15%] h-[15%] pointer-events-auto cursor-pointer animate-icon-vibrate z-30 group"
                                        onClick={() => {
                                            window.open('https://whatsapp-automation-swart.vercel.app/login', '_blank');
                                            setActivePlatform('WhatsApp');
                                            slowScrollToCTA();
                                        }}
                                    >
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-xl shadow-lg border border-black/5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap animate-notification-pop">
                                            {/* Triangle Pointer */}
                                            <div className="absolute -bottom-2 left-4 w-3 h-3 bg-white border-b border-r border-black/5 transform rotate-45"></div>
                                            <div className="w-2 h-2 rounded-full bg-[#087E07] animate-pulse" />
                                            <span className="text-[12px] font-bold text-black/70 relative z-10">Click to explore</span>
                                        </div>
                                    </div>

                                    {/* Instagram */}
                                    <div
                                        className="absolute top-[38%] left-[42%] w-[18%] h-[18%] pointer-events-auto cursor-pointer animate-icon-vibrate-delayed z-30 group"
                                        onClick={() => {
                                            window.open('https://instaflow-1-8a6r.onrender.com', '_blank');
                                            setActivePlatform('Instagram');
                                            slowScrollToCTA();
                                        }}
                                    >
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-xl shadow-lg border border-black/5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap animate-notification-pop" style={{ animationDelay: '1.5s' }}>
                                            {/* Triangle Pointer */}
                                            <div className="absolute -bottom-2 left-4 w-3 h-3 bg-white border-b border-r border-black/5 transform rotate-45"></div>
                                            <div className="w-2 h-2 rounded-full bg-[#E1306C] animate-pulse" />
                                            <span className="text-[12px] font-bold text-black/70 relative z-10">Click to explore</span>
                                        </div>
                                    </div>

                                    {/* Telegram */}
                                    <div
                                        className="absolute top-[28%] right-[22%] w-[15%] h-[15%] pointer-events-auto cursor-pointer animate-icon-vibrate-late z-30 group"
                                        onClick={() => {
                                            setActivePlatform('Telegram');
                                            slowScrollToCTA();
                                        }}
                                    >
                                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-3 py-1.5 rounded-xl shadow-lg border border-black/5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap animate-notification-pop" style={{ animationDelay: '3s' }}>
                                            {/* Triangle Pointer */}
                                            <div className="absolute -bottom-2 left-4 w-3 h-3 bg-white border-b border-r border-black/5 transform rotate-45"></div>
                                            <div className="w-2 h-2 rounded-full bg-[#004CFD] animate-pulse" />
                                            <span className="text-[12px] font-bold text-black/70 relative z-10">Click to explore</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Parallax Background Decorations */}
            <motion.div
                style={{ y: useTransform(scrollY, [0, 1000], [0, -300]) }}
                className="absolute top-20 right-[5%] w-72 h-72 bg-[#2F65E3]/5 blur-[120px] rounded-full -z-1"
            />
            <motion.div
                style={{ y: useTransform(scrollY, [0, 1000], [0, 150]) }}
                className="absolute bottom-40 left-[10%] w-96 h-96 bg-[#DAF7D9]/20 blur-[150px] rounded-full -z-1"
            />
        </section>
    )
}

export default Hero
