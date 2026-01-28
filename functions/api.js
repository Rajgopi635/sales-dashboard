export async function onRequestPost({ request }) {

const body = await request.json();

return new Response(
"Saved lead for " + body.client,
{ headers: { "Content-Type": "text/plain" } }
);

}
