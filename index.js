function shout(string){
  return string.toUpperCase()
}

'Hello!'.toUpperCase()

function whisper(string){
  return string.toLowerCase()
}

'Hello'.toLowerCase()

function logShout(string){
  console.log('Hello'.toUpperCase())
}

'Hello'.toUpperCase()

function logWhisper(string){
  console.log('Hello'.toLowerCase())
}

'Hello'.toLowerCase()

function sayHiToGrandma(string){
  if (string.toLowerCase()){
    return "I can't hear you!"
  } else if (string.toUpperCase()) {
    return "YES INDEED!"
  } else {
    return "I love you, too."
  }
}

"Hello!".toLowerCase()
"hello!".toUpperCase()
"HeY there, GrandMA"