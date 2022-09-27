document.addEventListener('contextmenu', event => event.preventDefault());

$("#enter").click(function () {
    $("#enter").hide();
    let vid = $("#video");
    vid.prop("muted", false);
    vid.get(0).play();
});
