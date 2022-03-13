document.querySelector('#but').addEventListener('click', quote)



function quote(){

    fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);

    const select = Math.random() * data.length
    const a = Math.floor(select)

    const name =data[a].text

    const select1 = Math.random() * data.length
    const b = Math.floor(select1)
    const author = data[b].author
    
    document.querySelector('#quote').innerText = name
    document.querySelector('#author').innerText = "~ " + author + " ~"
  });

}
