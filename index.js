$(document).ready(() => {
    $("#sabmit").on("click", () => {
        const jeneng = $("#jeneng").val()
        if (!jeneng) return $(".notif").text("Nama Harus Diisi Goblok")
        if (jeneng.includes("Ilham")) {
            $("#jeneng").val("")
            swal("Halo " + jeneng, "Lo Ganteng, Bijaksana, Dan Pintar👍")
        }
        const hinaan = ["Anjing", "Kontol", "Asu", "Memeq", "Bau", "Ganteng", "Cantik"]
        const randHina = hinaan[Math.floor(Math.random() * hinaan.length)]
        $("#jeneng").val("")
        $(".notif").text("")
        return swal("Halo " + jeneng, "Lo " + randHina)
    })
})
