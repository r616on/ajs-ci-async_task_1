import GameSavingLoader from './GameSavingLoader';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
  // saving объект класса GameSaving
});
// console.log(
//   GameSavingLoader.load().then((saving) => {
//     return saving;
//   })
// );