
const btn = document.querySelector('#btn');
console.log(btn);

btn.addEventListener('click', function(event) {
  let myMenu = document.getElementById('myMenu-js');
  let icons = document.querySelectorAll('.btn-img1');
  let icon = document.querySelector('.btn-img2');

  if (event.target.id == 'btn') {
    myMenu.style.display = (myMenu.style.display != 'block') ? 'block' : 'none';
    for(let i = 0; i < icons.length; i++){
      icons[i].style.display = (icons[i].style.display != 'none') ? 'none' : 'block';
    }
    icon.style.display = (icon.style.display != 'block') ? 'block' : 'none';
  }
});
