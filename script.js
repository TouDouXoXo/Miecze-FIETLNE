function radio_generate()
{
    const color_name = ["Red", "Firebrick", "Dark Red", "Crimson", "Indianred", "Maroon", "Light Coral", "Rasberry", "Ruby", "Rust Red", "Jazzberry", "Dark"];
    const colors = ["#FF0000", "#B22222", "#8B0000", "#DC143C", "#CD5C5C", "#800000", "#F08080", "#C42847", "#D81E5B", "#931F1D", "#AA1155", "#0c0c0c"];

    for(var i = 0; i <= colors.length - 1; i++)
    {
        var element = document.getElementById("color");

        var input = '';
        if(i === 0){input = '<input type="radio" name="color_radio" value="color_' + i + '" class="radio_color" id="color_' + i + '" value="' + colors[i] + '" color_data="'+colors[i]+'" checked/>';}
        else {var input = '<input type="radio" name="color_radio" value="color_' + i + '" class="radio_color" id="color_' + i + '" value="' + colors[i] + '" color_data="'+colors[i]+'"/>';}
        element.innerHTML += input;
        element.innerHTML += '<label for="color_' + i + '">' + color_name[i] + '</label>';
    }

    let colorButton = document.querySelectorAll('.radio_color');
    colorButton.forEach(btn => {
        btn.addEventListener('click', () =>{
            let dataColor = btn.getAttribute('color_data');
            document.querySelector(':root').style.setProperty('--lightsaber-color', dataColor);
        });
    });

    let typeButton = document.querySelectorAll('.type_radio');
    typeButton.forEach(btn => {
        btn.addEventListener('click', () =>{
            let type = btn.getAttribute('saber_type');
            if(type === "cross")
            {
                document.getElementsByClassName('lightsaber_normal')[0].style.display = 'none';
                document.getElementsByClassName('lightsaber_cross')[0].style.display = 'block';
                document.getElementsByClassName('lightsaber_double')[0].style.display = 'none';
            }
            else if(type === "double")
            {
                document.getElementsByClassName('lightsaber_normal')[0].style.display = 'none';
                document.getElementsByClassName('lightsaber_cross')[0].style.display = 'none';
                document.getElementsByClassName('lightsaber_double')[0].style.display = 'block';
            }
            else
            {
                document.getElementsByClassName('lightsaber_normal')[0].style.display = 'block';
                document.getElementsByClassName('lightsaber_cross')[0].style.display = 'none';
                document.getElementsByClassName('lightsaber_double')[0].style.display = 'none';
            }
        });
    });
}

window.onload = function () {
    radio_generate();
    document.getElementById("color_0").click();
    document.getElementById("type_0").click();
}