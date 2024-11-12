import { NextRequest, NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function POST(req: NextRequest) {
  try {
    console.log("Starting to convert to PDF");
    const { content } = await req.json();

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(content, { waitUntil: "networkidle0" });

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume.pdf"',
      },
    });
  } catch (error) {
    console.error("Error generating PDF", error);
    return new NextResponse(JSON.stringify({ error: "Error generating PDF" }), {
      status: 500,
    });
  }
}
