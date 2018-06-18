function shout(string){
  return string.toUpperCase();
}
shout('hello');
describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function whisper(string) {
    return string.toLowerCase();
  });
});
whisper ("HELLO");
describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', 
  function logShout(string){
     return console.log(string.toUpperCase());
  });
});
logShout("hello");

describe('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase',
  function logWhisper(string) {
    return console.log(string.toLowerCase());
  });
});
logWhisper("HELLO");

describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase',
  function sayHiToGrandma(string){
    if (string === string.toLowerCase()) return "I can't hear you!";
    else if (string === "I love you, Grandma.") return "I love you, too.";
    else if (string === string.toUpperCase()) return "YES INDEED!";
  });
});
sayHiToGrandma("hello");
