var select = document.getElementById("estados"); 
var cidade = document.getElementById("cidade"); 
const butaoSalvar = document.getElementById("salvar")

var options = ["São Paulo", "Rio de Janeiro", "Ceará"]; 
var cidade1 = ["São Paulo", "Itápolis", "Araraquara", "Ribeirão Preto", "Jacareí"];
var cidade2 = ["Rio de Janeiro", "Niteroi", "Petropolis", "Belford Roxo", "Nova Iguaçu"];
var cidade3 = ["Fortaleza", "Sobral", "Iguatu", "Mombaça", "Parambu"];


for(var i = 0; i < options.length; i++) {
    var opt = options[i];
    var el = document.createElement("option");
    el.textContent = opt;
    el.value = opt;
    //console.log(el)
    select.appendChild(el);
} 
myFunction  = function (){
	if(select){
      var t = document.getElementById("estados");
      var selectedText = t.options[t.selectedIndex].text;

      if(selectedText == 'São Paulo'){
          for(var j = 0; j < cidade1.length; j++) {
              var opt = cidade1[j];
              var el = document.createElement("option");
              el.textContent = opt;
              el.value = opt;
              cidade.appendChild(el);
          }   
      }
      if(selectedText == 'Rio de Janeiro'){
        for(var j = 0; j < cidade2.length; j++) {
            var opt = cidade2[j];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            cidade.appendChild(el);
        }   
    }
    if(selectedText == 'Ceará'){
        for(var j = 0; j < cidade3.length; j++) {
            var opt = cidade3[j];
            var el = document.createElement("option");
            el.textContent = opt;
            el.value = opt;
            cidade.appendChild(el);
        }   
    }
    const select1 = document.getElementById("estados")
    select1.addEventListener('change', () => {
        estado = select1.options[select1.selectedIndex].text;
    })
    
    const select2 = document.getElementById("cidade")
    select2.addEventListener('change', () => {
        cidade = select2.options[select2.selectedIndex].text;
    })
    
    butaoSalvar.addEventListener('click', () => {
        alert("UF: " + select + " - Cidade: " + cidade + ", Salvo com sucesso!");
    })
}
}
