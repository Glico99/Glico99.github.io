const ContenitoreBestDeals = $("#ContenitoreBestDeals");

const Banner = new URL("../../media/Banner.jpg", import.meta.url).href;

ContenitoreBestDeals.css({
  "background": `url("${Banner}")`,
  "background-size": "cover",
  "background-position": "center"
}).on("mouseenter", function () {
  ContenitoreBestDeals.addClass("GlowBlu");
  ContenitoreBestDeals.css("cursor", "pointer");
}).on("mouseleave", function () {
  ContenitoreBestDeals.removeClass("GlowBlu");
});