'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { BookOpen, Users, Clock, CheckCircle } from 'lucide-react'

interface Course {
  id: string
  title: string
  description: string
  slug: string
  isPublished: boolean
  price: number | null
  createdAt: string
  folders: Array<{ id: string; name: string }>
  progress: Array<{ progress: number }>
}

export default function CoursesPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [courses, setCourses] = useState<Course[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin')
    }
  }, [status, router])

  useEffect(() => {
    if (session) {
      fetchCourses()
    }
  }, [session])

  const fetchCourses = async () => {
    try {
      const response = await fetch('/api/courses')
      if (response.ok) {
        const data = await response.json()
        setCourses(data)
      }
    } catch (error) {
      console.error('Error fetching courses:', error)
    } finally {
      setLoading(false)
    }
  }

  if (status === 'loading' || loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  if (!session) return null

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">AI Training Courses</h1>
          <p className="text-gray-400">Explore our comprehensive AI training curriculum</p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <BookOpen className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400 text-lg">No courses available yet</p>
              <p className="text-gray-500 mt-2">Check back soon for new courses!</p>
            </div>
          ) : (
            courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          )}
        </div>

        {/* Demo Courses (for testing) */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Demo Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DemoCourseCard
              title="Introduction to AI"
              description="Learn the fundamentals of artificial intelligence and machine learning"
              duration="4 weeks"
              students={1250}
              price="Free"
            />
            <DemoCourseCard
              title="Advanced Neural Networks"
              description="Deep dive into neural network architectures and training techniques"
              duration="6 weeks"
              students={890}
              price="$99"
            />
            <DemoCourseCard
              title="AI Ethics & Governance"
              description="Understand the ethical implications and governance of AI systems"
              duration="3 weeks"
              students={670}
              price="$49"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function CourseCard({ course }: { course: Course }) {
  const progress = course.progress[0]?.progress || 0

  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white">{course.title}</h3>
        {course.price ? (
          <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
            ${course.price}
          </span>
        ) : (
          <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">
            Free
          </span>
        )}
      </div>
      
      <p className="text-gray-300 mb-4 line-clamp-3">{course.description}</p>
      
      {progress > 0 && (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-400">Progress</span>
            <span className="text-sm text-gray-400">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
      
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">
          {course.folders.length} modules
        </span>
        <Button size="sm" href={`/courses/${course.slug}`}>
          {progress > 0 ? 'Continue' : 'Start Course'}
        </Button>
      </div>
    </div>
  )
}

function DemoCourseCard({ 
  title, 
  description, 
  duration, 
  students, 
  price 
}: {
  title: string
  description: string
  duration: string
  students: number
  price: string
}) {
  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <span className={`px-3 py-1 rounded text-sm ${
          price === 'Free' ? 'bg-green-600' : 'bg-blue-600'
        } text-white`}>
          {price}
        </span>
      </div>
      
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Users className="w-4 h-4" />
          <span>{students.toLocaleString()} students</span>
        </div>
      </div>
      
      <Button size="sm" className="w-full">
        Enroll Now
      </Button>
    </div>
  )
}