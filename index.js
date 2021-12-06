$(document).ready(() => {
    $("#sabmit").click(() => {
        const jeneng = $("#jeneng").val()
        const hinaan = ["Anjing", "Kontol", "Asu", "Memeq", "Bau", "Ganteng", "Cantik"]
        const randHina = hinaan[Math.floor(Math.random() * hinaan.length)]
        console.log(jeneng)
        $("#jeneng").val("")
        alert("Halo " + jeneng + "\nLo " + randHina + "👍")
    })
})