const colors = ["blue", "yellow", "red", "green", "brown"];

// const colorsWithE = [];

// for(i = 0; i < colors.length; i++) {
//     if(colors[i].includes("e")) {
//         colorsWithE.push(colors[i])
//     }
// }

// console.log(colorsWithE)

// filter method

const colorsWithE = colors.filter((color) => {
    return (color.includes("e"))
})

console.log(colorsWithE)