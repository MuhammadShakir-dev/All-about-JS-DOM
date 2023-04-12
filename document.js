// If you want to see the structure of HTML then you can simply use document.
// But if you want to see all the elements and tags that is present in the HTML document then you can use
// document.all     


let elements;

// document.all shows you all html tags present in this document with there index number and i'm gona print the tag
// which is present at array index 75.   

elements = document.all[75];
console.log(elements);


elements = document;
// document simply show you the structure of your html document.
console.log(elements);
