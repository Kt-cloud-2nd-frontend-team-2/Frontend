import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient();
    const body = await req.formData();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ message: 'no session' }, { status: 401 });
    }

    let data, error;

    let thumbnailUrl: null | string = null;

    const thumbnailImg = body.get('galleryImg');
    const title = body.get('galleryName');
    const description = body.get('galleryDesc');
    const guidelines = body.get('guideLines');
    const start_date = new Date(body.get('startDate') as string);
    const end_date = body.get('endDate');

    // console.log(user);
    if (thumbnailImg) {
      const randomId = crypto.randomUUID();
      const url = `${randomId}.jpg`;
      ({ error } = await supabase.storage
        .from('thumbnails')
        .upload(`${url}`, thumbnailImg));

      ({ data } = supabase.storage.from('thumbnails').getPublicUrl(`${url}`));
      thumbnailUrl = data.publicUrl;
      if (error) {
        console.log(error);
        return NextResponse.json(
          { message: 'img convert Error' },
          { status: 500 }
        );
      }
    }
    ({ data, error } = await supabase
      .from('exhibitions')
      .insert({
        teacher_id: user.id,
        title,
        description,
        guidelines,
        thumbnail_url: thumbnailUrl,
        start_date,
        end_date,
      })
      .select('id'));

    if (error) {
      console.log(error);
      return NextResponse.json(
        { message: 'database insertion error' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'successfully inserted', createdId: data?.[0]?.id },
      { status: 200 }
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: 'unkwon Error' }, { status: 500 });
  }
}
