document.getElementById("copy").addEventListener("click",function(e){
    e.preventDefault();
    alert("Copy");
    console.log("sa");
})
function callPop(card){
     const paragraph = card.querySelector("p").innerText;
        const number = card.querySelector("h2").innerText;

        alert("Calling "+paragraph  +" Service"+ " : "+number);
}
document.getElementById("National-Emergency").addEventListener("click",function(e){
    e.preventDefault();
     const card = this.closest(".border");
     callPop(card);
       
})
document.getElementById("police").addEventListener("click",function(e){
    e.preventDefault();
     const card = this.closest(".border");
     callPop(card);     
})

document.getElementById("love").addEventListener("click",function(e){
   
})

  const icons = document.querySelectorAll('.icon'); // Select all icons
    const counter = document.getElementById('love-count');
    let count = 0;

    icons.forEach(icon => {
      icon.addEventListener('click', () => {
        count++;                  // Increment global counter
        counter.textContent = count; // Update display
      });
    });