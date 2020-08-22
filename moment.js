<!DOCTYPE html>
<html>
<head>
  <!-- reference Moment.js library -->
  <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.7.0/moment.min.js" type="text/javascript"></script>
</head>
<body>

<h2>Moment Date</h2>
<!-- container for Moment.js output -->
<div id="displayMoment"></div>

<h2>JavaScript Date</h2>
<!-- container for JavaScript Date output -->
<div id="displayJsDate"></div>

<script type="text/javascript">
(function()
{
  // instantiate a moment object
  var NowMoment = moment();
  
  // instantiate a JavaScript Date object
  var NowDate = new Date();
  
  // display value of moment object in #displayMoment div
  var eDisplayMoment = document.getElementById('displayMoment');
  eDisplayMoment.innerHTML = NowMoment;
  
  // display value of Date object in #displayJsDate div
  var eDisplayDate = document.getElementById('displayJsDate');
  eDisplayDate.innerHTML = NowDate;
})();
</script>

</body>
</html>