import { checkHealth, sortListHeroes } from './basic';

const entityWizard = { name: 'Маг', health: 90 };

console.log(checkHealth(entityWizard));

const listHeroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

console.log(sortListHeroes(listHeroes));
