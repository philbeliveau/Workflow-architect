import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest) {
  const session = await getServerSession()
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const courseId = searchParams.get("courseId")

  try {
    const notes = await prisma.note.findMany({
      where: {
        userId: session.user.id,
        ...(courseId && { courseId })
      },
      orderBy: {
        updatedAt: "desc"
      }
    })

    return NextResponse.json(notes)
  } catch (error) {
    console.error("Error fetching notes:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  const session = await getServerSession()
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { title, content, courseId, isPrivate = true } = body

    const note = await prisma.note.create({
      data: {
        title,
        content,
        courseId,
        isPrivate,
        userId: session.user.id
      }
    })

    return NextResponse.json(note, { status: 201 })
  } catch (error) {
    console.error("Error creating note:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}