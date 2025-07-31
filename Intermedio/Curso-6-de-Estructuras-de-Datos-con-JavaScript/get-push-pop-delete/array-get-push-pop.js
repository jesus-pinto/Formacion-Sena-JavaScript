// const array = ["Jesus", "Alfredo","pinto"];
// console.log("original",array);

// array.push("garcia");
// console.log("modificado push",array);

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    get(index) {
        return this.data[index]
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index) {
        const item = this.data[index]
        this.shiftIndex(index);

        return item;
    }
    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const myArray = new MyArray();
myArray.push("Jose");
myArray.push("Andres");
myArray.push("Jesus");
myArray.push("Alfredo"); // agrega nuevos elementos "push"

console.log(myArray)
console.log("Busca el nombre con el numero que deseas:", myArray.get(2));
console.log("Elimina el ultimo nombre:", myArray.pop());
console.log( myArray)
console.log("Metodo Delete elimina a:", myArray.delete (1))
console.log( myArray)


