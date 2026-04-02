import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        console.log('🔔 Received webhook request:', body)

        const n8nUrl = 'https://n8n.n8yland.me/webhook-test/1848ff7e-d750-48dc-b208-415137862401'
        console.log('📤 Forwarding to n8n:', n8nUrl)

        const response = await fetch(n8nUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })

        const responseText = await response.text()
        console.log('📥 n8n response status:', response.status)
        console.log('📥 n8n response body:', responseText)

        if (!response.ok) {
            console.error('❌ n8n webhook failed:', response.status, responseText)
            return NextResponse.json(
                { 
                    error: 'Failed to process webhook',
                    details: responseText,
                    status: response.status 
                },
                { status: response.status }
            )
        }

        console.log('✅ Email submitted successfully')
        return NextResponse.json(
            { success: true, message: 'Email submitted successfully' },
            { status: 200 }
        )
    } catch (error) {
        console.error('❌ Webhook proxy error:', error)
        return NextResponse.json(
            { 
                error: 'Internal server error',
                details: error instanceof Error ? error.message : String(error)
            },
            { status: 500 }
        )
    }
}
