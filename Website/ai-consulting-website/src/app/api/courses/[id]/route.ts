import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma"

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const session = await getServerSession()
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const course = await prisma.course.findUnique({
      where: {
        id: id,
        isPublished: true
      },
      include: {
        folders: {
          include: {
            materials: {
              where: {
                isPublished: true
              }
            },
            children: {
              include: {
                materials: {
                  where: {
                    isPublished: true
                  }
                }
              }
            }
          },
          where: {
            parentId: null
          }
        },
        progress: {
          where: {
            userId: session.user.id
          }
        }
      }
    })

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 })
    }

    return NextResponse.json(course)
  } catch (error) {
    console.error("Error fetching course:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const session = await getServerSession()
  
  if (!session || session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { title, description, content, price, isPublished } = body

    const course = await prisma.course.update({
      where: {
        id: id
      },
      data: {
        title,
        description,
        content,
        price: price ? parseFloat(price) : null,
        isPublished
      }
    })

    return NextResponse.json(course)
  } catch (error) {
    console.error("Error updating course:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}