import Skeleton from './Skeleton'

const Footer = ({ isLoaded }) => {
    return (
        <footer className="bg-white pt-16 pb-0 relative overflow-hidden border-t border-[#D9D9D9]">
            <div className="max-w-[1440px] mx-auto px-16">
                <div className="grid grid-cols-[1.5fr_3fr] gap-24 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center mb-5">
                            {!isLoaded ? (
                                <Skeleton className="h-[86px] w-[200px]" />
                            ) : (
                                <a href="#home" className="block outline-none">
                                    <img src="/kodryx.webp" alt="Kodrix" className="h-[86px] w-auto object-contain transition-transform hover:scale-105" />
                                </a>
                            )}
                        </div>

                        {!isLoaded ? (
                            <div className="space-y-2 mb-6">
                                <Skeleton className="h-4 w-[280px]" />
                                <Skeleton className="h-4 w-[240px]" />
                            </div>
                        ) : (
                            <p className="text-[13px] text-black/50 mb-6 max-w-[280px] leading-relaxed">
                                Automate your Instagram DMs and grow your business with 24/7 engagement.
                            </p>
                        )}

                        {/* Social Icons */}
                        <div className="flex gap-2.5 mb-6">
                            <a href="#" className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex items-center justify-center hover:-translate-y-1 transition-transform">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-lg bg-[#004CFD] flex items-center justify-center hover:-translate-y-1 transition-transform">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-lg bg-[#087E07] flex items-center justify-center hover:-translate-y-1 transition-transform">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" /></svg>
                            </a>
                            <a href="#" className="w-8 h-8 rounded-lg bg-[#0077B5] flex items-center justify-center hover:-translate-y-1 transition-transform">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                            </a>
                        </div>

                        <p className="text-[12px] text-[#999999]">
                            © 2025 Kodryx AI. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-3 gap-12 pt-2">
                        <div>
                            <h4 className="text-[14px] font-bold text-black mb-4">Quick links</h4>
                            <div className="flex flex-col gap-2.5">
                                {!isLoaded ? (
                                    <>
                                        <Skeleton className="h-4 w-20" />
                                        <Skeleton className="h-4 w-24" />
                                        <Skeleton className="h-4 w-28" />
                                        <Skeleton className="h-4 w-16" />
                                    </>
                                ) : (
                                    ['Home', 'Features', 'How it works'].map((item) => (
                                        <a
                                            key={item}
                                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                            className="text-[13px] text-black/50 hover:text-[#2F65E3] transition-colors"
                                        >
                                            {item}
                                        </a>
                                    ))
                                )}
                            </div>
                        </div>
                        <div>
                            <h4 className="text-[14px] font-bold text-black mb-4">Services</h4>
                            <div className="flex flex-col gap-2.5">
                                <a href="https://kodryx.ai/cyber-security-services/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-black/50 hover:text-[#2F65E3] transition-colors">
                                    Cyber Security Services
                                </a>

                            </div>
                        </div>
                        <div>
                            <h4 className="text-[14px] font-bold text-black mb-4">Resources</h4>
                            <div className="flex flex-col gap-2.5">
                                <a href="https://kodryx.ai/blog/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-black/50 hover:text-[#2F65E3] transition-colors">
                                    Blog
                                </a>
                                <a href="https://kodryx.ai/brochure/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-black/50 hover:text-[#2F65E3] transition-colors">
                                    Brochure
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Large Footer Branding */}
            <div className="text-center mt-8 overflow-hidden pb-0">
                <div
                    className="text-[160px] font-black leading-none tracking-[0.06em] select-none"
                    style={{
                        background: 'linear-gradient(180deg, rgba(47,101,227,0.12) 0%, rgba(47,101,227,0.03) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}
                >
                    KODRYX AI
                </div>
            </div>
        </footer>
    )
}

export default Footer
