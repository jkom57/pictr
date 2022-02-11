urlAlbums =  "https://jsonplaceholder.typicode.com/albums"
urlAlbumsId = "https://jsonplaceholder.typicode.com/photos?albumId="

$.get(urlAlbums, function (data, status) {
    $.each(data, function (obj, item) {
        $(".albums").append(
            `<option value="${item.id}"> ${item.title} </option>`
        )
    })
})

$(".albums").on("click", function () {
    let id = $(".albums").val()
    $.get(urlAlbumsId + id, function (data, status) {
        $.each(data, function (obj, item) {
            //console.log(item.thumbnailUrl);
            $(".grille").append(
                `<img src=" ${item.url} " alt="" class="col mx-2 my-2">`
            );
        })
    })
})