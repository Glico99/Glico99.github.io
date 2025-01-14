import { Vetrina, ContenitoreVetrina } from "./Carosello.js"
Vetrina.on("click", function(event){
  if (ContenitoreVetrina.css("opacity") == 1 && event.target == this){
    ContenitoreVetrina.animate({
      "opacity": "0"
    }, 100)
  }else{
    ContenitoreVetrina.animate({
      "opacity": "1"
    }, 100)
  }
})