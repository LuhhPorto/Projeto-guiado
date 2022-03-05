    
var peopleRaw = localStorage.getItem('people')
if (peopleRaw != null) {
    var people = JSON.parse(peopleRaw)
}  else {
    var people = []; 
}

function DesenharTabela() {    


    todasaslinhas = [...document.querySelectorAll('section table.lista .conteudo-dinamico')];

    todasaslinhas.forEach ((element) => {
        element.remove()
    })
        

    for (person in people) {
        document.querySelector ('section table.lista').innerHTML +=

                `<tr class="conteudo-dinamico" style='background-color: ${ ((person % 2 == 0 ) ? '#fff' : '#eee') }'>
                    <td> ${ people[person].nome } </td>
                    <td> ${ people[person].tel } </td>
                    <td> ${ people[person].xp ? '<strong style="color:green"> Sim </strong> ' : '<strong style="color:red"> Não </strong>' } </td>

                    <td> <button onclick="deletarUsuario(${person})"> Excluir </button> 
                    <a href="./form.html?person=${person}"> Editar </a>   </td>
                </tr> `    
        }
    }

    function deletarUsuario(p) {
        people.splice(p, 1); 
        DesenharTabela(); 
        localStorage.setItem('people', JSON.stringify(people))
    }

    DesenharTabela()


