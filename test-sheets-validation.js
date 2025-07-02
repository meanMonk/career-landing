#!/usr/bin/env node

/**
 * Test script for Google Sheets validation endpoint
 * 
 * Usage:
 *   node test-sheets-validation.js [base-url]
 * 
 * Examples:
 *   node test-sheets-validation.js http://localhost:3000
 *   node test-sheets-validation.js https://your-domain.com
 */

const baseUrl = process.argv[2] || 'http://localhost:3001'
const validationUrl = `${baseUrl}/api/validate-sheets`

console.log('🧪 Testing Google Sheets validation endpoint...')
console.log(`📍 URL: ${validationUrl}`)
console.log('⏳ Sending request...\n')

async function testValidation() {
  try {
    const response = await fetch(validationUrl,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const result = await response.json()

    console.log('📊 Response Status:',response.status)
    console.log('📄 Response Body:')
    console.log(JSON.stringify(result,null,2))

    if (result.success) {
      console.log('\n✅ Google Sheets validation PASSED!')
      console.log(`⚡ Response time: ${result.googleSheetsTest.responseTime}ms`)
    } else {
      console.log('\n❌ Google Sheets validation FAILED!')
      console.log(`🔍 Error: ${result.googleSheetsTest.error}`)

      if (!result.environmentCheck.hasGoogleScriptUrl) {
        console.log('\n💡 Fix: Set the GOOGLE_SCRIPT_URL environment variable')
        console.log('   Example: GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec')
      }
    }

  } catch (error) {
    console.log('\n💥 Request failed!')
    console.log(`🔍 Error: ${error.message}`)

    if (error.cause?.code === 'ECONNREFUSED') {
      console.log('\n💡 Fix: Make sure your server is running')
      console.log('   Try: npm run dev')
    }
  }
}

// Also test the GET endpoint to see API info
async function testInfo() {
  try {
    console.log('\n📖 Getting endpoint information...')
    const response = await fetch(validationUrl,{
      method: 'GET',
    })

    const result = await response.json()
    console.log('ℹ️  Endpoint Info:')
    console.log(JSON.stringify(result,null,2))

  } catch (error) {
    console.log('⚠️  Could not get endpoint info:',error.message)
  }
}

async function runTests() {
  await testValidation()
  await testInfo()

  console.log('\n🎯 Testing complete!')
  console.log('\nNext steps:')
  console.log('1. If validation failed, check your GOOGLE_SCRIPT_URL environment variable')
  console.log('2. If validation passed, try submitting the feedback form')
  console.log('3. Check your Google Sheet to see if data appears correctly')
}

runTests() 