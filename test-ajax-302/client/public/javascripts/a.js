$(function(){
  $.get("./ajax/test.action", function(data){
    console.log(data);
  });
})