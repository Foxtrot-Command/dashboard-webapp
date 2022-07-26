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

export function svg_to_png(container) {
    var wrapper: any = document.getElementById(container);
    var svg: any = wrapper.querySelector("svg");

    if (typeof window.XMLSerializer != "undefined") {
        var svgData: any = (new XMLSerializer()).serializeToString(svg);
    } else if (typeof svg.xml != "undefined") {
        var svgData: any = svg.xml;
    }

    var canvas = document.createElement("canvas");
    var svgSize = svg.getBoundingClientRect();
    canvas.width = svgSize.width;
    canvas.height = svgSize.height;
    var ctx: any = canvas.getContext("2d");

    var img = document.createElement("img");
    img.setAttribute("src", "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData))) );

    img.onload = function() {
        ctx.drawImage(img, 0, 0);
        var imgsrc = canvas.toDataURL("image/png");

        var a = document.createElement("a");
        a.download = container+".png";
        a.href = imgsrc;
        a.click();
    };
}