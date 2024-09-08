export const handleDownload = async () => {
  try {
    const filePath = "/assets/files/cv.pdf";

    const response = await fetch(filePath);

    if (!response.ok) {
      throw new Error("Failed to fetch file");
    }

    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = blobUrl;
    link.target = "_blank";
    link.download = "JG_CV.pdf";
    link.click();

    setTimeout(() => {
      URL.revokeObjectURL(blobUrl);
    }, 500);
  } catch (error) {
    console.error("Error downloading file:", error);
  }
};
