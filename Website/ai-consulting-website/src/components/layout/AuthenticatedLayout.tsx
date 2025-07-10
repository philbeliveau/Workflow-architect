'use client'

import React, { useState } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter, usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  BookOpen, 
  FileText, 
  MessageSquare, 
  User, 
  Settings, 
  LogOut,
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  BarChart3
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface AuthenticatedLayoutProps {
  children: React.ReactNode
  title?: string
  subtitle?: string
}

const navigationItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: Home,
    description: 'Vue d\'ensemble'
  },
  {
    name: 'Formation',
    href: '/formation',
    icon: GraduationCap,
    description: 'Contenu d\'apprentissage',
    submenu: [
      { name: 'Section 0-2: Nouvelle ère IA', href: '/formation/section-0-2' },
      { name: 'Section 3-7: Alignement & PRD', href: '/formation/section-3-7' },
      { name: 'Section 8-9: Contexte & Oracles', href: '/formation/section-8-9' },
      { name: 'Section 10-12: Orchestration', href: '/formation/section-10-12' },
      { name: 'Guides Configuration', href: '/formation/guides-config' },
      { name: 'Section 13-14: Cas d\'étude', href: '/formation/section-13-14' }
    ]
  },
  {
    name: 'Mes Notes',
    href: '/notes',
    icon: FileText,
    description: 'Notes personnelles'
  },
  {
    name: 'Forum Q&A',
    href: '/questions',
    icon: MessageSquare,
    description: 'Discussions'
  },
  {
    name: 'Progression',
    href: '/progress',
    icon: BarChart3,
    description: 'Suivi d\'apprentissage'
  }
]

export default function AuthenticatedLayout({ children, title, subtitle }: AuthenticatedLayoutProps) {
  const { data: session } = useSession()
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  if (!session) {
    router.push('/auth/signin')
    return null
  }

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

  const isActivePath = (href: string) => {
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Enhanced Background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-transparent to-blue-900/20"></div>
        
        {/* Large background shapes */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-600/30 to-purple-800/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-blue-600/25 to-indigo-800/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-violet-600/20 to-purple-700/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-3000"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-indigo-600/15 to-purple-600/15 rounded-full blur-3xl animate-pulse delay-4000"></div>
        </div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-600/10 via-transparent to-blue-600/10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-violet-600/10 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-tr from-indigo-600/10 via-transparent to-transparent"></div>
        </div>
        
        {/* Enhanced code pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-16 gap-3 h-full p-6">
            {Array.from({ length: 256 }, (_, i) => (
              <div 
                key={i} 
                className="bg-gradient-to-r from-purple-400/40 to-blue-400/40 h-1 rounded-full animate-pulse" 
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: `${2 + (i % 3)}s`
                }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Subtle noise texture */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3Ccircle cx='27' cy='7' r='1'/%3E%3Ccircle cx='47' cy='7' r='1'/%3E%3Ccircle cx='7' cy='27' r='1'/%3E%3Ccircle cx='27' cy='27' r='1'/%3E%3Ccircle cx='47' cy='27' r='1'/%3E%3Ccircle cx='7' cy='47' r='1'/%3E%3Ccircle cx='27' cy='47' r='1'/%3E%3Ccircle cx='47' cy='47' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Enhanced Floating elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <motion.div
          className="absolute top-1/4 left-1/4 text-purple-400 opacity-30"
          animate={{ 
            y: [0, -30, 0], 
            rotate: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <BookOpen size={32} />
        </motion.div>
        <motion.div
          className="absolute top-3/4 right-1/4 text-blue-400 opacity-25"
          animate={{ 
            y: [0, 25, 0], 
            rotate: [0, -8, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <FileText size={36} />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-1/3 text-violet-400 opacity-20"
          animate={{ 
            y: [0, -20, 0], 
            x: [0, 15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        >
          <MessageSquare size={28} />
        </motion.div>
        <motion.div
          className="absolute top-1/3 left-1/5 text-indigo-400 opacity-15"
          animate={{ 
            y: [0, 20, 0], 
            x: [0, -10, 0],
            rotate: [0, -3, 0]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 6 }}
        >
          <GraduationCap size={30} />
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/3 text-purple-300 opacity-25"
          animate={{ 
            y: [0, -25, 0], 
            rotate: [0, 12, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        >
          <BarChart3 size={26} />
        </motion.div>
      </div>
      
      {/* Top Navigation Bar */}
      <nav className="bg-slate-900/90 backdrop-blur-xl border-b border-purple-500/20 shadow-xl sticky top-0 z-50 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/dashboard" className="flex items-center gap-3">
              <Image
                src="/contextDev_Speed.png"
                alt="contexteDev Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-white">
                  contexte<span className="text-purple-400">Dev</span>
                </span>
                <div className="text-xs text-slate-300">Formation IA</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <NavigationItem
                  key={item.name}
                  item={item}
                  isActive={isActivePath(item.href)}
                  activeSubmenu={activeSubmenu}
                  setActiveSubmenu={setActiveSubmenu}
                />
              ))}
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm font-medium text-white">{session.user.name}</div>
                  <div className="text-xs text-slate-300">{session.user.subscription}</div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-medium">
                    {session.user.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>

              <UserDropdown onSignOut={handleSignOut} />

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-slate-700/50"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-purple-500/20 bg-slate-900/95 backdrop-blur-xl"
            >
              <div className="px-4 py-3 space-y-1">
                {navigationItems.map((item) => (
                  <MobileNavigationItem
                    key={item.name}
                    item={item}
                    isActive={isActivePath(item.href)}
                    onItemClick={() => setIsMobileMenuOpen(false)}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Page Header */}
      {(title || subtitle) && (
        <div className="bg-slate-800/60 backdrop-blur-xl border-b border-purple-500/10 relative z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800/80 via-slate-700/80 to-slate-800/80"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
            <div className="flex items-center justify-between">
              <div>
                {title && (
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">{title}</h1>
                )}
                {subtitle && (
                  <p className="mt-2 text-slate-300">{subtitle}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {children}
      </main>
    </div>
  )
}

function NavigationItem({ item, isActive, activeSubmenu, setActiveSubmenu }: {
  item: typeof navigationItems[0]
  isActive: boolean
  activeSubmenu: string | null
  setActiveSubmenu: (name: string | null) => void
}) {
  const hasSubmenu = item.submenu && item.submenu.length > 0
  const isSubmenuOpen = activeSubmenu === item.name

  return (
    <div className="relative">
      <Link
        href={item.href}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          isActive
            ? 'bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 border border-purple-400/30 shadow-lg'
            : 'text-slate-300 hover:text-white hover:bg-slate-800/60 hover:shadow-md'
        }`}
        onMouseEnter={() => hasSubmenu && setActiveSubmenu(item.name)}
        onMouseLeave={() => hasSubmenu && setActiveSubmenu(null)}
      >
        <item.icon size={18} />
        <span>{item.name}</span>
        {hasSubmenu && <ChevronDown size={14} />}
      </Link>

      {/* Submenu */}
      {hasSubmenu && isSubmenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 mt-1 w-64 bg-slate-900/95 backdrop-blur-xl rounded-lg shadow-lg border border-purple-500/20 py-2 z-50"
          onMouseEnter={() => setActiveSubmenu(item.name)}
          onMouseLeave={() => setActiveSubmenu(null)}
        >
          {item.submenu?.map((subItem) => (
            <Link
              key={subItem.href}
              href={subItem.href}
              className="block px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50 hover:text-white"
            >
              {subItem.name}
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  )
}

function MobileNavigationItem({ item, isActive, onItemClick }: {
  item: typeof navigationItems[0]
  isActive: boolean
  onItemClick: () => void
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasSubmenu = item.submenu && item.submenu.length > 0

  return (
    <div>
      <div
        className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium ${
          isActive
            ? 'bg-purple-500/20 text-purple-300 border border-purple-400/30'
            : 'text-slate-300'
        }`}
      >
        <Link
          href={item.href}
          className="flex items-center gap-3 flex-1"
          onClick={onItemClick}
        >
          <item.icon size={18} />
          <span>{item.name}</span>
        </Link>
        
        {hasSubmenu && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1"
          >
            <ChevronDown
              size={16}
              className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>
        )}
      </div>

      {/* Mobile Submenu */}
      {hasSubmenu && isExpanded && (
        <div className="ml-6 mt-2 space-y-1">
          {item.submenu?.map((subItem) => (
            <Link
              key={subItem.href}
              href={subItem.href}
              className="block px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-slate-700/50"
              onClick={onItemClick}
            >
              {subItem.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function UserDropdown({ onSignOut }: { onSignOut: () => void }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50"
      >
        <Settings size={18} />
        <ChevronDown size={14} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 top-full mt-1 w-48 bg-slate-900/95 backdrop-blur-xl rounded-lg shadow-lg border border-purple-500/20 py-2 z-50"
          >
            <Link
              href="/profile"
              className="flex items-center gap-3 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50"
              onClick={() => setIsOpen(false)}
            >
              <User size={16} />
              Mon Profil
            </Link>
            <Link
              href="/settings"
              className="flex items-center gap-3 px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/50"
              onClick={() => setIsOpen(false)}
            >
              <Settings size={16} />
              Paramètres
            </Link>
            <hr className="my-2" />
            <button
              onClick={() => {
                setIsOpen(false)
                onSignOut()
              }}
              className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-500 hover:bg-red-500/10"
            >
              <LogOut size={16} />
              Déconnexion
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}