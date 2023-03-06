function moneyBox() {
    let saveMoney=0;

    function countCoins(coins) {
        saveMoney+=coins;
        console.log(`moneyBox $${saveMoney}`);
    }
    return countCoins;
}
const myMoneyBox= moneyBox();
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(15);

function tourtamentPokemon(){
    let pokemonParticipantes=[];

        function addPokemon(pokemon) {
            pokemonParticipantes.push(pokemon);
            console.log(`participantes son
             ${pokemonParticipantes}`);
        }
        return addPokemon;
}
const p= tourtamentPokemon();
p('pikachu');
p('bolbasor');

function createPetList() {
    let pet = [];
    function addPet(newPet) {
      pet.push(newPet);
      console.log(pet);
    }
     return addPet
  }
  const myPetList = createPetList();
  myPetList("michi");

  myPetList("firulais");
  
  myPetList();  