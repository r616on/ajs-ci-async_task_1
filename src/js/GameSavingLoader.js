import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    const jsonProm = read()
      .then((buf) => json(buf))
      .then((str) => new GameSaving(str));
    return jsonProm;
  }
}
