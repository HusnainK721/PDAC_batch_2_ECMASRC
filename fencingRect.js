const fencingRect=(r, numberoflayer, rateofwire)=>{
const parameterofshape=3.14*r
const fencingwirelength =parameterofshape * numberoflayer
const costofwire= fencingwirelength* rateofwire;
return costofwire  
}
console.log(fencingRect(7,4,12))