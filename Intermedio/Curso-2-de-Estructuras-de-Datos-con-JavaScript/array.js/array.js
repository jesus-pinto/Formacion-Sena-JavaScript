// const array = ["Jesus", "Alfredo","pinto"];
// console.log("original",array);

// array.push("garcia");
// console.log("modificado push",array);

class MyArray {
    constructor(){
        this.length = 0;
        this.data = {}
    }
    get(index){
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
}

const myArray = new MyArray();
myArray.push("Jose");
myArray.push("Andres");

console.log(myArray);
console.log("Busca el nombre con el numero que deseas:",myArray.get(1));
