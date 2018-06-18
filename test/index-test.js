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
  it('calls console.log() its one argument in all lowercase', function whisper(string) {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})

describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    expect(sayHiToGrandma('hello')).toEqual("I can't hear you!")
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})
