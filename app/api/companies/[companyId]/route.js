import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function PATCH(req, { params }) {
  try {
    const { userId } = auth();
    const { companyId } = params;
    const values = await req.json();

    if (!userId) {
      return new NextResponse('Unauthorised', { status: 401 });
    }

    const company = await db.company.update({
      where: {
        id: companyId,
        userId
      },
      data: {
        ...values
      }
    });

    return NextResponse.json(company);
  } catch (error) {
    console.log('[Internal Error]', { status: 500 });
  }
}
