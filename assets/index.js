let _MS_PER_DAY = 1000 * 60 * 60 * 24;
let liEls = document.getElementById('carousel').getElementsByTagName('li');
let index = 0
let courses_info = [
  {url: "https://stepik.org/cert/1254749", name: "Writing your own messenger"},
  {url: "https://stepik.org/cert/199708", name: "Python: usage"},
  {url: "https://stepik.org/cert/186449", name: "Enter the data science and machine learning"},
  {url: "https://stepik.org/cert/106859", name: "Web projects analyze"},
  {url: "", name: "Statistic learning"},
  {url: "", name: "Game theory"},
  {url: "", name: "Computer science 101"},
  {url: "", name: "How to learn math: for students"},
  {url: "", name: "Introduction to logic"},
  {url: "https://stepik.org/cert/214007", name: "Web developming basics: HTML and CSS"},
];
let then = new Date(2019, 09);
let now  = new Date;

function dateDiffInDays(a, b) {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

window.show = function(move) {
  index = index + move;
  index = Math.min(Math.max(index,0), liEls.length-1);
  liEls[index].scrollIntoView({behavior: 'smooth'});
  document.getElementById('course_page').innerHTML = `${index+1}/${liEls.length}`
  document.getElementById('course_info').innerHTML = `<a target='_blank' href='${courses_info[index].url}'>${courses_info[index].name}</a>`;
}

document.getElementById('exp_counter').innerHTML = `${dateDiffInDays(then, now)} days`;
document.getElementById('course_info').innerHTML = `<a target='_blank' href='${courses_info[0].url}'>${courses_info[0].name}</a>`;
document.getElementById('course_page').innerHTML = `${index+1}/${liEls.length}`
