var boy=document.getElementById("boy");
idleImageNumber =1;
idleAnimationNumber =0;



function idleAnimation(){
    idleImageNumber = idleImageNumber +1;
    if (idleImageNumber == 16){
        idleImageNumber =1;
    }

    boy.src="assets/image/boy/Idle%20("+idleImageNumber+").png";
}
function idleAnimationStart(){
    idleAnimationNumber = setInterval(idleAnimation,200);
}





runImageNumber =1;
runAnimationNumber=0;

function runAnimation() {
    runImageNumber = runImageNumber+1;

    if (runImageNumber == 16){
        runImageNumber =1;
    }

    boy.src="assets/image/boy/Run%20("+runImageNumber+").png";

}
function runAnimationStart(){
    runAnimationNumber = setInterval(runAnimation,200);
    clearInterval(idleAnimationNumber);
}


jumpImageNumber=1;
jumpAnimationNumber=0;
boyMarginTop=300;
function jumpAnimation() {
    jumpImageNumber=jumpImageNumber+1;

if (jumpImageNumber<=9){
    boyMarginTop=boyMarginTop-20;
    boy.style.marginTop=boyMarginTop+"px";
}
if (jumpImageNumber>=8){
    boyMarginTop=boyMarginTop+20;
    boy.style.marginTop=boyMarginTop+"px";

}


    if (jumpImageNumber==15){

        jumpImageNumber=1;

        clearInterval(jumpAnimationNumber);
        jumpAnimationNumber=0;
        runImageNumber=0;
        runAnimationStart();
    }

    boy.src="assets/image/boy/Jump%20("+jumpImageNumber+").png"

}
function jumpAnimationStart() {
    clearInterval(idleAnimationNumber);
    runImageNumber=0;
    clearInterval(runAnimationNumber);
    jumpAnimationNumber=setInterval(jumpAnimation,100);

}
function keyCheck(event){
   // alert(event.which);

    var keyCode=event.which;

    if (keyCode==13){
        if (runAnimationNumber==0){
            runAnimationStart();
        }

    if (moveBackgoundAnimationId==0){
       moveBackgoundAnimationId= setInterval(moveBackgound,100);
    }
}
    if (keyCode==32){
        if (jumpAnimationNumber==0){
            jumpAnimationStart();
        }
        if (moveBackgoundAnimationId==0){
            moveBackgoundAnimationId= setInterval(moveBackgound,100);
        }
    }
}


var backgoundImagePositionX = 0;
var moveBackgoundAnimationId= 0;

function moveBackgound() {
    backgoundImagePositionX =backgoundImagePositionX-20;


    document.getElementById("background").style.backgroundPositionX=backgoundImagePositionX+"px";


}

boxMarginLeft=1500;

function createBoxes() {

    for (var i=0;i<=10;i++) {


        var box = document.createElement("div");
        box.className = "box";
        document.getElementById("background").appendChild(box);
        box.style.marginLeft = boxMarginLeft + "px";

       boxMarginLeft=boxMarginLeft+1000;

       if (i<5){
           boxMarginLeft=boxMarginLeft+500;
       }
       if (i>=5){
           boxMarginLeft=boxMarginLeft+250;
       }
    }
}