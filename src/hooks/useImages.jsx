import { useEffect, useState } from "react";
import { getImages } from "../herpers";

export const useImages = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllImages = async () => {
    const newImages = await getImages();
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getAllImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
