import{L as r,k as o}from"./entry.C6KMa1dF.js";const v=()=>({isEnabled:()=>{const e=o().query;return Object.prototype.hasOwnProperty.call(e,"preview")&&!e.preview?!1:!!(e.preview||r("previewToken").value||sessionStorage.getItem("previewToken"))},getPreviewToken:()=>r("previewToken").value||sessionStorage.getItem("previewToken")||void 0,setPreviewToken:e=>{r("previewToken").value=e,o().query.preview=e||"",e?sessionStorage.setItem("previewToken",e):sessionStorage.removeItem("previewToken"),window.location.reload()}});export{v as u};
//# sourceMappingURL=preview.BgjqDP8x.js.map
