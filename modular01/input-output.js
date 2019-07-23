
  define("input-output",[
    "jquery",
    "ko"
  ], function($)
  {
    $(function()
    {
        //do stuff
        alert('required plugins loaded...');
        ko.components.register('input-output',{
          template:{ require: 'text!/modular01/input-output.html' } 
            ,
          //constructor viewModel
          viewModel: function(){
               this.textInput = ko.observable();
          }
        })           
          ko.applyBindings();
    });
  });
  