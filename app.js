$(document).ready(function ()   {
    $('#saveButton').click(function (event) {
        event.preventDefault();
        const nome=$('#name').val()
        const email=$('#email').val()
        if (nome==="") {
            alert("prencha seu nome")
            return
        }
            if (email==="") {
                alert("prencha seu email")
                return
            
        }
        $(".add-to-cart").attr("disabled",false)
    })
    
})
var total=0



function adicionarAoCarrinho (nome,valor) {
    const listaDeItens =$('#cartItems')
    const li =$('<li></li>');
    li.text(nome)
    listaDeItens.append(li)
    total= total+valor
    const valortotal =$('#totalPrice')
    valortotal.text(total)
    console.log(valortotal)
   
    
}