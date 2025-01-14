export const Vetrina = $("#Vetrina")
export const ContenitoreVetrina = $("#ContenitoreVetrina")
export const Carosello = $(`<div class="glide"></div>`)
const GlideTrack = $(`<div class="glide__track" data-glide-el="track"></div>`)
const GlideSlides = $(`<div class="glide__slides"></div>`)
const GlideBullets = $(`<div class="glide__bullets" data-glide-el="controls[nav]"></div>`)

ContenitoreVetrina.append(Carosello)
Carosello.append(GlideTrack)
GlideTrack.append(GlideSlides)
Carosello.append(GlideBullets)

var games = [
  { nome: "Fifa 15", sconto: "60" },
  { nome: "Elden Ring", sconto: "40" },
  { nome: "Call of Duty", sconto: "35" },
  { nome: "Grand Theft Auto V", sconto: "50" },
  { nome: "Forza Horizon 5", sconto: "30" }
]

for(let i=0; i<games.length; i++){
  const GamesId = games[i].nome.replace(/ /g, '')
  const GamesURL = new URL(`../../media/carosello/${GamesId}.jpg`, import.meta.url).href

  const GlideSlide = $(`<div class="glide__slide" id="${GamesId}"></div>`)
  const GlideSlideTitle = $(`<p class="glide__slide__title">${games[i].nome} <span>-${games[i].sconto}%</span></p>`)
  GlideBullets.append(`<button class="glide__bullet" data-glide-dir="=${i}"></button>`)
  GlideSlide.css({
    "background": `url(${GamesURL})`,
    "background-size": "cover",
    "background-position": "center"
  })
  Carosello.on("mouseover",function(){
    Carosello.addClass("GlowBlu")
    GlideSlide.append(GlideSlideTitle)
  }).on("mouseleave", function(){
    Carosello.removeClass("GlowBlu")
    GlideSlideTitle.remove()
  })
  GlideSlides.append(GlideSlide)
}

const GlideConfig = {
  type: "carousel",
  startAt: 0,
  perView: 1,
  autoplay: 3000,
  hoverpause: true,
  keyboard: true,
}

new Glide('.glide', GlideConfig).mount()

