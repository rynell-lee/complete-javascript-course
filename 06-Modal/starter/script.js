'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const cBtn = document.querySelector('.close-modal');
const oBtn = document.querySelectorAll('.show-modal'); //all selectsall the similar classes

console.log(oBtn);

//looping thru all the similar classes
//adding and removing of classes is one of the main ways to change style in websites
for (let i = 0; i < oBtn.length; i++) {
  //   console.log(oBtn[i].textContent);
  oBtn[i].addEventListener('click', function () {
    console.log('cliked');
    modal.classList.remove('hidden'); //removes a part of the class?
    overlay.classList.remove('hidden');
  });
}

const closeModal = () => {
  modal.classList.add('hidden'); //add a part of the class
  overlay.classList.add('hidden');
};

//there is no () as we only want the function to exectue when we click the buttons
cBtn.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//keyboard events are global, listens to whole docuemnt
document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
