child_col1_num = 0;
var a, id_;
var is_select = false;
var x_start_press, y_start_press, height_child, width_child;
function child_press(e){
  //e.target.innerHTML = 'Change';
  if(e.target.contentEditable == 'true'){     //Target is a context child
    id_ = e.target.parentElement.id;
    height_child = e.target.parentElement.clientHeight;
    width_child = e.target.parentElement.clientWidth;
  }
  else{
    height_child = e.target.clientHeight;
    width_child = e.target.clientWidth;
    id_ = e.target.id;
  }
  console.log(height_child)

  a = e.target;

  is_select = true;

  x_start_press = e.x;
  y_start_press = e.y;
  x_offset = document.getElementById(id_).offsetLeft - e.x - 10;
  y_offset = document.getElementById(id_).offsetTop - e.y - 10;
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
    //parent.style.height = (parent.clientHeight + 80) + 'px';
  }
}
var k = 10, elem_move;
var is_create_element = false;
var x_offset, y_offset;
function col1_move(e){
  //console.log(is_select)
  if(is_select){
    if((e.x != x_start_press)&&(e.y != y_start_press)){
      if(!is_create_element){
        is_create_element = true;

        elem_move = document.createElement('div');
        //console.log('move')
        elem_move.innerHTML = document.getElementById(id_).innerHTML;
        document.getElementById(id_).innerHTML = '';
        //console.log(height_child);
        document.getElementById(id_).style.height = height_child - 20 +'px';
        //console.log(document.getElementById(id_).clientHeight);

        document.getElementById(id_).style.background = '#f4f4f4'

        //console.log(document.getElementById(id_).style);
        //elem_move.style = document.getElementById(id_).style;
        elem_move.setAttribute('class','childdrap noselect');
        elem_move.style.height = height_child - 20 + 'px';
        elem_move.style.width = width_child - 20 + 'px';
        document.body.appendChild(elem_move);
        console.log('----------------------------')
        console.log(document.getElementById(id_).offsetLeft)

      }
      else{
        //document.body.appendChild(elem_move);
        //a.setAttribute('class','child1 noselect');
        console.log(elem_move.style.top);

        elem_move.style.position = 'absolute';
        elem_move.style.left = e.x + x_offset + 'px';
        elem_move.style.top = e.y + y_offset + 'px';
        k = k + 1;
      }
    }
  }
  /*if(is_select){
    elem = document.getElementById(id_);
    a.setAttribute('class','child1 noselect');
    console.log(elem);
    elem.style.position = 'absolute';
    elem.style.left = e.x + 'px';
    elem.style.top = e.y + 'px';
    k = k + 1;
  }*/
}
function col1_up(e){
  is_select = false;
  is_create_element = false;
}
$(document).ready(function() {
  document.getElementById('add1').addEventListener('mousedown',col1_press, false);
  document.getElementById('col1').addEventListener('mousemove',col1_move, false);

  document.getElementById('col1').addEventListener('mouseup',col1_up, false);
  window.addEventListener('mouseup',col1_up, false);

  window.addEventListener('mousemove',col1_move, false);
})
