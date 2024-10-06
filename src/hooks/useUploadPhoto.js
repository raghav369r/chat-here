import { useState } from "react";
import { useDropzone } from "react-dropzone";

const useUploadPhoto = () => {
  const [error, setError] = useState("");
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const fileSizeLimit = 5 * 1024 * 1024; // 5 MB size limit

  const onDrop = (acceptedFiles, rejectedFiles) => {
    console.log("droped");
    setError("");
    if (
      rejectedFiles.length > 0 ||
      !acceptedFiles?.[0].type.startsWith("image/")
    ) {
      setError("Please upload a valid image file.");
      return;
    }
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImageUrl(e.target.result);
      };
      reader.readAsDataURL(file);
    }
    setImage(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxSize: fileSizeLimit,
    multiple: false,
  });
  const revalidate = () => {
    setImage("");
    setImageUrl("");
  };
  return { error, image, imageUrl, getRootProps, getInputProps, revalidate };
};

export default useUploadPhoto;
