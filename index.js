$(document).ready(() => {
    $("#sabmit").on("click", () => {
        const jeneng = $("#jeneng").val()
        if (!jeneng) return $(".notif").text("Harus di isi ya Cantik")
        if (jeneng.includes("Ilham")) {
            $("#jeneng").val("")
            swal("Halo " + jeneng, "Kamu Ganteng, Bijaksana, Dan Pintar👍")
        }
        const hinaan = ["Camtik xixi", "Gamteng hwhwwh", "Lucuu cmiw", "Centil ahha", "Bawuu wlee", "Ngangenin hhi"]
        const randHina = hinaan[Math.floor(Math.random() * hinaan.length)]
        $("#jeneng").val("goblog")
        $(".notif").text("goblog")
        return swal("Halo " + jeneng, "Kamu " + randHina)
    })
})
