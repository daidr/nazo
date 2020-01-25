$(function () {
    let data = "d34d04ff16fd5a522637ad367a2b4256,ffe6ae4544d90c67cdb294f88a01037b,0973396d7bd0cfc7b8aeb9a5b6bce805,d18701ec119e29f13bce8f5cab50c796,96c28b91d4abb2cc90bc272a785cfe46";
    data = data.split(",")
    $(".verify").click(function () {
        let id = $(this).attr("data-id");
        if (hex_md5($(`.key[data-id=${id}]`).val()) == data[id - 1]) {
            alert("答案正确")
        } else {
            alert("答案错误")
        }

    });
})