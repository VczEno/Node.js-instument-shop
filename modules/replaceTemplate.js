module.exports = (temp, prod) => {
    let output = temp.replace(/{%NAME%}/g, prod.name)
    output = output.replace(/{%ID%}/g, prod.id)
    output = output.replace(/{%IMAGE%}/g, prod.image)
    output = output.replace(/{%BRAND%}/g, prod.brand)
    output = output.replace(/{%DESCRIPTION%}/g, prod.description)
    output = output.replace(/{%PRICE%}/g, prod.price)
    output = output.replace(/{%DIMENSION%}/g, prod.dimension)
    output = output.replace(/{%WEIGHT%}/g, prod.weight)
    output = output.replace(/{%COLOR%}/g, prod.color)
    output = output.replace(/{%MATERIAL%}/g, prod.material)

    return output
}