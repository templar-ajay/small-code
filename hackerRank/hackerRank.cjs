function joinedLogger(level, sep) {
  console.log(level);

  function f(messages) {
    let string = "";
    let eligibleMessages = [];
    messages.forEach((message) => {
      message.level >= level
        ? eligibleMessages.push(message)
        : console.log(`hi`);
    });
    console.log(eligibleMessages);

    eligibleMessages.forEach((message, index) => {
      string += message.text;
      index >= eligibleMessages.length - 1 ? null : (string += sep);
    });
    return string;
  }
  return f;
}
const x = joinedLogger(20, ";");
console.log(x([
  { level: 21, text: "guen" },
  { level: 23, text: "ben" },
  {level:19,text:"max"},
  { level: 25, text: "ten" },
]))
