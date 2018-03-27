$(function() {
  $("#transport").submit(function(event) {
    $("#work-responses").show();
    $("input:checkbox[name=work]:checked").each(function() {
      var workTransport = $(this).val();
      $("#work-responses").append(workTransport + "<br>");
    });
    $("#fun-responses").show();
    $("input:checkbox[name=fun]:checked").each(function() {
      var funTransport = $(this).val();
      $("#fun-responses").append(funTransport + "<br>");
    });
    $("#transport").hide();
    event.preventDefault();
  });
});
