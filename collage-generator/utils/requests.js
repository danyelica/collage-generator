import api from "../pages/api/api";

export default async function uploadFiles(formData) {
  try {
    const { data } = await api.post("/upload-multiple", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
}
