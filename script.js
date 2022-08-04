let optionMode = document.querySelector('#checkbox');
    optionMode.onclick = ()=>{
        let calculator = document.querySelector
        ('#calculator-main');
    let main_board = document.querySelector('.current-calc');
        let calc_btn = document.querySelectorAll('.calc-button button');
        if(optionMode.checked){
            calculator.style.backgroundColor = '#fff';
            calc_btn.forEach(btn =>btn.style.color='#000');
            main_board.style.color = '#000';
        }
        else{
            calc_btn.forEach(btn =>btn.style.color='#fff');
            calculator.style.backgroundColor = '#64686b';
            main_board.style.color = '#f5b150';
        }
    }
    let display = (value) =>{
        let main_board = document.querySelector('.current-calc');
        main_board.innerHTML += value.innerText;
    }
    let result = ()=>{
        const math = {
            'x':"*",
            '÷':'/',
            '%':'/100'
        }
        let main_board = document.querySelector('.current-calc');
        if(main_board.innerText){
            let result = main_board.innerText.replace(/x|÷|%/gi,matched=>math[matched])
            main_board.innerHTML = eval(result)
        }
    }
    let duplicate = (value) =>{
        return value.innerText === ''||value.innerText.slice(-1).match(/-|\+|\*|\÷|\.|\%/)?true:false;
    }
    let percent = ()=>{
        let main_board = document.querySelector('.current-calc');
        if(duplicate(main_board))return
        main_board.innerHTML += '%'
    }
    let plus = () =>{
        let main_board = document.querySelector('.current-calc');
        if(duplicate(main_board))return;
        main_board.innerHTML +='+';
    }
    let minus = () =>{
        let main_board = document.querySelector('.current-calc');
        if(duplicate(main_board))return;
        main_board.innerHTML +='-';
    }
    let time = () =>{
        let main_board = document.querySelector('.current-calc');
        if(duplicate(main_board))return;
        main_board.innerHTML +='x';
    }
    let divide = () =>{
        let main_board = document.querySelector('.current-calc');
        if(duplicate(main_board))return;
        main_board.innerHTML +='÷';
    }
    let dot =()=>{
        let main_board = document.querySelector('.current-calc');
        if(duplicate(main_board))return;
        main_board.innerHTML +='.';
    }
    let clearAll =() =>{
        let main_board = document.querySelector('.current-calc');
        let previous_board = document.querySelector('.previous-calc');
        previous_board.innerHTML ='';
        main_board.innerHTML = '';
    }
    let sliceLast = () =>{
        let main_board = document.querySelector('.current-calc');
        main_board.innerHTML = main_board.innerText.slice(0,-1);
    }

