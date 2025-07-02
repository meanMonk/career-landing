import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const dataFilePath = path.join(process.cwd(), 'data', 'feedback.json')

interface FeedbackData {
  id: string
  name: string
  email: string
  company?: string
  message: string
  callInterest: boolean
  timestamp: string
}

async function getFeedbackData(): Promise<FeedbackData[]> {
  try {
    if (!existsSync(dataFilePath)) {
      return []
    }
    const data = await readFile(dataFilePath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading feedback data:', error)
    return []
  }
}

export async function GET() {
  try {
    const feedbackData = await getFeedbackData()

    return NextResponse.json({
      success: true,
      count: feedbackData.length,
      data: feedbackData.sort((a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      )
    })
  } catch (error) {
    console.error('Error fetching feedback data:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 