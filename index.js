const cats = ['Milo', 'Otis', 'Garfield']
function destructivelyAppendCat(name) {
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name)
}
function destructivelyRemoveLastCat() {
    cats.pop(name)
}
function destructivelyRemoveFirstCat() {
    cats.shift(name)
}
function appendCat(name) {
    return [...cats, name]
}
function prependCat(name) {
    return [name, ...cats]
}
function removeLastCat(name) {
    return cats.slice (0, cats.length -1)
}
function removeFirstCat(name) {
    return cats.slice (1, cats.length)
}