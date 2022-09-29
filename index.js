let icon = document.querySelector(".home .hed i");
icon.onclick = () => {
  document.querySelector("  .home .header .hed ul").style.display == "flex"
    ? (document.querySelector("  .home .header .hed ul").style.display = "none")
    : (document.querySelector("  .home .header .hed ul").style.display =
        "flex");
};
let pounter = Array.from(
  document.querySelectorAll(".home .header .control span")
);
let textarr = Array.from(document.querySelectorAll(".home .header .three h1"));
let order = 0;
pounter.forEach((p, i) => {
  p.addEventListener("click", () => {
    order = i;
    pounter.forEach((e) => e.classList.remove("active"));
    p.classList.add("active");
    textarr.forEach((t) => t.classList.remove("active"));
    textarr[i].classList.add("active");
  });
});
let arrbody = Array.from(document.querySelectorAll("body > div"));
setInterval(() => {
  order == 2 ? (order = 0) : order++;
  textarr.forEach((t) => t.classList.remove("active"));
  textarr[order].classList.add("active");
  pounter.forEach((e) => e.classList.remove("active"));
  pounter[order].classList.add("active");
}, 3000);
let navarr = Array.from(document.querySelectorAll(".home .header .hed a"));
let hed = document.querySelector(".home .header .hed ");
document.body.onscroll = () => {
  scrollY >= 250 ? hed.classList.add("scrol") : hed.classList.remove("scrol");
  arrbody.forEach((d) => {
    if (d.offsetTop - 50 <= scrollY) {
      navarr.forEach((a) => {
        if (a.dataset.gold == d.id) {
          navarr.forEach((e) => e.classList.remove("active"));
          a.classList.add("active");
        }
      });
    }
  });
};
let boxs = document.querySelector(".home .value .boxs");
let random = Array.from(document.querySelectorAll(".home .value .box h2"));
let set = setInterval(() => {
  random.forEach((r) => {
    r.dataset.gold == r.textContent
      ? (r.textContent = r.dataset.gold)
      : r.textContent++;
    random[1].textContent == random[1].dataset.gold
      ? clearInterval(set)
      : random[1].textContent++;
    random[1].textContent == random[1].dataset.gold
      ? clearInterval(set)
      : random[1].textContent++;
    random[1].textContent == random[1].dataset.gold
      ? clearInterval(set)
      : random[1].textContent++;
  });
}, 0);
let arrli = Array.from(document.querySelectorAll(".projects li"));
let imgarr = Array.from(document.querySelectorAll(".projects .chamel"));
arrli.forEach((li) => {
  li.addEventListener("click", () => {
    arrli.forEach((e) => e.classList.remove("active"));
    li.classList.add("active");
    imgarr.forEach((i) => {
      i.classList.contains(li.id)
        ? (i.style.display = "flex")
        : (i.style.display = "none");
    });
  });
});
let seri = Array.from(document.querySelectorAll(".fluzi .fott .row"));
imgarr.forEach((i, index) => {
  i.addEventListener("click", () => {
    document.querySelector(".fluzi").style.display = "flex";
    document.querySelector(".fluzi .box").innerHTML = seri[index].innerHTML;
    seri[index].classList.add("active");
  });
});
seri.forEach((i) => {
  i.addEventListener("click", () => {
    document.querySelector(".fluzi .box").innerHTML = i.innerHTML;
    seri.forEach((e) => e.classList.remove("active"));
    i.classList.add("active");
  });
});
document.querySelector(".fluzi i").onclick = () =>
  (document.querySelector(".fluzi").style.display = "none");
