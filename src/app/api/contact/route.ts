import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  nom: z.string().min(1, 'Ce champ est requis.'),
  organisation: z.string().optional(),
  email: z.string().email('Adresse e-mail invalide.'),
  telephone: z.string().optional(),
  besoin: z.string().min(1, 'Ce champ est requis.')
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // TODO: Send transactional notification email using SMTP server or transactional provider (Resend/SendGrid)
    // process.env.SMTP_SERVER or process.env.RESEND_API_KEY
    console.log('Contact request received:', validatedData);

    return NextResponse.json(
      {
        success: true,
        message: 'Demande envoyée. Nous revenons vers vous sous 48 heures ouvrées.'
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.errors },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: 'L\'envoi a échoué. Réessayez ou écrivez-nous directement.' },
      { status: 500 }
    );
  }
}
