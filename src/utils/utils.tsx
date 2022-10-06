import * as htmlToImage from 'html-to-image';

export const capitalize = (s: string | any[]) => s && s[0].toUpperCase() + s.slice(1);

export const saveAs = (blob: any, fileName: string) => {
    let elem = (window.document.createElement('a') as any);
    elem.href = blob
    elem.download = fileName;
    elem.style = 'display:none;';
    (document.body || document.documentElement).appendChild(elem);
    if (typeof elem.click === 'function') {
        elem.click();
    } else {
        elem.target = '_blank';
        elem.dispatchEvent(new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        }));
    }
    URL.revokeObjectURL(elem.href);
    elem.remove()
}

export const saveDocumentSize = ({ id, quality = 1 }: { id: string, quality: number }) => {
    return htmlToImage.toPng(document.getElementById(id)!, {
        quality: 1,
        pixelRatio: quality
    })
        .then(function (dataUrl) {
            let base64str = dataUrl.substring(dataUrl.indexOf(',') + 1)
            let decoded = Buffer.from(base64str, 'base64');
            return (decoded.length / 1e+6).toFixed(2) + " MB";
        });
}

export const onCapture = ({ id, name, quality = 1 }: { id: string, name: string, quality?: number }) => {
    htmlToImage.toPng(document.getElementById(id)!, {
        quality: 1,
        pixelRatio: quality
    })
        .then(function (dataUrl) {
            saveAs(dataUrl, `${name.toLowerCase()}.png`);
        });
}

export const hexToRgb = (hex) =>
hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
           ,(m: any, r: string, g: string, b: string) => '#' + r + r + g + g + b + b)
  .substring(1).match(/.{2}/g)
  .map((x: string) => parseInt(x, 16))
