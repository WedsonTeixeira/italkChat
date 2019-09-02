let pessoa  = Object.create(Pessoa);
window.addEventListener('load',function(){
    pessoa = JSON.parse(this.localStorage.getItem('italk-user'))
    this.console.log(pessoa)
    let url = window.location.search.replace("?","");
    var campos =  url.split("=");
    pessoa.id = campos[1];
    pessoa =  getUser(pessoa.id);
});   


