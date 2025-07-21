const globalVariable = "😂"

function localOne () {
    console.log("Global 1:", globalVariable)
    //  console.log("local 1:", localVariable)

    function localTwo() {
        const carrot = "🔥"
        console.log("local 2: ", carrot)
    }

    function localThree () {
        console.log("local 3: ", carrot)
    }

    localTwo()
    localThree()
}
console.log(localOne())

