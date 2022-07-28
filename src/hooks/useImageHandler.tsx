import { useState, useRef, useEffect } from "react"

const useImageHandler = () => {

    const [selectedImage, setSelectedImage] = useState<string | any>(null);

    const imageHandler = (event: Event | null) => {

        if(event === null) {
            setSelectedImage(null);
            return;
        }

        let reader = new FileReader();
        reader.onload = function (e: any) {
          setSelectedImage(e.target.result);
        };
        if (event.target instanceof HTMLInputElement && event.target.files) {
          reader.readAsDataURL(event.target.files[0]);
        }
      }

    return {selectedImage, imageHandler}
}

export default useImageHandler;