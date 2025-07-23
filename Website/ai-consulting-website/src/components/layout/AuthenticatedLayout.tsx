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
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        {/* Purple accent shapes */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-400/8 rounded-full blur-3xl"></div>
        </div>
        
        
      </div>
      
      
      {/* Top Navigation Bar */}
      <nav className="bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-lg sticky top-0 z-50 relative">
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
                <span className="text-xl font-bold text-gray-900">
                  contexte<span className="text-purple-600">Dev</span>
                </span>
                <div className="text-xs text-gray-600">Formation IA</div>
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
                  <div className="text-sm font-medium text-gray-900">{session.user.name}</div>
                  <div className="text-xs text-gray-600">{session.user.subscription}</div>
                </div>
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-sm font-medium">
                    {session.user.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>

              <UserDropdown onSignOut={handleSignOut} />

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
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
              className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl"
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
        <div className="bg-gray-50 border-b border-gray-200 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between">
              <div>
                {title && (
                  <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
                )}
                {subtitle && (
                  <p className="mt-2 text-gray-600">{subtitle}</p>
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
            ? 'bg-purple-600 text-white shadow-lg'
            : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
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
          className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
          onMouseEnter={() => setActiveSubmenu(item.name)}
          onMouseLeave={() => setActiveSubmenu(null)}
        >
          {item.submenu?.map((subItem) => (
            <Link
              key={subItem.href}
              href={subItem.href}
              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900"
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
            ? 'bg-purple-600 text-white'
            : 'text-gray-600'
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
              className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100"
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
        className="flex items-center gap-2 p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
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
            className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
          >
            <Link
              href="/profile"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <User size={16} />
              Mon Profil
            </Link>
            <Link
              href="/settings"
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
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