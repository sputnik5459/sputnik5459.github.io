// import './styles.css'

const _MS_PER_DAY = 1000 * 60 * 60 * 24;
function dateDiffInDays(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

var then = new Date(2019, 09);
var now  = new Date;

document.getElementById('exp_counter').innerHTML = `${dateDiffInDays(then, now)} days`;

let liEls = document.getElementById('carousel').getElementsByTagName('li');
let index = 0;

console.log(liEls);
window.show = function(increase) {
  index = index + increase;
  index = Math.min(Math.max(index,0), liEls.length-1);
  liEls[index].scrollIntoView({behavior: 'smooth'});
}
