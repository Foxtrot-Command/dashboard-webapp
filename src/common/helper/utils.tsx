import * as htmlToImage from "html-to-image";

const downloadURL = (data: string, fileName: string) => {
  const a = document.createElement("a");
  a.href = data;
  a.download = fileName;
  document.body.appendChild(a);
  a.style.display = "none";
  a.click();
  a.remove();
};

export const calculateDocumentSize = async ({
  id,
  quality = 1,
}: {
  id: string;
  quality: number;
}) => {
  try {
    const element = document.getElementById(id);
    if (!element) {
      throw new Error(`Element with id ${id} not found.`);
    }

    const dataUrl = await htmlToImage.toPng(element, {
      quality: 1,
      pixelRatio: quality,
    });

    const base64str = dataUrl.substring(dataUrl.indexOf(",") + 1);
    const decoded = Buffer.from(base64str, "base64");

    return (decoded.length / 1000000).toFixed(2) + " MB";
  } catch (error) {
    console.error("Error calculating document size:", error);
    return null;
  }
};

const showImageInBlobFormat = (blob: Blob, title: string) => {
  const objectUrl = new window.Blob([blob], { type: "image/png" });
  const previewUrl = URL.createObjectURL(objectUrl);
  const previewWindow = window.open(previewUrl, "_blank") as Window;
  new window.WeakRef(previewWindow);

  const newTitle = `${title} | Preview`;
  previewWindow.document.title = newTitle;
};

const showPerformance = (fn: () => void) => {
  const t1 = performance.now();
  fn();
  const t2 = performance.now();
  console.log(`Generated thumbnails: ${((t2 - t1) * 0.001).toFixed(2)}s`);
};

export const captureHtmlAndSavePng = ({
  id,
  name,
  quality = 1,
}: {
  id: string;
  name: string;
  quality?: number;
}) => {
  htmlToImage
    .toPng(document.getElementById(id)!, {
      quality: 1,
      pixelRatio: quality,
    })
    .then((dataUrl) => {
      downloadURL(dataUrl, `${name.toLowerCase()}.png`);
    });
};

export const hexToRgb = (hex) => {
  if (!hex) return null;

  if (hex.length !== 7) return null;

  return hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m: any, r: string, g: string, b: string) => "#" + r + r + g + g + b + b,
    )
    .substring(1)
    .match(/.{2}/g)
    .map((x: string) => parseInt(x, 16));
};

export const capitalize = (word: string) => {
  return word.replace(/(^\w|\s\w)/g, (m) => m.toUpperCase());
};

type TObj = {
  [key: string]: any;
};

export function shallowEqual(object1: TObj, object2: TObj) {
  if (!object1 && !object2) return false;

  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}
