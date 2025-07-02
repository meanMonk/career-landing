import { NextRequest, NextResponse } from 'next/server'

interface FeedbackData {
  email: string
  role: string
  company: string
  teamSize: string
  currentSolution: string
  biggestPain: string
  interestedFeatures: string[]
  willingToPay: string
  timestamp: string
}

// Validate email format
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate required fields
function validateFeedbackData(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Valid email is required')
  }

  if (!data.biggestPain || data.biggestPain.trim().length < 10) {
    errors.push('Please provide detailed feedback (at least 10 characters)')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// Send data to Google Sheets
async function sendToGoogleSheets(data: FeedbackData): Promise<{ success: boolean; error?: string }> {
  const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

  if (!GOOGLE_SCRIPT_URL) {
    return { success: false, error: 'Google Script URL not configured' }
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      return { success: false, error: `Google Sheets API returned ${response.status}` }
    }

    const result = await response.json()
    console.log(`result`, result)
    return { success: true }
  } catch (error) {
    console.error('Error sending to Google Sheets:', error)
    return { success: false, error: 'Failed to send data to Google Sheets' }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate the incoming data
    const validation = validateFeedbackData(body)
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          error: 'Validation failed',
          details: validation.errors
        },
        { status: 400 }
      )
    }

    // Prepare feedback data
    const feedbackData: FeedbackData = {
      email: body.email.trim().toLowerCase(),
      role: body.role || '',
      company: body.company || '',
      teamSize: body.teamSize || '',
      currentSolution: body.currentSolution || '',
      biggestPain: body.biggestPain.trim(),
      interestedFeatures: Array.isArray(body.interestedFeatures) ? body.interestedFeatures : [],
      willingToPay: body.willingToPay || '',
      timestamp: new Date().toISOString()
    }

    // Send to Google Sheets
    const result = await sendToGoogleSheets(feedbackData)

    if (!result.success) {
      console.error('Failed to send feedback to Google Sheets:', result.error)
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to save feedback. Please try again.',
          details: result.error
        },
        { status: 500 }
      )
    }

    // Log successful submission (without sensitive data)
    console.log('Feedback submitted successfully:', {
      email: feedbackData.email,
      role: feedbackData.role,
      timestamp: feedbackData.timestamp,
      featuresCount: feedbackData.interestedFeatures.length
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your feedback! We\'ll be in touch soon.',
        timestamp: feedbackData.timestamp
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error processing feedback submission:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error. Please try again later.'
      },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  console.log(`request`, request)
  return NextResponse.json(
    {
      message: 'Feedback submission endpoint',
      method: 'POST',
      requiredFields: ['email', 'biggestPain'],
      optionalFields: ['role', 'company', 'teamSize', 'currentSolution', 'interestedFeatures', 'willingToPay']
    },
    { status: 200 }
  )
} 