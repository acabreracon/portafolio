export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const name    = data.get('name')?.toString() || '';
  const email   = data.get('email')?.toString() || '';
  const subject = data.get('subject')?.toString() || '';
  const message = data.get('message')?.toString() || '';

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: 'Faltan campos requeridos' }), { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: 'Portfolio <onboarding@resend.dev>',
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
    console.error('Error al enviar email:', error);
    return new Response(JSON.stringify({ error: 'Error al enviar el email' }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
};