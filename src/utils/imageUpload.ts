/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import toast from "react-hot-toast";

interface UploadResult {
  secure_url?: string;
  error?: string;
}

const imageUpload = async (img: File): Promise<UploadResult> => {
  const data = new FormData();
  data.append("file", img);
  data.append("upload_preset", "stationaryApp_preset");

  try {
    const cloudName = "dgxvtrpmh";
    const resourceType = "image";
    const api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;

    const res = await axios.post(api, data);
    const { secure_url } = res.data;
    return { secure_url };
  } catch (error: any) {
    const message = error.response?.data?.message || "Image upload failed. Try again later.";
    toast.error(message);
    return { error: message };
  }
};

export default imageUpload;
