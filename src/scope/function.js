function greeting() {
    let userName='Laura';
    console.log(userName);
    if (userName==='Laura') {
        console.log(`Hello ${userName}`);
    }
}
greeting();
console.log(userName);//no se puede accerder a una variable de alcance local