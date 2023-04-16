

const t = []
const tor = [...new Set(t)]
console.log(t)
console.log(tor)



$('#vuvod').click(f1)
$('#del_pervoe').click(f2)
$('#del_posled').click(f3)
$('#del-povtor').click(f4)

function f1(){
    let numb = $('#in1').val()
    t.push(numb)
    $('#out').text(t)
}
$('#del').click( function (){
    $('#in1').val('')
})

function f2(){
      let numb = $('#in1').val()
    t.shift(numb)
   $('#out').text(t)
}

function f3(){
      let numb = $('#in1').val()
     t.pop(numb)
    $('#out').text(t)
}
function f4(){
     let numb = $('#in1').val()



}
/*
  let tor = t.filter(( item,index) => {
        return t.indexOf(item) === index
         })

   let tor = [...new Set(t)]
    console.log(tor)


*/