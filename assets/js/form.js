function testarformulario(e) {
    e.preventDefault();

  //  for (i in e.target.elements['tel'].value) {
  //      if ('0123456789'.indexOf(e.target.elements['tel'].value[i]) == -1) {
  //         alert('Apenas números são permitidos no campo telefone!')
  //          return false
  //      }
  //  }

  var telefonepadrao = /[^0-9-() ]+/g
    if (telefonepadrao.test(e.target.elements['tel'].value)) {
        alert('Apenas números são permitidos no campo telefone!')
        return false
    }

    if (e.target.elements['tel'].value.replace(/[-() ]/g, '').length < 11) {
        alert ('Número inválido!')
        return false
    }

var peopleRaw = localStorage.getItem('people')
if (peopleRaw != null) {
    var people = JSON.parse(peopleRaw)
} else {
    var people = [];
}

if (id !== null) {
    people[id] = {
        nome: e.target.elements['nome'].value,
        tel: e.target.elements['tel'].value,
        xp: (e.target.elements['xp'].value == 'true')
    }    

} else {
    people.push({
    nome: e.target.elements['nome'].value,
    tel: e.target.elements['tel'].value,
    xp: (e.target.elements['xp'].value == 'true')
    })
}

localStorage.setItem('people', JSON.stringify(people))

document.getElementById('goHome').click()
}
var urlPrincipal = new URL(window.location.href)

var id = urlPrincipal.searchParams.get('person')
if (id !== null) {
    var peopleRaw = localStorage.getItem('people')
if (peopleRaw != null) {
    var people = JSON.parse(peopleRaw)
} else {
    var people = [];
}
 
console.log(people[id])

document.getElementById('nome').value = people[id].nome
document.getElementById('tel').value = people[id].tel
if (people[id].xp) {
    document.getElementById('xp-yes').checked = true
} else {
    document.getElementById('xp-no').checked = true
}

}

function testacampotel(e) {
    e.preventDefault()
    console.log(e)

    if (e.target.value.length == '0') {
        e.target.value += '('
    }
    
    if (e.target.value.length == '3') {
        e.target.value += ') '
    }

    if (e.target.value.length == '10') {
        e.target.value += '-'
    }

    if ((/[0-9]/g).test(e.key) && e.target.value.length < 15) {
        e.target.value += e.key
    }
}