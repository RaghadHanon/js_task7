
function addCards(){

  const cards =document.querySelector(".Items .container .column");
  cards.innerHTML= `
  <div class="card">
  <p onclick="increaseCounter(event)" >لا إله ألا الله</p>
  <div class="count">
    <span class="counts">التكرار</span>
    <span class="counter">0</span>
  </div>
  </div>
  <div class="card">
  <p onclick="increaseCounter(event)">سبحان الله وبحمده</p>
  <div class="count">
    <span class="counts">التكرار</span>
    <span class="counter">0</span>
  </div>
  </div>
  <div class="card">
  <p onclick="increaseCounter(event)">الله أكبر</p>
  <div class="count">
    <span class="counts">التكرار</span>
    <span class="counter">0</span>
  </div>
  
  </div>
  <div class="card">
  <p onclick="increaseCounter(event)"> أستغفر الله وأتوب إليه</p>
  <div class="count">
    <span class="counts">التكرار</span>
    <span class="counter">0</span>
  </div>
  </div>
  `;  
}

function increaseCounter(event){
  const counter =event.target.closest('.card').querySelector('.counter');
  counter.textContent++;

}

addCards();