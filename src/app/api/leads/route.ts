import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation
    const { name, email, whatsapp, interestedIn, budget, location, contactTime, country, source, message } = body;
    
    if (!name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }
    
    if (!email && !whatsapp) {
      return NextResponse.json(
        { error: 'Either email or WhatsApp number is required' },
        { status: 400 }
      );
    }
    
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: 'Invalid email format' },
          { status: 400 }
        );
      }
    }

    // TODO: Implement Rate Limiting
    // e.g., using Upstash Redis or similar to prevent spam
    // const ip = request.headers.get('x-forwarded-for') ?? '127.0.0.1';
    // await rateLimit(ip);

    const leadData = {
      name,
      email: email || 'N/A',
      whatsapp: whatsapp || 'N/A',
      interestedIn: interestedIn || 'N/A',
      budget: budget || 'N/A',
      location: location || 'N/A',
      contactTime: contactTime || 'N/A',
      country: country || 'IN',
      source: source || 'Website',
      message: message || 'N/A',
      timestamp: new Date().toISOString(),
    };

    // Log the lead (placeholder for actual CRM integration)
    console.log('--- NEW LEAD CAPTURED ---');
    console.log(JSON.stringify(leadData, null, 2));
    console.log('-------------------------');

    // TODO: HubSpot / Zoho / Salesforce Integration Point
    // const crmResponse = await fetch('YOUR_CRM_WEBHOOK_URL', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(leadData)
    // });
    
    // if (!crmResponse.ok) throw new Error('Failed to send lead to CRM');

    // TODO: Send internal notification (e.g., Slack, Email to sales team)
    // await sendSlackNotification(leadData);

    return NextResponse.json(
      { success: true, message: 'Lead captured successfully' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing your request' },
      { status: 500 }
    );
  }
}
