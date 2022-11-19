var boy=document.getElementById("boy");
idleImageNumber =0;
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





runImageNumber =0;
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
function keyCheck(event){
   // alert(event.which);

    var keyCode=event.which;

    if (keyCode==13){
        if (runAnimationNumber==0){
            runAnimationStart();
        }
    }
}