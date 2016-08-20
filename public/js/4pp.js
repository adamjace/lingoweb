var app = new function() {
  this.init = function() {
    this.typed();
  }
  this.typed = function() {
    $(function(){
      $('h1 .typed').typed({
        strings: ['Hola', 'Salut!', 'Nǐ hǎo', 'Bonjour', 'Hei', 'Kon\'nichiwa', 'Olá', 'Ahoj', 'Hallo', 'Aloha', 'Shalom', 'Merhaba', 'Hej', 'Xin chào', 'Sawubona', 'Mucho Lingo'],
        typeSpeed: 70,
        backDelay: 1100,
        startDelay: 4000
      });
    });
  }
}
app.init();
