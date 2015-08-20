/*
Test if the input in form is valid eg. Not empty
Test if the form gets submitted
*/
/*
test("fieldCheck exists", function(){

ok( field,"fieldCheck exists")

})

test("isEmpty exists", function(){

ok( isEmpty,"isEmpty exists")

})


test("submit exists", function(){

ok( submit,"submit exists")

})



test("submit exists", function(){

ok( typeof submit === 'function',"submit is a function")

})
test("fieldCheck exists", function(){

ok( typeof field === 'function',"fieldCheck is a function")

})

test("isEmpty exists", function(){

ok( typeof isEmpty === 'function',"isEmpty is a function")

})




test("fieldCheck returns", function(){

equal( field(), false, "Non empty string returned false")

})

test("submit returns", function(){

equal( submit(), false, "form submitted returned false")

})*/

test("isempty returns", function(){

 var lenght = 5;
 var msg = "patient name is empty";

ok( typeof isEmpty === 'function',"isEmpty is a function")
equal( isEmpty(lenght,msg), true, "empty string returned true")

})