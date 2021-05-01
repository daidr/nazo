$(function () {
    let data = "d34d04ff16fd5a522637ad367a2b4256,d765cd9ba0a8486ed4af4a0827fee303,e2ff80672cb29d57dd595f4e0e80b025,dbc71a2fb26db86ece46a2d62fff88d8,62867f7f1edf5f9c4a9feb80c055ffa4";
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