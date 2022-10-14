$("#home").click(function () {
    $("#dashboardContent").css("display","inline")
    $("#customerContent").css("display","none")
    $("#itemContent").css("display","none")
    $("#orderContent").css("display","none")
    $("#orderDetailContent").css("display","none")
});

$("#customer").click(function () {
    $("#dashboardContent").css("display","none")
    $("#customerContent").css("display","flex")
    $("#itemContent").css("display","none")
    $("#orderContent").css("display","none")
    $("#orderDetailContent").css("display","none")
});


$("#item").click(function () {
    $("#dashboardContent").css("display","none")
    $("#customerContent").css("display","none")
    $("#itemContent").css("display","flex")
    $("#orderContent").css("display","none")
    $("#orderDetailContent").css("display","none")
});

$("#orders").click(function () {
    $("#dashboardContent").css("display","none")
    $("#customerContent").css("display","none")
    $("#itemContent").css("display","none")
    $("#orderContent").css("display","flex")
    $("#orderDetailContent").css("display","none")
});

$("#order-Detail").click(function () {
    $("#dashboardContent").css("display","none")
    $("#customerContent").css("display","none")
    $("#itemContent").css("display","none")
    $("#orderContent").css("display","none")
    $("#orderDetailContent").css("display","flex");
});