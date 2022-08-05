import * as htmlToImage from 'html-to-image';

export const capitalize = (s: string | any[]) => s && s[0].toUpperCase() + s.slice(1);

export const saveAs = (blob: any, fileName: string) => {
    var elem = (window.document.createElement('a') as any);
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

export const onCapture = (id: any, cardName: string) => {
    htmlToImage.toPng(document.getElementById(id)!, { quality: 1})
        .then(function (dataUrl) {
            saveAs(dataUrl, `${cardName.toLowerCase()}.png`);
        });
}