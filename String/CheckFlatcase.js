// checkFlatCase method checks if the given string is in flatcase or not. Flatcase is a convention
// where all letters are in lowercase, and there are no spaces between words.
// thisvariable is an example of flatcase. In camelCase it would be thisVariable, snake_case this_variable and so on.


function checkflatcase(string) {
      //pattern of flatcase
      const pattern = /^[a-z]*$/
      return pattern.test(string)
}