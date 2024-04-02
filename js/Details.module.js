import { Ui } from "./Ui.module.js"



export class Details {

    constructor(gameId) {

        this.getDetails(gameId)
        this.ui = new Ui()
        this.loading = document.querySelector(".loading")

        document.getElementById("closeBtn").addEventListener("click", () => {
            document.querySelector(".details").classList.add("d-none")
            document.querySelector(".main").classList.remove("d-none")
        });



        document.querySelector(".details").addEventListener("click", (e) => {
            e.target.id === 'detailsSection' ? this.closeImg() : ''
        })

        document.addEventListener("keyup", (event) => {
            event.code === 'Escape' ? this.closeImg() : ''
        })

    }

    closeImg() {
        document.querySelector(".showImg").classList.add("d-none")
    }


    async getDetails(gameId) {

        document.querySelector(".loading").classList.remove("d-none")
        document.querySelector(".details-overlay").classList.remove("d-none")
        const options = {
            method: 'get',
            headers: {
                'X-RapidAPI-Key': '5ea166b07bmsh37dc3492eeaeda1p176d70jsnd02257f323e7',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }

        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, options)
        const result = await api.json();
        this.loading.classList.add("d-none")
        document.querySelector(".details-overlay").classList.add("d-none")
        this.ui.displayDetails(result)
    }


}