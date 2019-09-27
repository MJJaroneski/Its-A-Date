$(document).ready(function () {

  // Create an on-click function to start the AJAX call.
  $(document).on("click", "#zip-code-btn", function () {
    var queryURL = "https://api.seatgeek.com/2/events?client_id=MTQyMDg2OTJ8MTU2OTA2Njc3MC40NQ&geoip=" + zipCode + "&range=15mi";
    $("#event-box").empty();


    // AJAX call for SeatGeek.
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) { // Create a function to pull the responses to the AJAX call.
      console.log(response);

      for (var i = 0; i < response.events.length; i++) { // Create a for-loop to loop through response data.
        console.log(response.events[i]);

        var titleResults = response.events[i].title; // Create a series of variables to hold response data.
        var dateResults = response.events[i].datetime_local;
        var typeResults = response.events[i].type;
        var venueResults = response.events[i].venue.name;
        var priceResults = response.events[i].stats.average_price;
        var urlResults = response.events[i].url;
        console.log(dateResults);
        console.log(typeResults);
        console.log(venueResults);
        console.log(priceResults);
        console.log(urlResults);

        // Create a series of divs to hold and display the results in the HTML.
        var resultsDiv = $("<div class='row flex-wrap bg-light my-3 mx-3'>");
        var resultsInfo = $("<div class='col-md-9'>")
        resultsDiv.append(resultsInfo);
        var titleP = $("<p>").text(titleResults);
        var dateP = $("<p>").text("Date & Time: " + dateResults);
        var typeP = $("<p>").text("Type: " + typeResults);
        var venueP = $("<p>").text("Venue: " + venueResults);
        var priceP = $("<p>").text("Average Cost: $" + priceResults);
        var urlP = $("<a id='link' href='" + urlResults + "'>" + urlResults + "</a>")
        titleP.attr("class", "resultsP");
        dateP.attr("class", "resultsP");
        typeP.attr("class", "resultsP");
        venueP.attr("class", "resultsP");
        priceP.attr("class", "resultsP");
        urlP.attr("class", "resultsP");
        resultsDiv.prepend(titleP);
        resultsInfo.append(dateP);
        resultsInfo.append(typeP);
        resultsInfo.append(venueP);
        resultsInfo.append(priceP);
        resultsInfo.append(urlP);
        $("#event-box").append(resultsDiv);

      };

    });

  });

  // Create a function to store user input data for.
  $("#zip-code-btn").on("click", function (event) {
    event.preventDefault();
    zipCode = $("#zip-code-input").val().trim();
    console.log(zipCode);
  });  

  $("#brewery-btn").on("click", function (event) {
    event.preventDefault();
    cityInput = $("#city-brewery-input").val().trim();
    console.log(cityInput);
    stateInput = $("#state-brewery-input").val().trim();
    console.log(stateInput);
  })

  // Create a function to store user input data for breweries.

  $(document).on("click", "#brewery-btn", function () {
    var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + cityInput + "&by_state=" + stateInput;
    $("#brewery-box").empty();

    // AJAX call for OpenBreweryDB.
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) { // Create a function to pull the responses to the AJAX call.
      console.log(response);

      for (var i = 0; i < response.length; i++) { // Create a for-loop to loop through response data.
        console.log(response[i]);

        var nameResults = response[i].name; // Create a series of variables to hold response data.
        var addressResults = response[i].street;
        var phoneResults = response[i].phone;
        var websiteResults = response[i].website_url;
        console.log(nameResults);
        console.log(addressResults);
        console.log(phoneResults);
        console.log(websiteResults);

        // Create a series of divs to hold and display the results in the HTML.
        var bResultsDiv = $("<div class='row flex-wrap bg-light my-3 mx-3'>");
        var bResultsInfo = $("<div class='col-md-9'>")
        bResultsDiv.append(bResultsInfo);
        var nameP = $("<p>").text(nameResults);
        var addressP = $("<p>").text("Address: " + addressResults);
        var phoneP = $("<p>").text("Phone: " + phoneResults);
        var websiteP = $("<a id='link' href='" + websiteResults + "'>" + websiteResults + "</a>")
        nameP.attr("class", "resultsP");
        addressP.attr("class", "resultsP");
        phoneP.attr("class", "resultsP");
        websiteP.attr("class", "resultsP");
        bResultsDiv.prepend(nameP);
        bResultsInfo.append(addressP);
        bResultsInfo.append(phoneP);
        bResultsInfo.append(websiteP);
        $("#brewery-box").append(bResultsDiv);

      };

    });
  });
});
