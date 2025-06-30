let separarParimpar = (nums) => {
    let pares = []
    let impares = []
    let indicePar = 0
    let indiceImpar = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            pares[indicePar] = nums[i]
            indicePar++
        } else {
            impares[indiceImpar] = nums[i]
            indiceImpar++
        }
    }

    return `números pares: ${pares} e os números ímpares são: ${impares}`
}
