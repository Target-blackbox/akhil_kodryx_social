import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Skeleton from '../components/Skeleton'

const LoginPage = ({ onBack, onSignup, isLoaded, setIsLoaded }) => {
    // Safety timeout to ensure isLoaded resolves even if image fails
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isLoaded) setIsLoaded(true)
        }, 1500)
        return () => clearTimeout(timer)
    }, [isLoaded, setIsLoaded])

    return (
        <div className="h-screen w-full bg-[#FFFFFF] flex items-center justify-center overflow-hidden bg-grain select-none relative">

            {/* Split Layout Container */}
            <div className="flex w-full h-full max-w-[1440px] max-h-[900px] shadow-[0_0_100px_rgba(0,0,0,0.03)] overflow-hidden relative">

                {/* Floating Back Button - Tidy & Accessible */}
                <button
                    onClick={onBack}
                    className="absolute top-10 right-10 z-[100] w-10 h-10 rounded-full bg-black/5 hover:bg-black hover:text-white flex items-center justify-center transition-all group cursor-pointer"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Left Side: Hero Gateway (Blue Atmosphere) */}
                <div className="hidden lg:flex flex-1 relative bg-[#F0F4FF] p-24 flex-col justify-between overflow-hidden border-r border-black/[0.03]">
                    {/* Atmospheric Textures & Deep Blue Blobs */}
                    <div className="absolute inset-0 bg-grain opacity-10 pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#2F65E3]/[0.02] via-transparent to-[#2F65E3]/[0.05] pointer-events-none" />

                    {/* Signature Blue Blobs */}
                    <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#2F65E3]/10 blur-[140px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#2F65E3]/5 blur-[120px] rounded-full pointer-events-none" />

                    {/* Brand Identifier */}
                    <div className="relative z-20 mb-8">
                        {!isLoaded ? (
                            <Skeleton className="h-20 w-48 rounded-2xl" />
                        ) : (
                            <img
                                src="/kodryx.webp"
                                alt="Kodryx"
                                className="h-28 w-auto object-contain"
                                onLoad={() => setIsLoaded(true)}
                            />
                        )}
                    </div>

                    {/* Elite Value Proposition */}
                    <div className="relative z-20">
                        {!isLoaded ? (
                            <div className="space-y-4 mb-6">
                                <Skeleton className="h-14 w-full" />
                                <Skeleton className="h-14 w-2/3" />
                            </div>
                        ) : (
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-[48px] font-black text-black leading-[1.1] tracking-[-0.03em] mb-6"
                            >
                                Engineered for <br />
                                <span className="text-[#2F65E3] italic font-medium">Automation.</span>
                            </motion.h1>
                        )}

                        {!isLoaded ? (
                            <div className="space-y-2">
                                <Skeleton className="h-4 w-[380px]" />
                                <Skeleton className="h-4 w-[320px]" />
                            </div>
                        ) : (
                            <motion.p
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="text-[15px] text-black/40 font-bold max-w-[380px] leading-relaxed"
                            >
                                Log in to access your high-performance automation ecosystem and dashboard.
                            </motion.p>
                        )}
                    </div>

                    {/* Visual Status Marker */}
                    <div className="relative z-20 flex items-center gap-4">
                        {!isLoaded ? (
                            <Skeleton className="h-4 w-32" />
                        ) : (
                            <>
                                <div className="w-1.5 h-1.5 rounded-full bg-[#2F65E3] animate-pulse" />
                                <span className="text-black/20 text-[10px] font-black uppercase tracking-[0.4em]">System Gateway Active</span>
                            </>
                        )}
                    </div>
                </div>

                {/* Right Side: Auth Form (Pure Minimalist White) */}
                <div className="flex-1 bg-white flex flex-col justify-center px-12 lg:px-24 relative z-50">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full max-w-[360px] mx-auto"
                    >
                        {/* Header Context */}
                        <div className="mb-12">
                            {!isLoaded ? (
                                <div className="space-y-3">
                                    <Skeleton className="h-10 w-2/3" />
                                    <Skeleton className="h-4 w-full" />
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-[32px] font-black text-black leading-tight mb-2">Welcome Back</h2>
                                    <p className="text-[14px] text-black/40 font-bold tracking-tight px-0.5">Select a platform to manage your automations.</p>
                                </>
                            )}
                        </div>

                        {/* Platform Login Options */}
                        <div className="flex justify-center flex-row gap-4 items-center mt-8">
                            {!isLoaded ? (
                                <>
                                    <Skeleton className="h-16 w-16 rounded-2xl" />
                                    <Skeleton className="h-16 w-16 rounded-2xl" />
                                    <Skeleton className="h-16 w-16 rounded-2xl" />
                                </>
                            ) : (
                                <>
                                    <a href="https://whatsapp-automation-swart.vercel.app/login" target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex flex-shrink-0 items-center justify-center p-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#075E54] border border-[#25D366]/20 rounded-2xl font-black transition-all active:scale-95 shadow-sm group">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </a>

                                    <a href="https://instaflow-1-8a6r.onrender.com" target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex flex-shrink-0 items-center justify-center p-4 bg-[#E1306C]/10 hover:bg-[#E1306C]/20 text-[#E1306C] border border-[#E1306C]/20 rounded-2xl font-black transition-all active:scale-95 shadow-sm group">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                        </svg>
                                    </a>

                                    <button className="w-16 h-16 flex flex-shrink-0 items-center justify-center p-4 bg-[#0088cc]/10 hover:bg-[#0088cc]/20 text-[#0088cc] border border-[#0088cc]/20 rounded-2xl font-black transition-all active:scale-95 shadow-sm group">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
                                            <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.892-.66 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                        </svg>
                                    </button>
                                </>
                            )}
                        </div>

                        {/* Footer Context */}
                        <div className="mt-10 text-center">
                            {!isLoaded ? (
                                <Skeleton className="h-4 w-1/2 mx-auto" />
                            ) : (
                                <p className="text-[12px] text-black/30 font-bold">
                                    Don't have an account? <button onClick={onSignup} className="text-[#2F65E3] hover:underline font-black ml-1">Create new account</button>
                                </p>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
