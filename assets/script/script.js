function verificaCheckbox() {
    let casella = document.getElementById('miaCheckbox');
    if (!casella.checked) {
        alert('Per favore, seleziona la casella per continuare');
    }else if(casella.checked){
        const element = document.getElementById("first");
        element.remove();
        creation();
        countdown();
        trovaNumero();
    }
}
