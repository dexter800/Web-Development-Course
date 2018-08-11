const race = '100m Dash'; 
const winners = ['Hunter Gath', 'singa Song', 'Imda Bos']; 

const win = winners.map((winner,i) => ({name:winner, race: race,place : i +1})) 
console.table(win); 

const ages = [13,45,67,78,99,87,34,6,77]; 
const  old = ages.filter( age => age >=60); 
console.log(old); 