var child_col1_num = 0, child_col2_num = 0, child_col3_num = 0;
var child_col = {};
child_col['col1'] = 0;
child_col['col2'] = 0;
child_col['col3'] = 0;

var a, id_elem_drap;
var is_select = false;
var x_start_press, y_start_press, height_child, width_child;
var elem_drap;

var elem_move;
var is_create_element_drap = false;
var is_init_element_drap = false;
var x_offset, y_offset;

//Variable for addElement from user
var is_addElement = false;
function create_AddElem(col){
  var child = document.createElement("div");
  switch(col){
    case 'col1':{
      child.id = 'add1';
      break;
    }
    case 'col2':{
      child.id = 'add2';
      break;
    }
    case 'col3':{
      child.id = 'add3';
      break;
    }
  }
  child.style.order = 10;
  child.setAttribute('class','fa fa-plus add noselect');
  child.innerText = ' Thêm thẻ khác...';
  document.getElementById(col).appendChild(child);

  child.addEventListener('mousedown',add_child_callback, false);


}
function child_press(e){
  //e.target.innerHTML = 'Change';
  if(e.target.contentEditable == 'true'){     //Target is a context child
    id_elem_drap = e.target.parentElement.id;
    height_child = e.target.parentElement.clientHeight;
    width_child = e.target.parentElement.clientWidth;
  }
  else{
    height_child = e.target.clientHeight;
    width_child = e.target.clientWidth;
    id_elem_drap = e.target.id;
  }
  elem_drap = document.getElementById(id_elem_drap);

  if(e.which == 2){
    elem_delete(elem_drap);
  }
  else{
    is_select = true;

    x_start_press = e.x;
    console.log(x_start_press);

    y_start_press = e.y;
    x_offset = document.getElementById(id_elem_drap).offsetLeft - e.x - 10;
    y_offset = document.getElementById(id_elem_drap).offsetTop - e.y - 10;
    console.log(document.getElementById(id_elem_drap).offsetLeft);
  }

}
function add_child(col, index, content){
  var child = document.createElement("div");
  var childcontent = document.createElement("div");
  var childlogo = document.createElement("div");


  switch(col){
    case 'col1':
    {
      var parent = document.getElementById("col1");
      child.id = 'c1_' + child_col1_num;
      child.style.order = child_col[col];
      child_col1_num = child_col1_num + 1;
      break;
    }
    case 'col2':
    {
      var parent = document.getElementById("col2");
      child.id = 'c2_' + child_col2_num;
      child.style.order = child_col[col];
      child_col2_num = child_col2_num + 1;
      break;
    }
    case 'col3':
    {
      var parent = document.getElementById("col3");
      child.id = 'c3_' + child_col3_num;
      child.style.order = child_col[col];
      child_col3_num = child_col3_num + 1;
      break;
    }
  }
  child_col[col] = child_col[col] + 1;

  child.setAttribute('class','child noselect');
  //Content on Child
  childcontent.setAttribute('class','childcontent noselect');
  childcontent.setAttribute('contenteditable', 'true');
  childcontent.innerHTML = content;
  //Logo on Child
  childlogo.setAttribute('class','childlogo fa fa-edit');

  child.appendChild(childcontent);
  child.appendChild(childlogo);
  parent.appendChild(child);

  child.addEventListener('mousedown',child_press,false);
}
var child_textarea_add_temp;
function add_child_callback(e){
  parent = e.target.parentElement;
  e.target.parentElement.removeChild(e.target);

  child_textarea_add_temp = document.createElement("div");
  var childcontent = document.createElement("textarea");
  var childlogo = document.createElement("div");

  childcontent.setAttribute('class','childinput noselect');
  childcontent.autofocus = 'autofocus';
  childcontent.placeholder = 'Task';

  //childcontent.setAttribute('contenteditable', 'true');
  childcontent.id = 'textarea_input';

  childlogo.setAttribute('class','childinput_logo fa fa-close');

  child_textarea_add_temp.setAttribute('class','child noselect');
  child_textarea_add_temp.appendChild(childcontent);
  child_textarea_add_temp.appendChild(childlogo);

  parent.appendChild(child_textarea_add_temp);

  document.getElementById('textarea_input').focus();


  is_addElement = true;
  /*
  if(!is_select){
    var child = document.createElement("div");
    var childcontent = document.createElement("div");
    var childlogo = document.createElement("div");


    switch(e.target.parentElement.id){
      case 'col1':
      {
        var parent = document.getElementById("col1");
        child.id = 'c1_' + child_col1_num;
        child.style.order = child_col[e.target.parentElement.id];
        child_col1_num = child_col1_num + 1;
        break;
      }
      case 'col2':
      {
        var parent = document.getElementById("col2");
        child.id = 'c2_' + child_col2_num;
        child.style.order = child_col[e.target.parentElement.id];
        child_col2_num = child_col2_num + 1;
        break;
      }
      case 'col3':
      {
        var parent = document.getElementById("col3");
        child.id = 'c3_' + child_col3_num;
        child.style.order = child_col[e.target.parentElement.id];
        child_col3_num = child_col3_num + 1;
        break;
      }
    }
    child_col[e.target.parentElement.id] = child_col[e.target.parentElement.id] + 1;

    child.setAttribute('class','child noselect');
    //Content on Child
    childcontent.setAttribute('class','childcontent noselect');
    childcontent.setAttribute('contenteditable', 'true');
    childcontent.innerHTML = 'Task';
    //Logo on Child
    childlogo.setAttribute('class','childlogo fa fa-edit');

    child.appendChild(childcontent);
    child.appendChild(childlogo);
    parent.appendChild(child);

    child.addEventListener('mousedown',child_press,false);
  }
  */
}

function col1_move(e){
  //console.log(is_select)
  if((is_select)&&(e.x != x_start_press)&&(e.y != y_start_press)){
    if(!is_init_element_drap){
      switch (elem_drap.parentElement.id) {
        case 'col1':{
          col_drap_obj = document.getElementById('col1');
          break;
        }
        case 'col2':{
          col_drap_obj = document.getElementById('col2');
          break;
        }
        case 'col3':{
          col_drap_obj = document.getElementById('col3');
          break;
        }
      }

      is_init_element_drap = true;
      elem_move = document.createElement('div');
      //console.log('move')
      elem_move.innerHTML = document.getElementById(id_elem_drap).innerHTML;
      document.getElementById(id_elem_drap).innerText = '';
      document.getElementById(id_elem_drap).style.height = height_child - 20 +'px';
      document.getElementById(id_elem_drap).style.background = '#f4f4f4'
      elem_move.setAttribute('class','childdrap noselect');
      elem_move.style.height = height_child - 20 + 'px';
      elem_move.style.width = width_child - 20 + 'px';

      elem_move.style.left = e.x + x_offset + 'px';
      elem_move.style.top = e.y + y_offset + 'px';


      col_x_common = col_drap_obj.clientWidth;
      col_y_element = {};
      col_height_element = {};
    }
    else{
      if(!is_create_element_drap){
        document.body.appendChild(elem_move);
        is_create_element_drap = true;
      }
      elem_move.style.position = 'absolute';
      elem_move.style.left = e.x + x_offset + 'px';
      elem_move.style.top = e.y + y_offset + 'px';
      for(i = 2; i < col_drap_obj.childElementCount; i++){
        col_y_element[i] = col_drap_obj.children[i].offsetTop;
        col_height_element[i] = col_drap_obj.children[i].clientHeight;
        if(((elem_move.offsetTop - 10 + elem_move.clientHeight/2) > col_drap_obj.children[i].offsetTop)&&((elem_move.offsetTop - 10 + elem_move.clientHeight/2) < (col_drap_obj.children[i].offsetTop + col_drap_obj.children[i].clientHeight))){
          order_temp = col_drap_obj.children[i].style.order;
          col_drap_obj.children[i].style.order = document.getElementById(id_elem_drap).style.order;
          document.getElementById(id_elem_drap).style.order = order_temp;
          break;
        }
      }
    }
  }
}
function col1_up(e){
  if(is_create_element_drap){
    //Chuyen text vao element
    document.getElementById(id_elem_drap).innerHTML = elem_move.innerHTML;

    //console.log(height_child);
    document.getElementById(id_elem_drap).style.height = '';
    //console.log(document.getElementById(id_elem_drap).clientHeight);

    document.getElementById(id_elem_drap).style.background = ''


    document.body.removeChild(elem_move);
    console.log('remove')
  }

  is_select = false;
  is_create_element_drap = false;
  is_init_element_drap = false;
}
var is_press_col = false;
function press_col(e){
  is_press_col = true;
}
function press_window(e){
  if((is_addElement)&&(!is_press_col)){
    is_addElement = false;
    create_AddElem(child_textarea_add_temp.parentElement.id);
    child_textarea_add_temp.parentElement.removeChild(child_textarea_add_temp);
  }
  else{
    is_press_col = false;
  }
}
function col_order_soft(col){
  var child_index = {};
  var child_index_loss = 100;
  for(let i = 2; i < col.childElementCount; i++){
    child_index[col.children[i].style.order] = 1;
  }
  for(let i = 0; i < Object.getOwnPropertyNames(child_index).length; i++){
    if(child_index[i] === undefined){
      child_index_loss = i;
      break;
    }
  }
  if(child_index_loss !== 100){
    for(let i = 2; i < col.childElementCount; i++){
      if(col.children[i].style.order > child_index_loss){
        col.children[i].style.order = col.children[i].style.order - 1;
      }
      child_index[col.children[i].style.order] = 1;
    }
  }
}
function elem_delete(elem_del){
  var parent_elem = elem_del.parentElement;
  parent_elem.removeChild(elem_del);
  col_order_soft(parent_elem);
  child_col[parent_elem.id] = child_col[parent_elem.id] - 1;
}

function keypress_callback(e){
  console.log(e.key);

  if((e.key == 'Enter')&&(is_addElement)){
    is_addElement = false;
    add_child(child_textarea_add_temp.parentElement.id,1,document.getElementById('textarea_input').value);
    create_AddElem(child_textarea_add_temp.parentElement.id);
    child_textarea_add_temp.parentElement.removeChild(child_textarea_add_temp);
  }
}
$(document).ready(function() {
  firebase_init();



  //getData_firebase();
  //add_element_firebase('col1',1,'1as');

  document.getElementById('add1').addEventListener('mousedown',add_child_callback, false);
  document.getElementById('add2').addEventListener('mousedown',add_child_callback, false);
  document.getElementById('add3').addEventListener('mousedown',add_child_callback, false);

  //----------------------------------------------------------------------------
  document.getElementById('col1').addEventListener('mousemove',col1_move, false);
  window.addEventListener('mousemove',col1_move, false);

  //----------------------------------------------------------------------------
  //Mouse Up for drap element or none (col1, col2, col3)
  document.getElementById('col1').addEventListener('mouseup',col1_up, false);
  document.getElementById('col2').addEventListener('mouseup',col1_up, false);
  document.getElementById('col3').addEventListener('mouseup',col1_up, false);
  //Mouse Up for drap element or none in window
  window.addEventListener('mouseup',col1_up, false);

  document.getElementById('col1').addEventListener('mousedown',press_col, false);
  document.getElementById('col2').addEventListener('mousedown',press_col, false);
  document.getElementById('col3').addEventListener('mousedown',press_col, false);
  window.addEventListener('mousedown', press_window, false);
  //Keyboard Press Event
  document.addEventListener("keypress", keypress_callback);


})
