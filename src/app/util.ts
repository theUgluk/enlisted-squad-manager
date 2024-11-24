export default class Util {
  static makeMinLength (string: string, length: number){
    // lz compression: https://www.npmjs.com/package/lz-string
    if(string.length > length){
      throw new Error();
    }
    while(string.length < length){
      string = "0" + string;
    }
    return string;
  }
}
