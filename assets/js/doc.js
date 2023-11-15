let h2 = document.querySelector("h2")
let addbtn = document.querySelector('#addbtn')
let savebtn = document.querySelector("#savebtn")
let resetbtn = document.querySelector("#resetbtn")
let savenumber = document.querySelector("#savenumber")

addbtn.addEventListener("click", () => {
    h2.innerHTML = +h2.innerHTML + 1;
    savebtn.classList.remove("btnDisable");
})
savebtn.addEventListener("click", () => {
    if (h2.innerHTML == 0) {
        savebtn.classList.add("btnDisable");
    }
    else {
        if (savenumber.innerHTML == 0) {
            savenumber.innerHTML = h2.innerHTML;
        }

        else {
            savenumber.innerHTML = savenumber.innerHTML + ', ' + h2.innerHTML;
        }
        h2.innerHTML = 0;
    }
})
resetbtn.addEventListener("click", function () {
    h2.innerHTML = 0;
    savenumber.innerHTML = 0;
})

