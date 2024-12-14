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

  /*
    code	int			charCode
    0..9 => 0..9	=> 	48..57
    A..Z => 10..35	=>	65..90
    a..z => 36..61	=> 	97..122
  */
  static encodeNumber (number: number): string {
    if(number >= 0 && number <= 9){
      return number.toString();
    }
    if(number >= 10 && number <= 35){
      return String.fromCharCode(number + 55)
    }
    if(number >= 36 && number <= 61){
      return String.fromCharCode(number + 61)
    }
    return "";
  }

  static decodeNumber(string:string): number {
    if(string.length !== 1){
      throw new Error();
    }
    const charCode = string.charCodeAt(0);
    if(charCode >= 48 && charCode <= 57){
      return charCode - 48;
    }
    if(charCode >= 65 && charCode <= 90){
      return charCode - 55;
    }
    if(charCode >= 97 && charCode <= 122){
      return charCode - 61;
    }
    throw new Error();
  }

}
