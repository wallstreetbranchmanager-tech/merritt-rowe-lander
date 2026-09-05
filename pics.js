const PARTS = {
  claire: ["claire.b64"],
  crash: ["crash.b64"],
  fall: ["fall.b64"],
  jobsite: ["jobsite.b64"]
};
async function loadPic(name, img) {
  const texts = await Promise.all(PARTS[name].map(function (f) { return fetch(f).then(function (r) { return r.text(); }); }));
  img.src = "data:image/jpeg;base64," + texts.join("").replace(/\s/g, "");
}
document.querySelectorAll("img[data-pic]").forEach(function (img) { loadPic(img.dataset.pic, img); });
