const Prodotti = $("#Prodotti");
const PiuVenduti = $(`<div class="PiuVenduti">Più Venduti</div>`);
Prodotti.append(PiuVenduti);

const ProdottiPiuVenduti = $(`<div id="ProdottiPiuVenduti"></div>`);
Prodotti.append(ProdottiPiuVenduti);




//Griglia piu venduti
for (let i=0; i<40; i++){
  const Prodotto = $(`<div class="Prodotto"></div>`);
  const ScontoProdotti = $(`<p class="ScontoProdotti"></p>`);
  Prodotto.append(ScontoProdotti);
  
  Prodotto.css({
    "background": "url('https://placehold.co/250x400/446391/98ACCF')",
    "background-size": "cover",
    "background-position": "center"
  }).on("mouseenter", function(){
    Prodotto.addClass("GlowBlu");
    ScontoProdotti.css("block-size", "30px");
    ScontoProdotti.append(`<span>60€</span><span>20€</span>`);
  }).on("mouseleave", function(){
    Prodotto.removeClass("GlowBlu");
    ScontoProdotti.empty();
    ScontoProdotti.css("block-size", "0px");
  });

  
  ProdottiPiuVenduti.append(Prodotto);
}

// Tasto Mostra Altri Prodotti
const MostraAltriProdotti = $("<p class='MostraAltriProdotti'></div>");
MostraAltriProdotti.append(`<p class="MostraAltriProdottiTesto">Mostra Altri Prodotti</p>`);
MostraAltriProdotti.append(`<p class="MostraAltriProdottiFreccia">\u29E8</p>`);

MostraAltriProdotti.on("click", function(){
  if(ProdottiPiuVenduti.css("block-size") == "700px"){
    ProdottiPiuVenduti.css("block-size", "1200px");
    
    $(".MostraAltriProdottiFreccia").text("\u25EE");
    $(".MostraAltriProdottiTesto").text("Nascondi Altri Prodotti");
  }else{
    ProdottiPiuVenduti.css("block-size", "700px");
    $(".MostraAltriProdottiFreccia").text("\u29E8");
    $(".MostraAltriProdottiTesto").text("Mostra Altri Prodotti");
  }
}).on("mouseenter", function(){
  MostraAltriProdotti.css("cursor", "pointer");
});

Prodotti.append(MostraAltriProdotti);
