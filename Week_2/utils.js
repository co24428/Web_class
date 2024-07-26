function getCourseId(c, id) {
    return c + "-" + id;
}

function getFullName(fname, lname) {
    let fullName = `${fname} ${lname}`; // more common way to use String in modern Javascript
    return fullName;
}

function getDate() {
    let date = new Date();
    return date.toISOString();
}