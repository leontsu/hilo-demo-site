import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json(
    {
      ok: true,
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'hilo-demo-site',
    },
    {
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    }
  )
}


