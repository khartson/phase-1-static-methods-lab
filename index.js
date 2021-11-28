class Formatter {
  //add static methods here
  static capitalize(string) {
    return  string[0].toUpperCase() + string.slice(1); 
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, "") 
  }

  static titleize(string) {
    let excluded = {
      'a': 'a', 
      'an': 'an',
      'but': 'but',
      'of': 'of',
      'and': 'and',
      'for': 'for',
      'at': 'at',
      'by': 'by',
      'from': 'from', 
      'the': 'the'
    };
    let str = string.toLowerCase().split(' '); 
    str.forEach( (word, index)  => (excluded[word] == word) ? 
    str[index] = word : str[index] = word[0].toUpperCase() + word.slice(1) )
    str[0] = str[0][0].toUpperCase() + str[0].slice(1);
    return str.join(' ');
  }

}