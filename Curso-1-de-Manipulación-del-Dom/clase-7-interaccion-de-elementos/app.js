const buttom = document.getElementById("btn");

const buttonClicked = (Event) => {
    console.log(Event.target);
    console.log(Event.target.id);
    console.log(Event.target. textContent);
};

buttom.addEventListener("click",
buttonClicked);

