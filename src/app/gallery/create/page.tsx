'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Form } from '@base-ui/react';
import ImageUpload from '@/components/galleryCreate/ImageUpload';
import CreateGalleryFormWrapper from '@/components/galleryCreate/FormWrapper';
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
      <div
        className={'flex flex-col items-center py-[40px] px-[20px]  w-full '}
      >
        <div className={' flex flex-col gap-[32px] max-w-[576px] w-full'}>
          <div className={'flex justify-between items-center'}>
            <div className={'flex flex-col gap-1 '}>
              <p className={'font-bold text-[28px] text-[#2C2826]'}>
                새 전시회 만들기
              </p>
              <p className={'text-[#2C282680] text-[14px]'}>
                해피아트 미술학원
              </p>
            </div>
            <div
              className={
                'w-10 h-10  border border-[#2C282614] bg-white rounded-[14px] flex hover:text-black hover:font-bold text-[#2C282680] duration-200 cursor-pointer'
              }
            >
              <p className={'m-auto text-[20px]  '}>x</p>
            </div>
          </div>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div
              className={
                ' bg-white w-full  flex flex-col gap-6 p-[33px] rounded-[24px] border border-[#2C28260D] shadow-sm'
              }
            >
              <CreateGalleryFormWrapper
                title={'전시회 이름'}
                icon={'/createGallery/galleryName.png'}
                required
              >
                <input
                  {...register('galleryName', { required: true })}
                  className={'outline-none w-full bg-transparent'}
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
                    'text-[16px]  outline-none w-full bg-transparent resize-none '
                  }
                />
              </CreateGalleryFormWrapper>

              <Controller
                name="galleryImg"
                control={control}
                render={({ field }) => (
                  <CreateGalleryFormWrapper
                    title={'배경 이미지'}
                    icon={'/createGallery/galleryImg.png'}
                  >
                    <ImageUpload
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </CreateGalleryFormWrapper>
                )}
              />
              <div className={'flex w-full  gap-4'}>
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
                        '  text-[16px]   text-black font-bold outline-none w-full bg-transparent '
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
                        '  text-[16px]  text-black font-bold outline-none w-full bg-transparent '
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
              <div className={'flex gap-3 h-14 '}>
                <button
                  type="submit"
                  disabled={!isValid}
                  className={`bg-[#F4B942] flex-1 text-[16px] font-bold text-white disabled:opacity-40 rounded-[16px]`}
                >
                  다음: 작품 등록하기
                </button>
                <button
                  className={
                    'px-6 rounded-[14px] text-[#2C28264D] text-[16px] bg-[#FAF7F2] border  border-[#2C28260D]'
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
