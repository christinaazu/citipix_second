$(document).ready(function() {
  console.log('Ready!');
//create an array for the city names
var cityValue = [
  "NYC",
  "SF",
  "LA",
  "ATX",
  "SYD"
  ];
//create a variable that holds the element in city-type
var select = document.getElementById('city-type');
for(var i = 0; i < cityValue.length; i++) {
  $('#city-type').append('<option value="' + cityValue[i] + '">' +cityValue[i] + '</option>')
};
//     var opt = document.createElement('option');
//     opt.innerHTML = cityValue[i];
//     opt.value = cityValue[i];
//     select.appendChild(opt);
// };



  $('#city-type').on('change',swap);

//enter function to change background
//swap will take the variable cityInput and get the value of the city-type input
function swap () {
  var cityInput = $('#city-type').val();

  if (cityInput === 'NYC') {
      remove();
      $('body').addClass('nyc');
      event.preventDefault();
    }
    else if (cityInput === 'SF') {
      $('body').addClass('sf');
      event.preventDefault();
    }
    else if (cityInput === 'LA') {
      remove();
      $('body').addClass('la');
      event.preventDefault();
    }
    else if (cityInput === 'ATX') {
      remove();
      $('body').addClass('austin');
      event.preventDefault();
    }
    else if (cityInput === 'SYD') {
      remove();
      $('body').addClass('sydney');
      event.preventDefault();
    }
  }
});
//add function to remove background
function remove (){
  $('body').removeClass();
};

