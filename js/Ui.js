

let cardContainer = document.getElementById("cardContainer")

export class Ui {

    constructor() {



    }
    closeImg() {
        document.querySelector(".showImg").classList.add("d-none")
    }


    displayGames(data) {

        let displayBox = ``
        for (let i = 0; i < data.length; i++) {

            let words = data[i].short_description.split(' ');
            let shortDescription = words.slice(0, 8).join(' ');
            displayBox += `
            <div class="col">
                    <div data-id=${data[i].id} class="card gameCard p-3">
                        <img class="w-100" src="${data[i].thumbnail}" alt="${data[i].title}">
                        <div class="my-3 d-flex justify-content-between align-items-center">
                            <h5 class="fs-6"> ${data[i].title} </h5>
                            <span class=" btn free"> Free </span>
                        </div>
                        <p class=" info-fs"> ${shortDescription} </p>
                        <div class=" card-footer px-0 d-flex justify-content-between">
                            <div class="footer-fs p-1 rounded-3"> ${data[i].genre} </div>
                            <div class="footer-fs p-1 rounded-3"> ${data[i].platform} </div>
                        </div>
                    </div>
                </div>
            `
        }
        cardContainer.innerHTML = displayBox
    }
    displayDetails(data) {

        let boxDetails = `
    <div class="col-md-4">
        <div>
            <img class="w-100 " src="${data.thumbnail}" alt="">
        </div>
        <div class="row mt-5 imgSlider">
    `;
        for (let i = 0; i < data.screenshots.length; i++) {
            boxDetails += `
                <div class="col-md-4 col-sm-4 col-4">
                    <img id="test" class="w-100 mb-3" src="${data.screenshots[i].image}" alt="">
                </div>
                <div class="col-md-4 position-absolute showImg w-50 d-none">
                <div id="closeImg" class=" text-end  btn-close-white"> <i  class="fa-solid fa-xmark fs-4"> </i> </div>
                <img id="myImg" class="w-100" src="" alt="">
            </div>
            `;
        }
        boxDetails += `
        </div>
    </div>
    <div class="col-md-8">
        <div>
            <h6 class="fs-2 custom-h6">
                Title: ${data.title}
            </h6>
            <div> Category : <span class="span-style p-1 rounded-2 text-black">${data.genre}</span> </div>
            <div class="py-3"> Platform : <span class="span-style p-1 rounded-2 text-black">${data.platform} </span></div>
            <div class="mb-3"> Status : <span class="span-style p-1 rounded-2 text-black">${data.status} </span></div>
            <p class="info">${data.description}</p>
            <a class="btn gameBtn btn-warning text-white mb-4" href="${data.game_url}" target="_blank">Show Game</a>
        </div>
    </div>
    `;
        document.getElementById("detailsCard").innerHTML = boxDetails;
        let testImages = document.querySelectorAll('#test');
        testImages.forEach(img => {
            img.addEventListener('click', (e) => {
                document.querySelector(".showImg").classList.remove("d-none")
                document.getElementById("myImg").src = e.target.src
            });
        });

        document.getElementById("closeImg").addEventListener("click", () => {
            this.closeImg();
        });
    }


}



