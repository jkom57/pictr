urlAlbums =  "https://jsonplaceholder.typicode.com/albums"
urlAlbumsId = "https://jsonplaceholder.typicode.com/photos?albumId="

$.get(urlAlbums, function (data, status) {
    $.each(data, function (obj, item) {
        $("#albums").append(
            `<option value="${item.id}"> ${item.title} </option>`
        )
    })
})

$("#albums").on("click", function () {
    let id = $("#albums").val()
    $.get(urlAlbumsId + id, function (data, status) {
        let imgUrl = []
        $.each(data, function (obj, item) {
            imgUrl.push(item.url)
            console.log(imgUrl)
        })
        for (let index = 0; index < imgUrl.length; index++) {
            console.log(imgUrl[index])
            $("#grille").append(
                `<img src=" ${imgUrl[index]} " alt="" class="col mx-2 my-2">`
            );
        }
    })
})