$(() => {
    $('.wavepath1').wavify({
        height: 20,
        bones: 2,
        amplitude: 30,
        color: 'rgba(37, 37, 37, .7)',
        speed: .35
    });
    $('.wavepath2').wavify({
        height: 10,
        bones: 2,
        amplitude: 30,
        color: 'rgba(37, 37, 37, .5)',
        speed: .25
    });
    $('.wavepath3').wavify({
        height: 15,
        bones: 2,
        amplitude: 30,
        color: 'rgba(37, 37, 37, .3)',
        speed: .15
    });
    $(".push").click(() => {
        var data = [];
        $("select").each(function () {
            if (!$(this).val()) {
                data.push("_")
            } else {
                data.push($(this).val())
            }
        });
        if (!$(".qq").val()) {
            alert("请输入你的QQ号");
            return;
        } else {
            data.push($(".qq").val())
        }
        data = ddlj.encode(btoa(data.toString()));
        $(".keyarea").val(data);
        $(".question").slideUp(100);
        $(".key").slideDown(100);
    });
})