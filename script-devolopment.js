function createSummaryAndThumb(a,b,c){
function n(){
var a=j.split("-");
var b=a[0];
var c=a[1];
var d=a[2];
var e=a[3];
$("."+j).css({position:"absolute",clip:"rect("+b+"px "+c+"px "+d+"px "+e+"px "+")",top:"-"+b+"px",left:"-"+e+"px"})}
var d=c.substring(0,c.length);
var e=c.substring(0,400);
var f=document.getElementById(a);
var g="";
var h=f.getElementsByTagName("img");
var i=230;
if(h.length>=1){var j=$(h).attr("data-crop");
var k=h[0].src}
else{var k="";
var j=null}
if(c.length>=40){
var l="<a href='"+b+"' title='"+c+"'>"+e+"</a>"+""
}
else{
var l="<a href='"+b+"' title='"+c+"'>"+d+"</a>"}if(h.length>=1){g='<div class="crop"><a class="img_link" href="'+b+'" title="'+c+'"><span class="overlay"></span><span class="'+j+'"><img id="post-thumbnail" data-crop="'+j+'" src="'+k+'" /></span></a></div>';
i=55
}
else {
g='<div class="crop"><p><a href="'+b+'" title="'+c+'"><img class="post-thumbnail" src="https://lh6.googleusercontent.com/-awUpTwXvXLA/TqGq48PBP5I/AAAAAAAAAuM/eLbVSgoo1mY/s210/no_image.png" /></a></p></div>';
i=55
}
var m=g+'<div class="truncated-title"><h2>'+l+"</h2></div>"+'<div class="post-summary">'+removeHtmlTag(f.innerHTML,i)+"</div>";
f.innerHTML=m;
if(j!=null||j!=undefined){
n()}
}
function overlay(){
jQuery(".img_link").hover(
function(){
jQuery(this).find(".overlay").stop().animate({opacity:1},200)},function(){jQuery(this).find(".overlay").stop().animate({opacity:0},200)})}function removeHtmlTag(a,b){if(a.indexOf("<")!=-1){var c=a.split("<");for(var d=0;d<c.length;d++){if(c[d].indexOf(">")!=-1){c[d]=c[d].substring(c[d].indexOf(">")+1,c[d].length)}}a=c.join("")}b=b<a.length-1?b:a.length-2;while(a.charAt(b-1)!=" "&&a.indexOf(" ",b)!=-1)b++;a=a.substring(0,b-1);return a+"..."}$(document).ready(function(){overlay()})
