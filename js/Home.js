
import { Details } from "./details.js";
import { Ui } from "./ui.js";



const link = document.querySelectorAll(".nav-link")

export class Home {

    constructor() {

        link.forEach(el => {
            el.addEventListener("click", () => {

                this.activeLink(el);
                const category = el.dataset.category
                this.getGames(category)
            });

        });

        this.ui = new Ui()

        this.loading = document.querySelector(".loading")
        this.getGames('mmorpg')
        this.details = document.querySelector(".details")
        this.main = document.querySelector(".main");
    }

    async activeLink(el) {
        document.querySelector(".navbar-nav .active").classList.remove("active");
        el.classList.add("active")

    }


    async getGames(cat) {

        this.loading.classList.remove("d-none")
        document.querySelector(".details-overlay").classList.remove("d-none")
        const api = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,
            {
                method: 'get',
                headers: {
                    'X-RapidAPI-Key': '5ea166b07bmsh37dc3492eeaeda1p176d70jsnd02257f323e7',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            }
        );
        const result = await api.json();
        this.loading.classList.add("d-none")
        document.querySelector(".details-overlay").classList.add("d-none")

        this.ui.displayGames(result);
        document.querySelectorAll(".card").forEach(item => {

            item.addEventListener("click", () => {
                this.details.classList.remove("d-none")
                this.main.classList.add("d-none")
                new Details(item.dataset.id)
            })
        })
        this.ui.displayDetails(result);
        return result
    }


}




