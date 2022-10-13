$("#home").click(function () {
    $("#dashboardContent").css("display","inline")
    $("#customerContent").css("display","none")
    $("#itemContent").css("display","none")
    $("#orderContent").css("display","none")
});

$("#customer").click(function () {
    $("#dashboardContent").css("display","none")
    $("#customerContent").css("display","flex")
    $("#itemContent").css("display","none")
    $("#orderContent").css("display","none")
});

$("#item").click(function () {
    $("#dashboardContent").css("display","none")
    $("#customerContent").css("display","none")
    $("#itemContent").css("display","flex")
    $("#orderContent").css("display","none")
});

$("#orders").click(function () {
    $("#dashboardContent").css("display","none")
    $("#customerContent").css("display","none")
    $("#itemContent").css("display","none")
    $("#orderContent").css("display","flex")
});