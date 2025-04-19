let presidents = [
    { first: 'George H.', last: 'Bush', year: 1924, passed: 2018 },
    { first: 'Bill', last: 'Clinton', year: 1946, passed: undefined }
];
console.log(presidents);

let living = presidents.filter(function(l) {
    if (l.passed == undefined) {
        console.log(l);
    }
});