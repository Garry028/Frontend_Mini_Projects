let view= document.getElementById('pageView');
let cost = document.getElementById('cost');
let cost2 = document.getElementById('cost2');
let slider = document.getElementById('price-slider');
let toggle=document.getElementById('billing');
let isYearly=false;

let pageviews=["10K","50K","100K","500K","1M"];
let perMonth=[8,12,16,24,36];


slider.addEventListener('input',function(){
updateValue();
// console.log(slider.value); // value of the slider starting from 0 till 4
 view.innerHTML=pageviews[slider.value];
 let value=this.value*25; // for changing the slider color based on the value of the slider
 this.style.background =  
`
linear-gradient(to right,
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${value}%,
    hsl(224, 65%, 95%)0%,
    hsl(224, 65%, 95%) 100%)
 `

});

toggle.addEventListener('change',function(){
    if(isYearly==false) // means whenever we click on the toggle button iseYearly subscription will be apilled
    {
        isYearly=true;
    }
    else{
        isYearly=false;
    }
    updateValue();
})

function updateValue()
{
    if(isYearly)
    {
        // let a=perMonth[slider.value]*0.75;
        // console.log(a);
        cost.innerHTML=perMonth[slider.value] *0.75;
        cost2.innerHTML=perMonth[slider.value] *0.75;

        // 25% discount on yearly subscription means 75 

    }
    else{
        cost.innerHTML=perMonth[slider.value];
        cost2.innerHTML=perMonth[slider.value];
    }
}

