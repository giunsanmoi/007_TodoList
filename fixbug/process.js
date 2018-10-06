$(document).ready(function() {
  //firebase_init();

  /*
  div_show = document.createElement('div');
  div_show.id = 'login_page';
  div_show.innerHTML = document.getElementById('container_login').innerHTML;
  document.body.appendChild(div_show);

  document.getElementById('btn_login').addEventListener('click', content_init);
  */
  a = document.createElement('div')
  a.id = 'login_id'
  console.log(document.getElementById('container_login'))
  a.innerHTML = document.getElementById('container_login').innerHTML;
  document.body.appendChild(a)

})
