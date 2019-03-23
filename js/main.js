// Funcao para criar tooltips de informacao
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('#btn-add-pac-int').click(function() {
   $( '#numero-funcional-pac-int' ).removeClass('hidden');
});

$('#pesquisa-pac-int').click(function() {
   $( '.dados-funcional' ).removeClass('hidden');
});

$('#btn-add-pac-ext').click(function() {
   $( '.convite-pac-ext' ).removeClass('hidden');
});


