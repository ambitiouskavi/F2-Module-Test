let images = document.querySelectorAll(".image");
let form = document.querySelector(".signup");
let userDetails = document.querySelector('.user-details');
let span = document.querySelector('.diceNumber')
let diceImage = document.querySelector(".diceImage")
let img = document.getElementById('dice')
form.addEventListener('submit', getUser)

let count = 0;
let limit = 0;
let chances = 0;
for (let i of images) {
    i.addEventListener('click', print)
}

for (let i = 1; i < images.length; i++) {
    images[i].classList.add('disable')
}

function print(event) {
    event.preventDefault();
    let Id = event.target.id;
    if (Id == 1) {
        images[0].classList.add('disable')
        form.classList.remove("hide");
        images[1].classList.remove('disable')

    }
    else if (Id == 2) {
        let name = localStorage.getItem('name');
        let username = localStorage.getItem('username')
        console.log(name)
        userDetails.innerHTML = "Name:" + name + "<br>" + "UserName:" + username;
        images[1].classList.add('disable')
        images[2].classList.remove('disable')
    }
    else if (Id == 3) {
        chances++;
        userDetails.classList.add("hide")

        img.src = "https://www.shutterstock.com/image-vector/dice-cube-casino-game-sticker-600w-1708171393.jpg"
        img.setAttribute('height', "100")
        img.setAttribute('width', "100")
        span.innerHTML = "";


        let dice = document.querySelector('.diceImage')
        limit = 0;
        dice.addEventListener('click', rollTheDice)

    }
    else if (Id == 4) {
        images[3].classList.remove('disable')
        let randomString = GenerateString();
        console.log(randomString)
        span.innerHTML = randomString;
        img.src = "https://media.istockphoto.com/id/1368531657/vector/congratulations-colorful-typography-banner.jpg?s=612x612&w=0&k=20&c=wLDsEtMDLracjmXSWOownzagyurdZH-lXlNLmZXWsVM="
        img.setAttribute('height', "400")
        img.setAttribute('width', "400")

    }

}

function GenerateString() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 12) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}
function rollTheDice(event) {

    let x = Math.round(Math.random() * 6)
    limit = limit + 1;
    count = count + x;
    span.innerHTML = "<br>" + "current Dice Number:" + x + "<br>" + "Sum:" + count;
    if (limit == 3) {
        if (count > 10) {
            span.innerHTML = "sum is greater than 10 now click on 4th image "
            images[2].classList.add('disable')
            images[3].classList.remove('disable')

        }
        else {
            count = 0;
            limit = 0;
            setTimeout(function () {
                if (chances == 2) {
                    span.innerHTML = "Bad luck";
                    images[2].classList.add('disable')
                }
               else prompt("Try again for scoring more than 10")
            }, 1000);

        }
    }

}
function getUser(event) {
    event.preventDefault();

    let name = form.querySelector("#name").value;
    let email = form.querySelector("#email").value;
    let username = form.querySelector("#userName").value;
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('username', username)
    form.classList.add("hide");
}