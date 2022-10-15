import { useEffect, useRef, useState } from "react";

const useImageLoaded = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const ref = useRef();

  const onLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    if (ref.current && (ref.current as any).complete) {
      onLoad();
    }
  }, []);

  return [ref, loaded, onLoad];
};
export default useImageLoaded;
