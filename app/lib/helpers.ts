import axios from "axios";

export const createPDF = async (filename: string, resume: string) => {
  try {
    const res = await axios.post(
      "/api/convertToPdf",
      { content: resume },
      {
        responseType: "blob",
      }
    );
    const pdfBlob = new Blob([res.data], { type: "application/pdf" });
    const url = window.URL.createObjectURL(pdfBlob);
    const tempLink = document.createElement("a");
    tempLink.href = url;
    tempLink.setAttribute("download", filename);

    document.body.appendChild(tempLink);
    tempLink.click();

    document.body.removeChild(tempLink);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.log(error);
  }
};
