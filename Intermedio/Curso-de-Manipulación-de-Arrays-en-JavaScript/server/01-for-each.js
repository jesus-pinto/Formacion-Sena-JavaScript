const letters = ["a","b","c"];

// forma mas larga de hacerlo
for (let index = 0; index < letters.length; index ++){
    const element = letters[index];
    console.log("for",element);
}

// forma mas corta y usando metodo ForEach
letters.forEach(item => console.log("forEach", item));