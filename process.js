child_col1_num = 0;
var a, id_;
var is_select = false;
function child_press(e){
  //e.target.innerHTML = 'Change';
  a = e.target;
  id_ = e.target.id;
  is_select = true;
}
function col1_press(){
  if(!is_select){
    console.log('a');
    var parent = document.getElementById("col1");
    var child = document.createElement("div");
    var childcontent = document.createElement("div");
    var childlogo = document.createElement("div");

    child.setAttribute('class','child noselect');
    //child.setAttribute('contenteditable', 'true');
    //child.innerHTML = "hihi";
    child.id = 'c1_child' + child_col1_num;

    childcontent.setAttribute('class','childcontent noselect');
    childcontent.setAttribute('contenteditable', 'true');
    childcontent.innerHTML = "Code firmware";

    childlogo.setAttribute('class','childlogo fa fa-edit');

    child.appendChild(childcontent);
    child.appendChild(childlogo);

    child_col1_num = child_col1_num + 1;
    parent.appendChild(child);
    child.addEventListener('mousedown',child_press,false);

    console.log(typeof(parent.clientHeight));
    parent.style.height = (parent.clientHeight + 80) + 'px';
  }
}
var k = 10;
function col1_move(e){
  if(is_select){
    /*console.log('move');
    console.log(a.getAttribute('class'));
    a.setAttribute('class','child1');
    a.style.position = "absolute";
    //a.style.top = e.y;
    a.style.left = e.x/50;
    */
    elem = document.getElementById(id_);
    a.setAttribute('class','child1 noselect');
    console.log(elem);
    elem.style.position = 'absolute';
    elem.style.left = e.x + 'px';
    elem.style.top = e.y + 'px';
    k = k + 1;
  }
}
function col1_up(e){
  is_select = false;
}
$(document).ready(function() {
  document.getElementById('add1').addEventListener('mousedown',col1_press, false);
  document.getElementById('col1').addEventListener('mousemove',col1_move, false);
  document.getElementById('col1').addEventListener('mouseup',col1_up, false);

  window.addEventListener('mousemove',col1_move, false);
})
