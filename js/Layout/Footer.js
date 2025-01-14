export const InfoLinks = $("#InfoLinks");
export const InfoLinksElement = $("#InfoLinks p");
export const LogoFooter = $("#InfoLinks a")
InfoLinksElement.on("mouseover", function () {
  $(this).css({
    "color": "var(--bluMedio)",
    "cursor": "pointer"
  });
}).on("mouseleave", function () {
  $(this).css("color", "var(--bluChiaro)");
})

InfoLinksElement.on("click", function () {
  const route = this.textContent.toLowerCase().replace(/ /g, "");
  window.open(`/${route}`, "_blank");
})