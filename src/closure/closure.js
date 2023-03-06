function greeting() {
    let userName='esteban';

    function displayUserName() {
        return `hello ${userName}`;
    }
    return displayUserName;
}

const g= greeting();
console.log(g);
console.log(g());