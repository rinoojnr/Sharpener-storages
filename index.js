localStorage.setItem('name','alans');
console.log(localStorage.getItem('name'));
// localStorage.removeItem('name')

sessionStorage.setItem('name','benny');
console.log(sessionStorage.getItem('name'))
sessionStorage.removeItem('name')

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

console.log(document.cookie)