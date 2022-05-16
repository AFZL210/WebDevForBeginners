let string = "";
let buttons = document.querySelectorAll('.buttons')

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target);

        if(e.target.innerHTML == '=') {
            string = eval(string)
            string = '=' + string
            document.querySelector('input').value = string
        }

       else  if(e.target.innerHTML == 'C') {
            string = ' '
            output.value = string;
        }

        else{
            string = string + e.target.innerHTML
            document.querySelector('input').value = string
        }

    })
})