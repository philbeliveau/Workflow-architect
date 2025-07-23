import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      email: string
      name: string
      role: "USER" | "ADMIN" | "INSTRUCTOR"
      subscription: "FREE" | "PREMIUM" | "ENTERPRISE"
    }
  }

  interface User {
    role: "USER" | "ADMIN" | "INSTRUCTOR"
    subscription: "FREE" | "PREMIUM" | "ENTERPRISE"
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: "USER" | "ADMIN" | "INSTRUCTOR"
    subscription: "FREE" | "PREMIUM" | "ENTERPRISE"
  }
}