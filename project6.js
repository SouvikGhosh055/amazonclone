let arr = [
    {dp:"https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1481214110143-ed630356e1bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"},

    {  dp:"https://images.unsplash.com/photo-1581404917879-53e19259fdda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    story:"https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
        },

        {  dp:"https://images.unsplash.com/photo-1560087637-bf797bc7796a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",story:"hhttps://plus.unsplash.com/premium_photo-1682096186855-3f32647abe68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            },

            {  dp:"https://images.unsplash.com/photo-1602442787305-decbd65be507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",story:"https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHdvbWVufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
                },
]
let clutter = ""
let storiyan = document.querySelector("#storiyan");
arr.forEach(function(elem,idx){
  clutter += `<div class="story">
  <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function (dets) {
    document.querySelector(".full-screen").style.display = "block"
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`

    setTimeout(function () {
        document.querySelector(".full-screen").style.display = "none"
    },3000)
});
    