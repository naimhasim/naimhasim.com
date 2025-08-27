import { NextResponse } from 'next/server';

const GENERIC_ERROR_MESSAGE = 'Resume not available';
const PDF_FILENAME = 'RESUME-MUHAMAD-NAIM-BIN-HASIM.pdf';
const CACHE_DURATION = 3600; // 1 hour

function createErrorResponse(message: string, status: number = 500): NextResponse {
  return new NextResponse(message, { status });
}

function createPdfResponse(pdfBuffer: ArrayBuffer): NextResponse {
  return new NextResponse(pdfBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${PDF_FILENAME}"`,
      'Cache-Control': `public, max-age=${CACHE_DURATION}`,
    },
  });
}

async function fetchResumeFromBlob(url: string): Promise<ArrayBuffer> {
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  
  return response.arrayBuffer();
}

export async function GET(): Promise<NextResponse> {
  try {
    const resumeUrl = process.env.RESUME_URL;
    
    if (!resumeUrl) {
      console.error('RESUME_URL environment variable is not configured');
      return createErrorResponse(GENERIC_ERROR_MESSAGE);
    }

    const pdfBuffer = await fetchResumeFromBlob(resumeUrl);
    return createPdfResponse(pdfBuffer);
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Failed to serve resume:', errorMessage);
    return createErrorResponse(GENERIC_ERROR_MESSAGE);
  }
}
