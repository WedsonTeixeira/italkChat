// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
          responsive: {
              details: {
                  type: 'column'
              }
          },
          columnDefs: [ {
              className: 'control',
              orderable: false,
              targets:   0
          } ],
          order: [ 1, 'asc' ],
          "language": {
              "sEmptyTable": "Nenhum registro encontrado",
              "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
              "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
              "sInfoFiltered": "(Filtrados de _MAX_ registros)",
              "sInfoPostFix": "",
              "sInfoThousands": ".",
              "sLengthMenu": "_MENU_ resultados por página",
              "sLoadingRecords": "Carregando...",
              "sProcessing": "Processando...",
              "sZeroRecords": "Nenhum registro encontrado",
              "sSearch": "Pesquisar",
              "oPaginate": {
                  "sNext": "Próximo",
                  "sPrevious": "Anterior",
                  "sFirst": "Primeiro",
                  "sLast": "Último"
              },
              "oAria": {
                  "sSortAscending": ": Ordenar colunas de forma ascendente",
                  "sSortDescending": ": Ordenar colunas de forma descendente"
              }
          }

      }
      );

});

$(document).ready(function() {
    $('#tabelasolicitacoes').DataTable( {
        responsive: {
            details: {
                type: 'column'
            }
        },
        columnDefs: [ {
            className: 'control',
            orderable: false,
            targets:   0
        } ],
        order: [ 1, 'asc' ],
        "searching": false,
        "language": {
            "sEmptyTable": "Nenhum registro encontrado",
            "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
            "sInfoFiltered": "(Filtrados de _MAX_ registros)",
            "sInfoPostFix": "",
            "sInfoThousands": ".",
            "sLengthMenu": "_MENU_ resultados por página",
            "sLoadingRecords": "Carregando...",
            "sProcessing": "Processando...",
            "sZeroRecords": "Nenhum registro encontrado",
            "sSearch": "Pesquisar",
            "oPaginate": {
                "sNext": "Próximo",
                "sPrevious": "Anterior",
                "sFirst": "Primeiro",
                "sLast": "Último"
            },
            "oAria": {
                "sSortAscending": ": Ordenar colunas de forma ascendente",
                "sSortDescending": ": Ordenar colunas de forma descendente"
            }
        }
    } );

} );

$(document).ready(function() {
    $('#tabelareservas').DataTable({
            responsive: {
                details: {
                    type: 'column'
                }
            },
            columnDefs: [ {
                className: 'control',
                orderable: false,
                targets:   0
            } ],
            order: ([ 2, 'asc' ],[5,'asc']),
            "language": {
                "sEmptyTable": "Nenhum registro encontrado",
                "sInfo": "Mostrando de _START_ até _END_ de _TOTAL_ registros",
                "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
                "sInfoFiltered": "(Filtrados de _MAX_ registros)",
                "sInfoPostFix": "",
                "sInfoThousands": ".",
                "sLengthMenu": "_MENU_ resultados por página",
                "sLoadingRecords": "Carregando...",
                "sProcessing": "Processando...",
                "sZeroRecords": "Nenhum registro encontrado",
                "sSearch": "Pesquisar",
                "oPaginate": {
                    "sNext": "Próximo",
                    "sPrevious": "Anterior",
                    "sFirst": "Primeiro",
                    "sLast": "Último"
                },
                "oAria": {
                    "sSortAscending": ": Ordenar colunas de forma ascendente",
                    "sSortDescending": ": Ordenar colunas de forma descendente"
                }
            }

        }
    );

});