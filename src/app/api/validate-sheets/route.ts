import { NextRequest, NextResponse } from 'next/server';

// Test payload for validation
const testPayload = {
  email: 'test@validation.com',
  role: 'validation',
  company: 'Test Company',
  teamSize: '1-5',
  currentSolution: 'Testing connectivity',
  biggestPain: 'Validation test - this is a test entry to check Google Sheets connectivity',
  interestedFeatures: ['test-feature'],
  willingToPay: 'validation',
  timestamp: new Date().toISOString(),
  isValidationTest: true
}

async function testGoogleSheetsConnection(): Promise<{ success: boolean; status?: number; error?: string; responseTime?: number }> {
  const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL

  if (!GOOGLE_SCRIPT_URL) {
    return {
      success: false,
      error: 'GOOGLE_SCRIPT_URL environment variable not configured'
    }
  }

  const startTime = Date.now()

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testPayload),
    })

    const responseTime = Date.now() - startTime

    if (!response.ok) {
      return {
        success: false,
        status: response.status,
        error: `Google Sheets API returned ${response.status}: ${response.statusText}`,
        responseTime
      }
    }

    // Try to parse the response
    try {
      const result = await response.json()
      console.log(`parse result`, result)
      return {
        success: true,
        status: response.status,
        responseTime
      }
    } catch (parseError) {
      return {
        success: true,
        status: response.status,
        responseTime,
        error: 'Response received but could not parse JSON (this might be normal)'
      }
    }

  } catch (error) {
    const responseTime = Date.now() - startTime
    console.error('Error testing Google Sheets connection:', error)

    if (error instanceof TypeError && error.message.includes('fetch')) {
      return {
        success: false,
        error: 'Network error: Could not connect to Google Sheets',
        responseTime
      }
    }

    return {
      success: false,
      error: `Connection test failed: ${error instanceof Error ? error.message : 'Unknown error'}`,
      responseTime
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const result = await testGoogleSheetsConnection()

    const response = {
      timestamp: new Date().toISOString(),
      googleSheetsTest: result,
      environmentCheck: {
        hasGoogleScriptUrl: !!process.env.GOOGLE_SCRIPT_URL,
        nodeEnv: process.env.NODE_ENV || 'unknown'
      }
    }

    if (result.success) {
      console.log('Google Sheets validation successful:', {
        status: result.status,
        responseTime: result.responseTime
      })

      return NextResponse.json(
        {
          success: true,
          message: 'Google Sheets connection validated successfully',
          ...response
        },
        { status: 200 }
      )
    } else {
      console.warn('Google Sheets validation failed:', result)

      return NextResponse.json(
        {
          success: false,
          message: 'Google Sheets connection validation failed',
          ...response
        },
        { status: 200 } // Still return 200 since the validation endpoint itself worked
      )
    }

  } catch (error) {
    console.error('Error in validation endpoint:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Validation endpoint error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  console.log(`request`,request);
  return NextResponse.json(
    {
      message: 'Google Sheets validation endpoint',
      description: 'Use POST to test connectivity to Google Sheets',
      testPayload: {
        description: 'This endpoint sends a test payload to verify Google Sheets integration',
        fields: Object.keys(testPayload)
      }
    },
    { status: 200 }
  )
} 