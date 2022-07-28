const panels= document.querySelectorAll('.panel');

panels.forEach((panel) =>{
    panel.addEventListener('click', (e) =>{
        removeActiveClasses();
        panel.classList.toggle('active');
    });
});

function removeActiveClasses()
{
    panels.forEach((panel) =>{
        panel.classList.remove('active');
    });
}