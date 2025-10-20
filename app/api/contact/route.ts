export async function POST(request: Request) {
    const data = await request.json();

    // Basic validation
    if (!data.name || !data.email || !data.message) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
    }

    // Here you would typically handle the form submission, e.g., send an email or save to a database

    return new Response(JSON.stringify({ success: true }), { status: 200 });
}