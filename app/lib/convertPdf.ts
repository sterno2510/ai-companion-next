const puppeteer = require("puppeteer");

const convertToPDF = async (coverLetter: string) => {
  console.log("Starting to convert to PDF");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const htmlContent = coverLetter;

  await page.setContent(htmlContent, { waitUntil: "networkidle0" });

  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  return pdfBuffer;
};

module.exports = {
  convertToPDF,
};
