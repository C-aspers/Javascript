let sample1 = "CCGUCGUUGCGCUACAGC"
let sample2 = "CCUCGCCGGUACUUCUCG"

const codons = [
{name: "Sérine", value: ["UCU", "UCC", "UCA", "UCG", "AGU", "AGC"]},
{name: "Proline", value: ["CCU", "CCC", "CCA", "CCG"]},
{name: "Leucine", value: ["UUA", "UUG"]},
{name: "Phénylalanine", value: ["UUU", "UUC"]},
{name: "Arginine", value: ["CGU", "CGC", "CGA", "CGG",  "AGA", "AGG"]},
{name: "Tyrosine", value: ["UAU", "UAC"]}
]

selectSample = sample2

protein = selectSample.match(/.{1,3}/g);

output = []
codons.forEach(codonsContent => {
  value = codonsContent.value;
  acid = codonsContent.name;
  boucle = 0
    protein.forEach(proteinContent => {
    const found = value.some(r=> proteinContent.includes(r))
    if(found === true) {
      output[boucle] = acid 
    }
    boucle++
  })
});
output = output.join(" ")
console.log(output)
