

const array = []
console.log(array)
console.log(array.length)

$('#vuvod').click(f1)
$('#del_pervoe').click(f2)
$('#del_posled').click(f3)
$('#del-povtor').click(f4)

function f1(){
    let numb = $('#in1').val()
    array.push(numb)
    $('#out').text(array)
}
$('#del').click( function (){
    $('#in1').val('')
})

function f2(){
      let numb = $('#in1').val()
    array.shift(numb)
   $('#out').text(array)
}

function f3(){
      let numb = $('#in1').val()
     array.pop(numb)
    $('#out').text(array)
}


function f4() {
    let numb = $('#in1').val()
     array.sort(numb)
    for (let i=0; i<array.length; i++) {
        if (array[i]===array[i+1]) {
            array.splice(i+1,1)
        }
    }
     $('#tur').val(array)
}

/*
  let tor = t.filter(( item,index) => {
        return t.indexOf(item) === index
         })

   let tor = [...new Set(t)]
    console.log(tor)

 //   let numb = $('#in1').val()
    const uniqArray = array.filter((numb,index) => index === array.indexOf(numb));
    $('#out').text(uniqArray)

//  let uniqArray = [... new Set(array)]
    array = uniqArray
      $('#out').text(uniqArray)
*/