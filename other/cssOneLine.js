
// hypothetical situation in which classes are added to each element in one function
// keep each dom element in an array with it's css classes attached in another array
// iterate through each element-classes array one by one
// for each array, add the css classes to the dom element using a nested forEach loop

const elements = [

    [ navbar,  [ "nav-colors", "animate2", "sticky" ]],
    [ board, [ "board", "squares", "animate", "resize", ]],
    [ white, [ "white-piece", "checkers-piece", "animate", "no-king", ]],
    [ black, [ "white-piece", "checkers-piece", "animate", "no-king", ]]

]

elements.forEach(array => array[1].forEach(cls => array[0].classesList.add(cls)))
