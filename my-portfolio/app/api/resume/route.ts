import resume from '@/data/resume.json';

export const revalidate = 60;

export async function GET() {
  return Response.json(resume, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    },
  });
}


