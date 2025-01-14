import { ContenitoreVetrina } from "./Carosello.js"
export const ListaGiochi = $(`<div id="ListaGiochi"></div>`)
ContenitoreVetrina.append(ListaGiochi)

const games2 = [
  {nome: "The Witcher 3", sconto: "30"},
  {nome: "Hollow Knight", sconto: "50"},
  {nome: "Borderlands 3", sconto: "80"},
  {nome: "Cyberpunk 2077", sconto: "20"},
  {nome: "Mass Effect Saga", sconto: "20"},
  {nome: "Red Dead Redemption 2", sconto: "30"},
  {nome: "The Binding of Isaac", sconto: "30"},
  {nome: "NBA 2K25", sconto: "70"},
  {nome: "Euro Truck Simulator 2", sconto: "30"}
]

for(let i=0; i<games2.length; i++){
  const Games2Id = games2[i].nome.replace(/ /g, '')
  
  const GamesCard = $(`<div id="${Games2Id}" class="GamesCard"></div>`)
  const GamesCardImg = $(`<img src="https://placehold.co/1920x1080/446391/98ACCF" alt="${games2[i].nome}" class="GamesCardImg">`)
  const GamesCardText = $(`<div class="GamesCardText"></div>`)
  const GamesCardTitle = $(`<p class="GamesCardTitle">${games2[i].nome}</p>`)
  const GamesCardSconto = $(`<span class="GamesCardSconto">-${games2[i].sconto}%</span>`)
  ListaGiochi.append(GamesCard)
  GamesCard.append(GamesCardImg)
  GamesCard.append(GamesCardText)
  GamesCardText.append(GamesCardTitle)
  GamesCard.append(GamesCardSconto)

  GamesCard.on("mouseover", function(){
    GamesCard.addClass("GlowRosso")
  }).on("mouseleave", function(){
    GamesCard.removeClass("GlowRosso")
  })
}