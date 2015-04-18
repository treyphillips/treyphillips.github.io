var doc = document,
    overlay = doc.querySelector('.overlay');

// Open the modal
doc.querySelector('.open').addEventListener("click", function(){
  overlay.classList.add('show');
});

// Close the modal
doc.querySelector('.close').addEventListener("click", function(){
  overlay.classList.remove('show');
});
