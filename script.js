function getFormvalue() {
  //Write your code here
  let name = document.getElementsByTagName("input");

  console.log(name);
  alert(name[0].value + " " + name[1].value);
}
