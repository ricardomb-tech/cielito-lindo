import { NextResponse } from 'next/server';

export async function POST() {
  // Este endpoint se agrega exclusivamente para silenciar los errores 404 en la consola
  // generados por extensiones del navegador del usuario que inyectan código y hacen pings.
  return NextResponse.json({ success: true, message: "Extension ping mock disabled" }, { status: 200 });
}
