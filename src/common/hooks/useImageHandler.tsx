import { useState } from "react";

const useImageHandler = () => {
  const [selectedImage, setSelectedImage] = useState<string | any>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const imageHandler = (event: React.ChangeEvent<HTMLInputElement> | null) => {
    if (event === null) {
      setSelectedImage(null);
      return;
    }
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImageFile(file);

      const reader = new FileReader();
      reader.onload = function (e: any) {
        setSelectedImage(e.target.result);
      };

      const fileNameWithoutExtension = file.name
        .split(".")
        .slice(0, -1)
        .join(".");
      setFileName(fileNameWithoutExtension);

      if (event.target instanceof HTMLInputElement && event.target.files) {
        if (!event.target.files[0]) return;

        reader.readAsDataURL(event.target.files[0]);
      }
    } else {
      setSelectedImage(null);
      setImageFile(null); // Reset the watermarked image state when the image is deleted
      setFileName(null);
    }
  };

  return { imageFile, fileName, selectedImage, imageHandler };
};

export default useImageHandler;
