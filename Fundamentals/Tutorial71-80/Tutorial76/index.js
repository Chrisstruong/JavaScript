let element = document.querySelector("#dessert")
let children = Array.from(element.children)

children.forEach(child=>child.style.backgroundColor = "lightgreen")


// .firstElementChild
// .lastElementChild
// .paremtElement
// .nextElementSibling
// .previousElementSibling
// .children[]
// .Array.from(.children)