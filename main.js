urlAlbums =  "https://jsonplaceholder.typicode.com/albums"
urlAlbumsId = "https://jsonplaceholder.typicode.com/photos?albumId="
urlImagesId = "https://jsonplaceholder.typicode.com/photos/"

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
        let imgId = []
        let imgTitle = []
        $.each(data, function (obj, item) {
            imgId.push(item.id)
            imgUrl.push(item.url)
            imgTitle.push(item.title)
        });
        albums = albumsAppended(imgId, imgUrl, imgTitle)
        $("#grille").html(albums);
    })
})

function albumsAppended (imgId, imgUrl, imgTitle) {
    let albums = ''
    for (let index = 0; index < imgUrl.length; index++) {
        albums += `<div class"card">
        <img src="${imgUrl[index]}" alt="" class="mx-2 my-2 img-fluid image" id="${imgId[index]}">
        <div class="card-body">
        <center>
        <h5 class="card-title">
        ${imgTitle[index]}
        </h5>
        </center>
        </div></div>`
    }
    return albums
}

$(document).on("click", "img", function () {
    let imageId = $(this).closest(".image").attr("id")

    $.get(urlImagesId + imageId, function (data, status) {
        $(".imageModal").html(
            `<div class="imageModal>"`+
            `<center><h2>${data.title}</h2></center>`+
            `<img src="${data.url}" class="img-fluid">`+
            `</div>`
        )
    })

    $("#modalToShow").modal('show')
})