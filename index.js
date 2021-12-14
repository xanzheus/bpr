$(document).ready(() => {
    $("#sabmit").on("click", () => {
        const jeneng = $("#jeneng").val()
        if (!jeneng) return $(".notif").text("Harus di isi ya Cantik")
        if (jeneng.includes("Ilham")) {
            $("#jeneng").val("")
            swal("Halo " + jeneng, "Kamu Ganteng, Bijaksana, Dan Pintar👍")
        }
        const hinaan = ["Camtik", "Gamteng", "Lucuu", "Anu", "Bawuu", "Ngangenin"]
        const randHina = hinaan[Math.floor(Math.random() * hinaan.length)]
        $("#jeneng").val("")
        $(".notif").text("")
        return swal("Halo " + jeneng, "Kamu " + randHina)
    })
})
