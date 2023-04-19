

const array = []
console.log(array)
console.log(array.length)

$('#vuvod').click(f1)
$('#del_pervoe').click(f2)
$('#del_posled').click(f3)
$('#del_povtor').click(f4)

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
    array.shift()
   $('#out').text(array)
}

function f3(){
 let numb = $('#in1').val()
     array.pop()
    $('#out').text(array)
}


function f4() {
  const makeUniq = (array) => {
      return array.filter((numb,id) => array.indexOf(numb) === id);
  }
  $('#tur').text(makeUniq(array))
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


 //       array.sort(numb)
    for (let i=0; i<array.length; i++) {
        if (array[i]===array[i+1]) {
            array.splice(i+1,1)
            $('#tur').text(array)
        }
    }

 //     let array_1 = new Set(array)
    let array_2 = Array.from(array_1)
    array_2.push(numb)
    $('#out').text(array_2)

 //const resalt = []
    for (let i = 0; i <array.length; i++ ){
        if ( ! inArray(resalt, array[i])){
            resalt.push(array[i])
        }
    }
  function inArray(array,numb){
        for (let i=0;i<array.length;i++){
            if (array[i] === numb){
                return true
            }
        }
        return false
  }
  ///
*/