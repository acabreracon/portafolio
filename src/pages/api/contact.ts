export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();

  const name    = body.name?.toString() || '';
  const email   = body.email?.toString() || '';
  const subject = body.subject?.toString() || '';
  const message = body.message?.toString() || '';

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Faltan campos requeridos' }), { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'alejandrocabrerac@hotmail.com',
    subject: `[Portfolio] ${subject}`,
    html: `
      <h2>Nuevo mensaje de tu portafolio</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Asunto:</strong> ${subject}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    console.error('Resend error:', JSON.stringify(error));
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};