import api from "../pages/api/mainApi";
import secondApi from "../pages/api/secondApi";

export async function uploadFiles(formData) {
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

export async function uploadSite(body) {
  try {
    const { data } = await secondApi.post("/", body);

    return data;
  } catch (error) {
    console.log(error);
  }
}
