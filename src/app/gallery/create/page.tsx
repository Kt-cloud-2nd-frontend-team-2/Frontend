'use client';
import { Controller, useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';
import ImageUpload from '@/components/galleryCreate/ImageUpload';
import CreateGalleryFormWrapper from '@/components/galleryCreate/FormWrapper';
import { FaArrowRight } from 'react-icons/fa';
type FormProps = {
  galleryName: string;
  galleryDesc: string;
  galleryImg: File | null;
  startDate: string;
  endDate: string | null;
};
export default function GalleryCreatePage() {
  const {
    register,
    watch,
    control,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm<FormProps>({
    mode: 'onChange',
    defaultValues: {
      galleryName: '',
      galleryDesc: '',
      galleryImg: null,
      startDate: '',
      endDate: null,
    },
  });
  const submitHandler = (e: FormProps) => {
    console.log(e);
    console.log('enqwjshewiudnjweh');
  };

  return (
    <>
      <div className={'flex w-full flex-col items-center px-[20px] py-[40px]'}>
        <div className={'flex w-full max-w-[576px] flex-col gap-[32px]'}>
          <div className={'flex items-center justify-between'}>
            <div className={'flex flex-col gap-1'}>
              <p className={'text-[28px] font-bold text-[#2C2826]'}>
                새 전시회 만들기
              </p>
              <p className={'text-[14px] text-[#2C282680]'}>
                해피아트 미술학원
              </p>
            </div>
            <div
              className={
                'flex h-10 w-10 cursor-pointer rounded-[14px] border border-[#2C282614] bg-white text-[#2C282680] duration-200 hover:font-bold hover:text-black'
              }
            >
              <IoClose className={'m-auto text-3xl'} />
            </div>
          </div>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div
              className={
                'flex w-full flex-col gap-6 rounded-[24px] border border-[#2C28260D] bg-white p-[33px] shadow-sm'
              }
            >
              <CreateGalleryFormWrapper
                title={'전시회 이름'}
                icon={'/createGallery/galleryName.png'}
                required
              >
                <input
                  {...register('galleryName', { required: true })}
                  className={'w-full bg-transparent outline-none'}
                  placeholder={'예: 봄의 소리전, 상상화전...'}
                />
              </CreateGalleryFormWrapper>
              <CreateGalleryFormWrapper
                title={'전시회 설명'}
                icon={'/createGallery/galleryDesc.png'}
                required
              >
                <textarea
                  rows={5}
                  {...register('galleryDesc', { required: true })}
                  placeholder={'전시회에 대한 소개를 작성해주세요...'}
                  className={
                    'w-full resize-none bg-transparent text-[16px] outline-none'
                  }
                />
              </CreateGalleryFormWrapper>

              <Controller
                name="galleryImg"
                control={control}
                render={({ field }) => (
                  <>
                    <CreateGalleryFormWrapper
                      className={'border-2 border-dashed'}
                      title={'배경 이미지'}
                      icon={'/createGallery/galleryImg.png'}
                    >
                      <ImageUpload
                        value={field.value}
                        onChange={field.onChange}
                      />
                    </CreateGalleryFormWrapper>
                    <p className="-mt-5 text-[12px] text-[#2C28264D]">
                      전시회 상세 페이지 및 리스트에 표시되는 대표 이미지입니다
                    </p>
                  </>
                )}
              />
              <div className={'flex w-full gap-4'}>
                <div className={'flex-1'}>
                  <CreateGalleryFormWrapper
                    title={'시작일'}
                    className={'py-3!'}
                    required
                    icon={'/createGallery/startDate.png'}
                  >
                    <input
                      {...register('startDate', { required: true })}
                      className={
                        'w-full bg-transparent text-[16px] font-bold text-black outline-none'
                      }
                      type={'date'}
                    />
                  </CreateGalleryFormWrapper>
                </div>
                <div className={'flex-1'}>
                  <CreateGalleryFormWrapper
                    title={'종료일'}
                    className={'py-3!'}
                    icon={'/createGallery/endDate.png'}
                  >
                    <input
                      {...register('endDate', {
                        validate: (value) => {
                          const start = watch('startDate');
                          if (!value) return true;
                          return value >= start || false;
                        },
                      })}
                      className={
                        'w-full bg-transparent text-[16px] font-bold text-black outline-none'
                      }
                      type={'date'}
                    />
                  </CreateGalleryFormWrapper>
                  {errors.endDate && (
                    <p className={'text-sm text-red-500'}>
                      *종료일은 시작일 이후여야 합니다.
                    </p>
                  )}
                </div>
              </div>
              <div className={'flex h-14 gap-3'}>
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`flex-1 rounded-[16px] bg-[#F4B942] text-[16px] font-bold text-white disabled:opacity-40`}
                >
                  다음: 작품 등록하기
                  <FaArrowRight className={'m-auto inline text-sm'} />
                </button>
                <button
                  className={
                    'rounded-[14px] border border-[#2C28260D] bg-[#FAF7F2] px-6 text-[16px] text-[#2C28264D]'
                  }
                >
                  취소
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
