# Google Sheets Integration Setup

This guide explains how to set up Google Sheets integration for the feedback form.

## Overview

The feedback form collects user responses and sends them to a Google Sheet via Google Apps Script. This setup allows you to:

- Automatically collect feedback responses in a structured format
- Validate the connection before going live
- Handle errors gracefully if the connection fails

## Setup Steps

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "Feedback Responses"
4. Set up the following column headers in row 1:
   - `timestamp`
   - `email`
   - `role`
   - `company`
   - `teamSize`
   - `currentSolution`
   - `biggestPain`
   - `interestedFeatures`
   - `willingToPay`
   - `isValidationTest`

### 2. Create Google Apps Script

1. In your Google Sheet, go to `Extensions` → `Apps Script`
2. Replace the default code with this script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    
    // Prepare the row data
    const rowData = [
      data.timestamp || new Date().toISOString(),
      data.email || '',
      data.role || '',
      data.company || '',
      data.teamSize || '',
      data.currentSolution || '',
      data.biggestPain || '',
      Array.isArray(data.interestedFeatures) ? data.interestedFeatures.join(', ') : '',
      data.willingToPay || '',
      data.isValidationTest || false
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, timestamp: new Date().toISOString() }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error
    console.error('Error processing feedback:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: error.toString(),
        timestamp: new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Save the script (Ctrl+S or Cmd+S)
4. Name your project (e.g., "Feedback Form Handler")

### 3. Deploy the Script

1. Click `Deploy` → `New deployment`
2. Choose `Web app` as the type
3. Set the following options:
   - **Execute as**: Me (your email)
   - **Who has access**: Anyone
4. Click `Deploy`
5. **Important**: Copy the Web app URL - you'll need this for the environment variable

### 4. Configure Environment Variables

1. Copy the `.env.example` file to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Add your Google Apps Script URL:
   ```
   GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec
   ```

### 5. Test the Integration

You can test the Google Sheets integration in several ways:

#### Option 1: Use the test script
```bash
node test-sheets-validation.js
```

#### Option 2: Test via API directly
```bash
# Test the validation endpoint
curl -X POST http://localhost:3000/api/validate-sheets

# Test the submit endpoint
curl -X POST http://localhost:3000/api/submit \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "biggestPain": "This is a test submission to validate the integration"
  }'
```

#### Option 3: Use the feedback form
1. Start your development server: `npm run dev`
2. Go to your landing page
3. Fill out and submit the feedback form
4. Check your Google Sheet for the new row

## API Endpoints

### `POST /api/submit`
Submits feedback data to Google Sheets.

**Required fields:**
- `email` (valid email address)
- `biggestPain` (minimum 10 characters)

**Optional fields:**
- `role`, `company`, `teamSize`, `currentSolution`, `interestedFeatures`, `willingToPay`

### `POST /api/validate-sheets`
Tests the connection to Google Sheets without submitting real data.

**Response includes:**
- Connection status
- Response time
- Environment configuration check
- Detailed error messages if connection fails

## Troubleshooting

### Common Issues

1. **"GOOGLE_SCRIPT_URL environment variable not configured"**
   - Make sure you've set the `GOOGLE_SCRIPT_URL` in your `.env.local` file
   - Restart your development server after adding the variable

2. **"Google Sheets API returned 403"**
   - Your Apps Script deployment might not allow public access
   - Redeploy with "Who has access: Anyone"

3. **"Network error: Could not connect to Google Sheets"**
   - Check your internet connection
   - Verify the Google Apps Script URL is correct
   - Make sure the script is deployed and active

4. **Data appears in wrong columns**
   - Verify your Google Sheet headers match the expected format
   - Check the Apps Script code matches the field order

### Validation Test Results

The validation endpoint will help you diagnose issues:

- ✅ **Success**: Connection working, data can be sent
- ❌ **Environment Error**: Missing or invalid `GOOGLE_SCRIPT_URL`
- ❌ **Network Error**: Cannot reach Google Apps Script
- ❌ **Permission Error**: Apps Script denies access
- ❌ **Script Error**: Error in your Apps Script code

## Security Notes

- The Google Apps Script runs with your Google account permissions
- Only use "Anyone" access if you're comfortable with public submissions
- Consider adding additional validation in your Apps Script if needed
- Monitor your Google Sheet for spam or abuse

## Production Deployment

When deploying to production:

1. Set the `GOOGLE_SCRIPT_URL` environment variable in your hosting platform
2. Test the validation endpoint in production
3. Monitor your Google Sheet for incoming data
4. Consider setting up email notifications in your Google Sheet for new submissions 