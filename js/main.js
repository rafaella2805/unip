// Funcao para criar tooltips de informacao
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
// Funcao para chamar modal de historico escolar
$('#modalHistorico').on('shown.bs.modal', function () {
  $('#historico-escolar-modal').trigger('focus')
})
// Funcao para chamar modal de resumo projeto
$('#modalResumo').on('shown.bs.modal', function () {
  $('#resumo-projeto-modal').trigger('focus')
})