import useUploadPhoto from "../hooks/useUploadPhoto";

const PhotoUpload = () => {
const {error, image, imageUrl, getInputProps, getRootProps} =useUploadPhoto();
  return (
    <>
      <div
        {...getRootProps()}
        className="size-52 rounded-full m-20 border relative"
      >
        <input {...getInputProps()} />
        {!image && (
          <p className="flex justify-center items-center h-full text-gray-600">
            select image
          </p>
        )}
        {image && (
          <img
            src={imageUrl}
            className="absolute top-0 left-0 object-cover rounded-full h-full "
          />
        )}
        {error && <p className="text-red-700 text-center w-full">{error}</p>}
      </div>
    </>
  );
};

export default PhotoUpload;
