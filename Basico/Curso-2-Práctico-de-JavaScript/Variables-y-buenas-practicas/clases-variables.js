let cajaDeJesus = "woody"
console.log(cajaDeJesus)

// No permitido

let c = "Woody";
let cda = "Woody";
let pcAndy = "Woody";


// lo permitido
let primerTrasteoDeAndy = "Woody";
let urlUsuario = "https://www.google.com";
let idDelUsuaro = "123456789";

// ✅ let
// Declara una variable mutable, es decir, puede cambiar su valor después de ser declarada.

// Tiene alcance de bloque (solo existe dentro del bloque {} donde se define).

// No permite redeclarar la misma variable en el mismo bloque.



// ✅ const
// Declara una constante, es decir, no puedes reasignar un nuevo valor a esa variable.

// También tiene alcance de bloque.

// Si la constante es un objeto o array, puedes modificar su contenido interno, pero no reasignar la referencia.




//| Característica     | `let`                                            | `const`                                                                               |
// | ------------------ | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
// | **Reasignación**   | ✅ Permite reasignar el valor.                    | ❌ No permite reasignar el valor.                                                      |

// | **Inicialización** | Opcional al declarar.                            | Obligatoria en la declaración.                                                        |

// | **Ámbito (Scope)** | Bloque (`{}`), igual que `const`.                | Bloque (`{}`), igual que `let`.                                                       |

// | **Hoisting**       | Se eleva pero no se inicializa.                  | Se eleva pero no se inicializa.                                                       |

// | **Mutabilidad**    | El valor puede cambiar (primitivo o referencia). | Las referencias no cambian, pero si es un objeto o array su contenido sí puede mutar. |
