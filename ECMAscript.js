//Lexical scope for this
//kisi chizz ki kitni range hai
let data = {
  type: "friend",
  list: ["ankit", "viki", "aadi"],
  getFriends: function () {
    that = this.type;
    this.list.map(function (item) {
      console.log(that, item);
    });
  },
  getFriend: function () {
    //arrow fun and inherit parent this
    this.list.map((item) => {
      console.log(this.type, item);
    });
  },
};
data.getFriends();
data.getFriend();