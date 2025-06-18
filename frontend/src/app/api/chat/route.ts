
export async function POST(request: Request) {
    const body = await request.json();
    const { message } = body;

    return new Response(JSON.stringify({ reply: `Echo: ${ message }`}), {
        status: 201,
        headers: { 'Content-Type': 'application/json' }
    });

}