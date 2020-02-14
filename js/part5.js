let phone_book = {
  "Jenny": 8675309,
  "emergency": 911
};

let voted = {
  get(user) {
    if (voted[user]) {
      return "Kick them out!!!"
    } else {
      voted[user] = true
      return "let them vote!!!"
    }
  }
}

console.log(voted.get('Tom'));
console.log(voted.get('Alex'));
console.log(voted.get('Tom'));

console.log(phone_book["Jenny"])