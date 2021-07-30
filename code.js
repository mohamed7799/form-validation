// email regex pattern
let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

let form = document.getElementById("form-js");

let inputs = document.getElementsByTagName("input");

let check = (item, _class) => item.classList.contains(_class);
let add = (item, _class) => item.classList.add(_class);
let remove = (item, _class) => item.classList.remove(_class);
let toggle = (item, _class) => check(item, _class) ? remove(item, _class) : add(item, _class);

let changeState = (ele, state) => {
    if (state === "error") {
        remove(ele.nextElementSibling, "hidden");
        add(ele, "red--border");
        add(ele, "error-icon");
    }
    else if (state === "correct") {
        add(ele.nextElementSibling, "hidden");
        remove(ele, "red--border");
        remove(ele, "error-icon");
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    for (const input of inputs) {

        if (input.value === "" || (input.id === "email-js" && !pattern.test(input.value))) {
            changeState(input, "error")
        }
        else {
            changeState(input, "correct");
        }

    }
})