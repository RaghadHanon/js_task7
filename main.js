
function addCards(){
  const texts =["لا أله إلا الله","سبحان الله وبحمده","الله أكبر","أستغفر الله وأتوب إليه","الحمد لله" ," اللهم صلّ وسلم وبارك على سيدنا محمد "];
  const cards =document.querySelector(".Items .container .column");

  let result = texts.map( (t)=>{
    return `
    <div class="card">
   <p onclick="increaseCounter(event)" >${t}</p>
   <div class="row">
    <div class="count">
      <span >التكرار</span>
      <span class="counter">0</span>
    </div>
    <div class="reset">
      <span >إعادة</span>
      <svg onclick=resetCounter(event) width="30px" height="30px" viewBox="-7.6 -7.6 91.21 91.21" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" enable-background="new 0 0 76.01 76.01" xml:space="preserve" fill="#ffffff" stroke="#ffffff" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-7.6" y="-7.6" width="91.21" height="91.21" rx="45.605" fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.30404000000000003"></g><g id="SVGRepo_iconCarrier"> <path fill="#5f9ea0" fill-opacity="1" stroke-width="1.67222" stroke-linejoin="round" d="M 50.672,20.5864L 55.4219,25.3364L 55.422,38.0031L 42.7553,38.0031L 38.0053,33.2531L 46.8578,33.2522C 44.6831,30.8224 41.5227,29.2932 38.0052,29.2932C 31.4459,29.2932 26.1285,34.6106 26.1285,41.1699C 26.1285,44.4495 27.4579,47.4187 29.6071,49.5679L 25.6881,53.4869C 22.5359,50.3347 20.5862,45.9799 20.5862,41.1698C 20.5862,31.5494 28.385,23.7507 38.0053,23.7507C 42.9966,23.7507 47.4975,25.8499 50.6734,29.2137L 50.672,20.5864 Z "></path> </g></svg>
    </div>
   </div>
  </div>
    `;

  }).join('');
  cards.innerHTML= result;
}

function increaseCounter(event){
  const counter =event.target.closest('.card').querySelector('.counter');
  counter.textContent++;

}

function resetCounter(event){
  const counter =event.target.closest('.card').querySelector('.counter');
  counter.textContent=0;

}

addCards();