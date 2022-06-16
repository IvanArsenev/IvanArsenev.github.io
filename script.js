$("#x").click(function(){$("#s").toggleClass("s");});
$("#x").click(function(){$("#x").toggleClass("y");});
$("#x").click(function(){$("#w").toggleClass("www");});

window.onscroll = function() {myFunction()};

function autoType(elementClass, typingSpeed){
  let thhis = $(elementClass);
  thhis.css({
    "position": "relative",
  });
  thhis.prepend('<div class="cursor" style="right: initial;"></div>');
  thhis = thhis.find(".text-js");
  let text = thhis.text().trim().split('');
  let amntOfChars = text.length;
  let newString = "";
  thhis.text("\xa0");
  setTimeout(function(){
    thhis.css("opacity",1);
    thhis.prev().removeAttr("style");
    thhis.text("\xa0");
    for(let i = 0; i < amntOfChars; i++){
      (function(i,char){
        setTimeout(function() {        
          newString += char;
          thhis.text(newString);
        },i*typingSpeed);
      })(i+1,text[i]);
    }
  },10);
}

$(document).ready(function(){
  autoType(".type-js",100);
});
function myFunction() {
    //console.log(document.documentElement.scrollTop);
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("abia").className = "row slr";
  }
  if (document.body.scrollTop > 620 || document.documentElement.scrollTop > 620) {
    document.getElementById("abib").className = "row sll";
  }
  if (document.body.scrollTop > 1120 || document.documentElement.scrollTop > 1120) {
    document.getElementById("abic").className = "row slr";
  }
  if (document.body.scrollTop > 1720 || document.documentElement.scrollTop > 1720) {
    document.getElementById("abid").className = "row sll";
  }
  if (document.body.scrollTop > 2220 || document.documentElement.scrollTop > 2220) {
    document.getElementById("abie").className = "row slr";
  }
}

window.addEventListener("scroll", myFuncA);

let svga = document.getElementById("svga");
let length = svga.getTotalLength();
svga.style.strokeDashoffset = length;
svga.style.strokeDasharray = length;

let svgb = document.getElementById("svgb");
let length2 = svgb.getTotalLength();
svgb.style.strokeDashoffset = length2;
svgb.style.strokeDasharray = length2;

let svgc = document.getElementById("svgc");
let length3 = svgc.getTotalLength();
svgc.style.strokeDashoffset = length3;
svgc.style.strokeDasharray = length3;

let svgd = document.getElementById("svgd");
let length4 = svgd.getTotalLength();
svgd.style.strokeDashoffset = length4;
svgd.style.strokeDasharray = length4;

let svge = document.getElementById("svge");
let length5 = svge.getTotalLength();
svge.style.strokeDashoffset = length5;
svge.style.strokeDasharray = length5;

let i = 0;

function myFuncA() {
  console.log("С начала страницы:" + document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 4100) {
    $('#ptc11').css("stroke-dasharray","calc(40 * 5.62 * 1.85)");
    $('#ptc11').add("stroke-dashoffset","20");
    $('#ptc11').css("transition","2s");
    $('#ptc22').css("stroke-dasharray","calc(40 * 5.25 * 1.85)");
    $('#ptc22').add("stroke-dashoffset","20");
    $('#ptc22').css("transition","2s");
    $('#ptc33').css("stroke-dasharray","calc(40 * 5.22 * 1.85)");
    $('#ptc33').add("stroke-dashoffset","20");
    $('#ptc33').css("transition","2s");
    $('#ptc44').css("stroke-dasharray","calc(40 * 5.9 * 1.85)");
    $('#ptc44').add("stroke-dashoffset","20");
    $('#ptc44').css("transition","2s");
  }
  if (document.documentElement.scrollTop < 790 && i==0) {
    svga.style.strokeDashoffset = length - document.documentElement.scrollTop*4;
    svgb.style.strokeDashoffset = -2500;
  }
  else if (document.documentElement.scrollTop >= 790 && document.documentElement.scrollTop < 1645 && i==0) {
    svga.style.strokeDashoffset = length - document.documentElement.scrollTop*4;
    svgb.style.strokeDashoffset = length2 - (document.documentElement.scrollTop + 900)*3;
    svga.style.strokeDashoffset = 0;
    svgc.style.strokeDashoffset = -2000;
  }
  else if (document.documentElement.scrollTop >= 1645 && document.documentElement.scrollTop < 2145 && i==0) {
    svgb.style.strokeDashoffset = 0;
    svgc.style.strokeDashoffset = length3 - (document.documentElement.scrollTop - 1600)*3.8;
    svgd.style.strokeDashoffset = -1950;
  }
  else if (document.documentElement.scrollTop >= 2145 && document.documentElement.scrollTop < 2630 && i==0) {
    svgc.style.strokeDashoffset = 0;
    svgd.style.strokeDashoffset = length4 - (document.documentElement.scrollTop - 2130)*4;
    svge.style.strokeDashoffset = -2840;
  }
  else if (document.documentElement.scrollTop >= 2630 && document.documentElement.scrollTop < 3000 && i==0) {
    svgd.style.strokeDashoffset = 0;
    svge.style.strokeDashoffset = length5 - (document.documentElement.scrollTop - 6905)*8;
  }
  else if (document.documentElement.scrollTop > 3000 && i==0) {
    svge.style.strokeDashoffset = 0;
    i = 1;
  }
  else if (document.documentElement.scrollTop < 3650){
    $("#nvb").removeClass("nvbw").addClass("nvbb");
    $(".linkw").removeClass("linkw").addClass("linkb");
  }
  else if (document.documentElement.scrollTop > 3650 && document.documentElement.scrollTop<4950) {
    $("#nvb").removeClass("nvbb").addClass("nvbw");
    $(".linkb").removeClass("linkb").addClass("linkw");
  }
  else if (document.documentElement.scrollTop > 4950 && document.documentElement.scrollTop<5900){
    $("#nvb").removeClass("nvbw").addClass("nvbb");
    $(".linkw").removeClass("linkw").addClass("linkb");
  }
  else if (document.documentElement.scrollTop > 5900) {
    $("#nvb").removeClass("nvbb").addClass("nvbw");
    $(".linkb").removeClass("linkb").addClass("linkw");
  }
}
