child_col1_num = 0;
var a, id_;
var is_select = false;
function child_press(e){
  e.target.innerHTML = 'Change';
  a = e.target;
  id_ = e.target.id;
  is_select = true;
}
function col1_press(){
  if(!is_select){
    console.log('a');
    var parent = document.getElementById("col1");
    var divtest = document.createElement("div");
    divtest.setAttribute('class','child noselect');
    divtest.innerHTML = "hihi";
    divtest.id = 'c1_child' + child_col1_num;
    child_col1_num = child_col1_num + 1;
    parent.appendChild(divtest);
    divtest.addEventListener('mousedown',child_press,false);

    console.log(typeof(parent.clientHeight));
    parent.style.height = (parent.clientHeight + 70) + 'px';
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
