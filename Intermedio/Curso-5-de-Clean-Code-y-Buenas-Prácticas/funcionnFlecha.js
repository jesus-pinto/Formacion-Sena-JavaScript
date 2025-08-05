
const getResult2 = () => 'Results Jesus'
console.log(getResult2())


// Sin arrow
[1, 2, 3, 4].map(function (n) {
    return n * 2
})


// con arrow
[1, 2, 3].map( n => n * 2)


//===============================

// sin arrow
const counter2 = {
    number: 0,
    increse() {
        setInterval(
            function () {
                console.log(++this.number)
            }.bind(this),
            1000
        );
    }
}
counter2.increse()


// con arrow
const counter = {
    number: 0,
    increse() {
        setInterval(() => console.log(++this.number), 1000);
    }
}

counter.increse()
