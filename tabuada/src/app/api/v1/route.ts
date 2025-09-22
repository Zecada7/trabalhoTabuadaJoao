import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const n = Number(searchParams.get('numero'));
  if (isNaN(n)) {
    return Response.json({ erro: 'Informe um número válido.' }, { status: 400 });
  }
  const tabuada = [];
  for (let i = 1; i <= 10; i++) {
    tabuada.push(`${n} x ${i} = ${n * i}`);
  }
  return Response.json({ tabuada });
}