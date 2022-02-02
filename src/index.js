module.exports = function toReadable (number) {
    let str = String(number);
    const strLength = String(number).length;
    let strRez = "";
    console.log(str);
  
    if(str.length == 3){
      console.log(str[0]);
      switch(Number(str[0])){
        case 1: 
        strRez += "one hundred";
        if(strLeng >=2 && Number(str[1]) == 0 && Number(str[2]) == 0){
          return strRez;
        }else{
          strRez += " ";
        }
        break;
        case 2: 
        strRez += "two hundred";
        if(strLength >=2 && Number(str[1]) == 0 && Number(str[2]) == 0){
          return strRez;
        }else{
          strRez += " ";
        }
        break;
        case 3: 
        strRez += "three hundred";
        if(strLength >=2 && Number(str[1]) == 0 && Number(str[2]) == 0){
          return strRez;
        }else{
          strRez += " ";
        }
        break;
        case 4: 
        strRez += "four hundred";
        if(strLength >=2 && Number(str[1]) == 0 && Number(str[2]) == 0){
          return strRez;
        }else{
          strRez += " ";
        }
        break;
        case 5: 
        strRez += "five hundred";
        if(strLength >=2 && Number(str[1]) == 0 && Number(str[2]) == 0){
          return strRez;
        }else{
          strRez += " ";
        }
        break;
        case 6: 
        strRez += "six hundred";
        if(strLength >=2 && Number(str[1]) == 0 && Number(str[2]) == 0){
          return strRez;
        }else{
          strRez += " ";
        }
        break;
        case 7: 
        strRez += "seven hundred";
        if(strLength >=2 && Number(str[1]) == 0 && Number(str[2]) == 0){
          return strRez;
        }else{
          strRez += " ";
        }
        break;
        case 8: 
        strRez += "eight hundred";
        if(strLength >=2 && Number(str[1]) == 0 && Number(str[2]) == 0){
          return strRez;
        }else{
          strRez += " ";
        }
        break;
        case 9: 
        strRez += "nine hundred";
        if(strLength >=2 && Number(str[1]) == 0 && Number(str[2]) == 0){
          return strRez;
        }else{
          strRez += " ";
        }
        break;
        default:
          break;
      }
      str = str.split('').splice(1).join('');
    }
    if(str.length == 2){
      console.log(str[0]);
      switch(Number(str[0])){
        case 1: 
        switch(Number(str[1])){
          case 0: 
          strRez += "ten";
          return strRez;
          case 1: 
          strRez += "eleven";
          return strRez;
          case 2: 
          strRez += "twelve";
          return strRez;
          case 3: 
          strRez += "thirteen";
          return strRez;
          case 4: 
          strRez += "fourteen";
          return strRez;
          case 5: 
          strRez += "fifteen";
          return strRez;
          case 6: 
          strRez += "sixteen";
          return strRez;
          case 7: 
          strRez += "seventeen";
          return strRez;
          case 8: 
          strRez += "eighteen";
          return strRez;
          case 9: 
          strRez += "nineteen";
          return strRez;
          default:
            break;
        }
        break;
        case 2: 
        strRez += "twenty";
        if(strLength >=2 && Number(str[1]) == 0){
          return strRez;
        }else{
          strRez += " ";
        }
        break;
        case 3: 
        strRez += "thirty";
        if(strLength >=2 && Number(str[1]) == 0){
          return strRez;
        }else{
          strRez += " ";
        }
        break;
        case 4: 
        strRez += "forty";
        if(strLength >=2 && Number(str[1]) == 0){
          return strRez;
        }else{
          strRez += " ";
        }
        break;
        case 5: 
        strRez += "fifty";
        if(strLength >=2 && Number(str[1]) == 0){
          return strRez;
        }else{
          strRez += " ";
        }
        break;
        case 6: 
        strRez += "sixty";
        if(strLength >=2 && Number(str[1]) == 0){
          return strRez;
        }else{
          strRez += " ";
        }
        break;
        case 7: 
        strRez += "seventy";
        if(strLength >=2 && Number(str[1]) == 0){
          return strRez;
        }else{
          strRez += " ";
        }
        break;
        case 8: 
        strRez += "eighty";
        if(strLength >=2 && Number(str[1]) == 0){
          return strRez;
        }else{
          strRez += " ";
        }
        break;
        case 9: 
        strRez += "ninety";
        if(strLength >=2 && Number(str[1]) == 0){
          return strRez;
        }else{
          strRez += " ";
        }
        break;
        case 0: 
          break;
        default:
          break;
      }
      str = str.split('').splice(1).join('');
    }
    if(str.length == 1){
      switch(Number(str[0])){
        case 1: 
        strRez += "one";
        break;
        case 2: 
        strRez += "two";
        break;
        case 3: 
        strRez += "three";
        break;
        case 4: 
        strRez += "four";
        break;
        case 5: 
        strRez += "five";
        break;
        case 6: 
        strRez += "six";
        break;
        case 7: 
        strRez += "seven";
        break;
        case 8: 
        strRez += "eight";
        break;
        case 9: 
        strRez += "nine";
        break;
        case 0: 
        strRez += "zero";
        break;
        default:
          break;
      }
    }
    return strRez;
  }

