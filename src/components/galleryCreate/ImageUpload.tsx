import { useRef } from 'react';
import Image from 'next/image';

export default function ImageUpload({
  value,
  onChange,
}: {
  value: File | null;
  onChange: (file: File) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const preview = value ? URL.createObjectURL(value) : null;

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    onChange(file);
  };

  return (
    <div className="flex flex-col gap-1">
      <div
        onClick={handleClick}
        className="flex items-center justify-center cursor-pointer overflow-hidden"
      >
        {preview ? (
          <img src={preview} className="w-full h-full object-contain" />
        ) : (
          <div className="flex flex-col py-6 items-center gap-2 text-[#2C28264D]">
            <Image
              src="/createGallery/imgUploadIcon.png"
              alt="uploadIcon"
              width={40}
              height={40}
            />
            <p className="text-[14px]">
              클릭하거나 이미지를 드래그해서 올려주세요.
            </p>
            <p className="text-[12px]">JPG, PNG, WEBP 등 이미지 파일</p>
          </div>
        )}
      </div>

      <p className="text-[12px] text-[#2C28264D]">
        전시회 상세 페이지 및 리스트에 표시되는 대표 이미지입니다
      </p>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
}
