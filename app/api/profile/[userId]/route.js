import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(request, { params }) {
  try {
    // In Next.js App Router, params must be awaited in dynamic routes if used extensively or depending on version.
    // Next 15 requires `params` to be resolved, but since we are just extracting userId:
    const { userId } = await params;
    
    const result = await pool.query('SELECT data FROM tamer_profiles WHERE user_id = $1', [userId]);
    
    if (result.rows.length > 0) {
      return NextResponse.json(result.rows[0].data);
    } else {
      return NextResponse.json({ tamers: {}, activeId: null });
    }
  } catch (error) {
    console.error('Error fetching profile:', error);
    return NextResponse.json({ error: 'Failed to fetch profile' }, { status: 500 });
  }
}

export async function POST(request, { params }) {
  try {
    const { userId } = await params;
    const data = await request.json();
    
    await pool.query(
      `INSERT INTO tamer_profiles (user_id, data) 
       VALUES ($1, $2) 
       ON CONFLICT (user_id) DO UPDATE SET data = EXCLUDED.data`,
      [userId, JSON.stringify(data)]
    );
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error saving profile:', error);
    return NextResponse.json({ error: 'Failed to save profile' }, { status: 500 });
  }
}
