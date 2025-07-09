'use client'

import { useSession, signOut } from 'next-auth/react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function AuthButton() {
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-600 rounded-full animate-pulse"></div>
      </div>
    )
  }

  if (session) {
    return (
      <div className="flex items-center gap-4">
        <Link href="/dashboard">
          <span className="text-text-secondary hover:text-text-primary transition-colors duration-200">
            Dashboard
          </span>
        </Link>
        <Button
          variant="outline"
          size="sm"
          onClick={() => signOut({ callbackUrl: '/' })}
        >
          Sign Out
        </Button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <Link href="/auth/signin">
        <Button variant="outline" size="sm">
          Sign In
        </Button>
      </Link>
      <Link href="/auth/signup">
        <Button variant="primary" size="sm">
          Sign Up
        </Button>
      </Link>
    </div>
  )
}