 
//  starting map
 // Where you want to render the map.
 var element = document.getElementById('osm-map');

 // Height has to be set. You can do this in CSS too.
 element.style = 'height:100%;';
 
 // Create Leaflet map on map element.
 var map = L.map(element);
 
 // Add OSM tile leayer to the Leaflet map.
 L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
 }).addTo(map);
 
 // Target's GPS coordinates.
 var target = L.latLng('15.314429', '44.1821137');
 
 // Set map's center to target with zoom 14.
 map.setView(target, 14);
 
 // Place a marker on the same location.
 L.marker(target).addTo(map);
//  ending map

// starting form
$(document).ready(function () {
    // Test for placeholder support
    $.support.placeholder = (function () {
      var i = document.createElement("input");
      return "placeholder" in i;
    })();

    // Hide labels by default if placeholders are supported
    if ($.support.placeholder) {
      $(".form-label").each(function () {
        $(this).addClass("js-hide-label");
      });

      // Code for adding/removing classes here
      $(".form-group")
        .find("input, textarea")
        .on("keyup blur focus", function (e) {
          // Cache our selectors
          var $this = $(this),
            $label = $this.parent().find("label");

          switch (e.type) {
            case "keyup":
              {
                $label.toggleClass("js-hide-label", $this.val() == "");
              }
              break;
            case "blur":
              {
                if ($this.val() == "") {
                  $label.addClass("js-hide-label");
                } else {
                  $label
                    .removeClass("js-hide-label")
                    .addClass("js-unhighlight-label");
                }
              }
              break;
            case "focus":
              {
                if ($this.val() !== "") {
                  $label.removeClass("js-unhighlight-label");
                }
              }
              break;
            default:
              break;
          }
        });
    }
  });
// ending form

