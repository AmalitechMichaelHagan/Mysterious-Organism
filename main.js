// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num,Bases) =>{
return {
'_specimenNum': num,
'_dna': Bases,
'mutate': function(){
const randomIndex = Math.floor(Math.random() * 4);  
const randomBase = this._dna[randomIndex];
let randomBase2 = returnRandBase(); //let is used instead of const since value will be re-assigned if its equal to randomBase.

while(randomBase === randomBase2){
  randomBase2 = returnRandBase();
}

this._dna[randomIndex] = randomBase2;

return this._dna;
},
'compareDNA':function(pAequor){
let identicalBases = 0;
for(let i = 0; i<this._dna.length; i++){
if(this._dna[i] === pAequor._dna[i]){identicalBases++}
}
console.log(`Specimen #${this._specimenNum} and Specimen #${pAequor._specimenNum} have ${((identicalBases/15)*100).toFixed(2)}% DNA in common.`)
},
'willLikelySurvive':function(){
  let survivalCount = 0;
for(let index = 0;index<this._dna.length; index++){
if(this._dna[index]=='C'||this._dna[index]=='G'){
  survivalCount++;
}
}
return survivalCount >= 9 ? true : false;

}

}

}

//30 pAequor that are likely to survive
const pSurvivors = [];
let specimenNumber = 0;
while(pSurvivors.length < 30){
specimenNumber = pSurvivors.length + 1;
survivorSpecimen = pAequorFactory(specimenNumber, mockUpStrand());
if(survivorSpecimen.willLikelySurvive()===true){
  pSurvivors.push(survivorSpecimen); //while loop conditional variable (pSurvivors.length) is increased after each push command
}
}
console.log(pSurvivors);



/*  Test Runs

const specimen1 = pAequorFactory(1, mockUpStrand());
const specimen2 = pAequorFactory(2, mockUpStrand());
console.log(specimen1._dna);
console.log(specimen2._dna);
specimen1.compareDNA(specimen2);
console.log(specimen1.willLikelySurvive());
console.log(specimen2.willLikelySurvive());

specimen1.mutate();
specimen2.mutate();
console.log(specimen1._dna);
console.log(specimen2._dna);
specimen1.compareDNA(specimen2);
console.log(specimen1.willLikelySurvive());
console.log(specimen2.willLikelySurvive());
*/
