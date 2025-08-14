"use client"
import Link from "next/link"
import Logo from "../../public/Logo"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <header className="w-full h-[70px] bg-gradient-to-r from-[#03011b] space-y-3 via-[#080a11] to-[#252841] flex items-center fixed top-0 z-50">
            <nav className="w-full max-w-7xl mx-auto flex items-center justify-between px-8" style={{ height: 70 }}>
                {/* Logo */}
                <div className="mt-5 flex items-center flex-col max-2xl:ml-20">
                    <Logo />
                    <div className="text-white/60 mt-2 text-[10px] font-serif">Powered by Binary Informatics</div>
                </div>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex items-center" style={{ fontWeight: 500, fontSize: 14, color: '#fff', gap: 20 }}>
                    <li className="mx-[10px]"><Link href="/" className="hover:text-[#46ffe2] transition">Home</Link></li>
                    <li className="mx-[10px]"><Link href="/agentics-ai-solution" className="hover:text-[#46ffe2] transition">Agentic AI Solution</Link></li>
                    <li className="mx-[10px]"><Link href="/ai-agents" className="hover:text-[#46ffe2] transition">AI Agents</Link></li>
                    <li className="mx-[10px]"><Link href="/data-and-ai" className="hover:text-[#46ffe2] transition">Data & AI</Link></li>
                </ul>

                {/* Desktop Request Demo Button */}
                <div className="hidden md:block ml-4">
                    <button
                        className="rounded-[10px] bg-gradient-to-r min-h-[40px] min-w-[100px] from-[#46fffb]  to-[#0f60ff]  font-bold transition-transform duration-300 hover:scale-105 hover:bg-[#3071f2] cursor-pointer max-2xl:mr-20"
                        style={{
                            fontWeight: 600,
                            fontSize: 14,
                            border: 'none',
                            boxShadow: 'none',
                        }}
                    >
                        GPT Mode
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Side Menu */}
            <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {/* Backdrop */}
                <div 
                    className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={closeMobileMenu}
                ></div>
                
                {/* Side Menu */}
                <div className={`absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-[#03011b] via-[#080a11] to-[#252841] shadow-2xl transition-transform duration-300 ease-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10">
                            <Logo />
                            <button
                                onClick={closeMobileMenu}
                                className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex-1 px-6 py-8">
                            <ul className="space-y-6">
                                <li className={`transition-all duration-300 delay-100 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                                    <Link 
                                        href="/" 
                                        className="text-white text-lg font-medium hover:text-[#46ffe2] transition-colors block py-3 border-b border-white/10"
                                        onClick={closeMobileMenu}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className={`transition-all duration-300 delay-150 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                                    <Link 
                                        href="/agentic-ai-solution" 
                                        className="text-white text-lg font-medium hover:text-[#46ffe2] transition-colors block py-3 border-b border-white/10"
                                        onClick={closeMobileMenu}
                                    >
                                        Agentic AI Solution
                                    </Link>
                                </li>
                                <li className={`transition-all duration-300 delay-200 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                                    <Link 
                                        href="/ai-agents" 
                                        className="text-white text-lg font-medium hover:text-[#46ffe2] transition-colors block py-3 border-b border-white/10"
                                        onClick={closeMobileMenu}
                                    >
                                        AI Agents
                                    </Link>
                                </li>
                                <li className={`transition-all duration-300 delay-250 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'}`}>
                                    <Link 
                                        href="/data-and-ai" 
                                        className="text-white text-lg font-medium hover:text-[#46ffe2] transition-colors block py-3 border-b border-white/10"
                                        onClick={closeMobileMenu}
                                    >
                                        Data & AI
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Mobile Button */}
                        <div className={`p-6 border-t border-white/10 transition-all duration-300 delay-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                            <button
                                className="w-full rounded-[10px] bg-gradient-to-r min-h-[48px] from-[#46fffb] to-[#0f60ff] font-bold transition-transform duration-300 hover:scale-105 hover:bg-[#3071f2] cursor-pointer text-white"
                                style={{
                                    fontWeight: 600,
                                    fontSize: 16,
                                    border: 'none',
                                    boxShadow: 'none',
                                }}
                                onClick={closeMobileMenu}
                            >
                                GPT Mode
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
