/*
Generates a UUID/GUID in Node.Js.
The script uses `Math.random` in combination with the timestamp for better randomness.
The function generate an RFC4122 (https://www.ietf.org/rfc/rfc4122.txt) version 4 UUID/GUID
*/


function GenerateUID() {
      const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
      let currentDateMiliseconds = new Date().getTime()
      return pattern.replace(/[xy]/g, (currentChar) => {
            const randomCharacter = (currentDateMiliseconds + Math.random() * 16) % 16 | 0
            currentDateMiliseconds = Math.floor(currentDateMiliseconds / 16)
            return (currentChar === 'x' ? randomCharacter : (randomCharacter & 0xf) | 0x8).toString(16)
      })
}