import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    const jsonProm = read()
      .then((buf) => json(buf))
      .then((str) => str);
    return jsonProm;
  }
}
