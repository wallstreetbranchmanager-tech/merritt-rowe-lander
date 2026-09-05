const PARTS = {
  claire: ["claire-0.b64", "claire-1.b64", "claire-2.b64"],
  crash: ["crash-0.b64", "crash-1.b64", "crash-2.b64", "crash-3.b64"],
  fall: ["fall-0.b64", "fall-1.b64", "fall-2.b64", "fall-3.b64", "fall-4.b64", "fall-5.b64"],
  jobsite: ["jobsite-0.b64", "jobsite-1.b64", "jobsite-2.b64", "jobsite-3.b64", "jobsite-4.b64"]
};
async function loadPic(name, img) {
  const texts = await Promise.all(PARTS[name].map(function (f) { return fetch(f).then(function (r) { return r.text(); }); }));
  img.src = "data:image/jpeg;base64," + texts.join("").replace(/\s/g, "");
}
document.querySelectorAll("img[data-pic]").forEach(function (img) { loadPic(img.dataset.pic, img); });
