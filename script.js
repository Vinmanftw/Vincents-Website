var tabButtons=document.querySelectorAll(".tabContainer .buttons button");
var tabPages=document.querySelectorAll(".tabContainer .page");


function showPage(pageIndex,colorC,textColor) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[pageIndex].style.backgroundColor=colorC;
    tabButtons[pageIndex].style.color=textColor;
    tabPages.forEach(function(node){
        node.style.display="none";
    });
    tabPages[pageIndex].style.display="block";
    tabPages[pageIndex].style.backgroundColor=colorC;
    document.body.style.backgroundColor=colorC;
}
showPage(0,'grey','black');