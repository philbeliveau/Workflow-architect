import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma"

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const session = await getServerSession()
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { title, content, isPrivate } = body

    // Verify the note belongs to the user
    const existingNote = await prisma.note.findFirst({
      where: {
        id: id,
        userId: session.user.id
      }
    })

    if (!existingNote) {
      return NextResponse.json({ error: "Note not found" }, { status: 404 })
    }

    const note = await prisma.note.update({
      where: {
        id: id
      },
      data: {
        title,
        content,
        isPrivate: isPrivate ?? existingNote.isPrivate
      }
    })

    return NextResponse.json(note)
  } catch (error) {
    console.error("Error updating note:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const session = await getServerSession()
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    // Verify the note belongs to the user
    const existingNote = await prisma.note.findFirst({
      where: {
        id: id,
        userId: session.user.id
      }
    })

    if (!existingNote) {
      return NextResponse.json({ error: "Note not found" }, { status: 404 })
    }

    await prisma.note.delete({
      where: {
        id: id
      }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting note:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}