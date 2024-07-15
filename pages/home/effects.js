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


document.querySelectorAll('.nextProjectLink').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 

    document.body.classList.add('fade-out');

    setTimeout(function() {
      window.location.href = event.target.closest('a').href;
    }, 600); 
  });
});

const style = document.createElement('style');
style.innerHTML = `
  .fade-out {
    transition: opacity 1s ease-in-out;
    opacity: 0;
  }
`;
document.head.appendChild(style);