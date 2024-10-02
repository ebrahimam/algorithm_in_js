// CheckKebabCase method checks the given string is in
// kebab -case or not.

function CheckKebabCase(string) {

      const pattern = /(\w+)(\w)([\w-])*/

      return pattern.test(string) && !string.includes('_')

}


