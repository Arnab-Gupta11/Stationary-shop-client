import imageUpload from "./imageUpload";

export const uploadFile = async (data: File[]) => {
  const uploadResults = await Promise.all(
    data.map(async (file) => {
      const result = await imageUpload(file);
      return result.secure_url || null;
    })
  );
  const imageUrls = uploadResults.filter((url): url is string => !!url);
  console.log("After Uploading===>", imageUrls);
  return imageUrls;
};
