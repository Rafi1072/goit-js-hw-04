const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(oldName, newName) {
    for (const name of this.profile) {
      if (name.username === oldName) {
        name.username = newName;
      }
    }
  },


  function getInfo(){
  return '${profile.username} ma ${huors} aktywnych godzin!';
}

};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
