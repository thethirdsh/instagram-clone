import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configure Cloudinary
cloudinary.config({ cloudinary_url: process.env.CLOUDINARY_URL! });

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { file } = body;

    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 });
    }

    const result = await cloudinary.uploader.upload(file, {
      resource_type: 'auto', // Auto-detect file type
      folder: 'uploads',    // Optional: Organize uploads in a folder
    });

    return NextResponse.json({ url: result.secure_url }, { status: 200 });
  } catch (error: unknown) {
    console.error('Cloudinary upload error:', error);
    return NextResponse.json({ error: 'Failed to upload to Cloudinary' }, { status: 500 });
  }
}
