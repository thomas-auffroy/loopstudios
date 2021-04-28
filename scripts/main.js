var items = document.querySelectorAll("a");
var name_;

function enter(event) {
  name_ = event.target.innerHTML;

  let len = name_.length;
  if (len - 4 <= 2){
    event.target.innerHTML = name_.substring(0, 1) + "<u>" + name_.substring(1, len - 1) + "</u>" + name_.substring(len - 1);
  }
  else{
   event.target.innerHTML = name_.substring(0, 2) + "<u>" + name_.substring(2, len - 2) + "</u>" + name_.substring(len - 2);
  }
  console.log(event.target.innerHTML);
}

function leave(event) {
  event.target.innerHTML = name_;
}

for (i = 0; i < items.length; i++) {
  items[i].addEventListener("mouseenter", enter, false);
  items[i].addEventListener("mouseleave", leave, false);
}