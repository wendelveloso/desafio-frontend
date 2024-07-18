let items = document.querySelectorAll('.item_header')

function selectItem(){
    items.forEach((item) => 
        item.classList.remove('active')
    )
    this.classList.add('active')
}

items.forEach((item) => 
item.addEventListener('click', selectItem)
)


function addFadeOutClickListener(divClass) {
  document.querySelectorAll(divClass).forEach(div => {
    div.addEventListener('click', function(event) {
      const link = div.querySelector('.nextProjectLink');
      if (link) {
        event.preventDefault(); 

        document.body.classList.add('fade-out');

        setTimeout(function() {
          window.location.href = link.href;
        }, 600); 
      }
    });
  });
}


addFadeOutClickListener('.left_arrow');
addFadeOutClickListener('.right_arrow');


const style = document.createElement('style');
style.innerHTML = `
  .fade-out {
    transition: opacity 1s ease-in-out;
    opacity: 0;
  }
`;
document.head.appendChild(style);