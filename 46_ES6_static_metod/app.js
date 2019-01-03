// Static Metodlar

class Matematik {
    pow2(x) {
        console.log(x * x);
    }

    static cube(x) { // prototype e yazılmaz
        console.log(x * x * x);
    }
}

// const mat = new Matematik();
// mat.cube(3);
// console.log(mat);
const mat = new Matematik();
// mat.pow2(4); // kullanılamaz.
// console.log(mat);
// Matematik.cube(3);
// Matematik.pow2(5); // Hatalı kullanım.

// Object.create()
console.log(Math.sqrt(4));