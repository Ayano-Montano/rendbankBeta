
function menuResponsivo() {

  const aside = document.getElementById('aside')

  if (aside.style.right == '250vh') {
    aside.style.right = '0vh'

  }
  else {
    aside.style.right = '250vh'
  }
}