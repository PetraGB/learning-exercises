var field = $("input");
var resultContainer = $(".results");

field.on("input", function() {
    var written = field.val();

    // in case you press enter and then want to type again
    resultContainer.removeClass("disappear");

    // if all input is gone, does not show full country list
    if (written.length == 0) {
        allResults = "";
        resultContainer.html(allResults);
        return;
    }

    // make list of all matching countries
    var results = [];
    for (var i = 0; i < countries.length; i++) {
        if (countries[i].toLowerCase().indexOf(written.toLowerCase()) == 0) {
            results.push(countries[i]);
        }
    }
    // shorten if longer than 4
    if (results.length >= 4) {
        results = results.slice(0, 4);
    }

    // string of results in divs to be pushed into results div
    var allResults = "";
    for (var i = 0; i < results.length; i++) {
        allResults += "<div class='result'>" + results[i] + "</div>";
    }

    // if there are no matches: clear results and give back no results as result
    if (results.length == 0) {
        results = [];
        allResults = "<div class='none'> no results </div>";
    }

    // pushing results inside divs to results div
    resultContainer.html(allResults);
});

resultContainer.on("mouseover", function(e) {
    $(".highlight").removeClass("highlight");
    // if statement so -no result- does not seem clickable
    if ($(e.target).hasClass("result")) {
        $(e.target).addClass("highlight");
    }
});

resultContainer.on("mousedown", function(e) {
    var chosenCountry = e.target.innerText;
    if ($(e.target).hasClass("none")) {
        return;
    }
    field.val(chosenCountry);
    $(".result").addClass("disappear");
});

field.on("keydown", function(e) {
    var eachResult = $(".result");

    if (e.key == "ArrowDown" || e.key == "Down") {
        for (var i = 0; i < eachResult.length; i++) {
            if (eachResult.eq(i).hasClass("highlight")) {
                // if (i != eachResult.length - 1) {
                //
                // if (i == eachResult.length - 1) {
                //     break;
                // }

                eachResult.removeClass("highlight");
                eachResult
                    .eq(i)
                    .next()
                    .addClass("highlight");
                break;

                // else if (i == eachResult.length - 1) {
                //     return;
                // }
                // eachResult.removeClass("highlight");
                // eachResult
                //     .eq(i)
                //     .next()
                //     .addClass("highlight");
                // break;
            } else {
                eachResult.eq(0).addClass("highlight");
            }
        }
    } else if (e.key == "ArrowUp" || e.key == "Up") {
        for (var i = 0; i < eachResult.length; i++) {
            if (eachResult.eq(i).hasClass("highlight")) {
                eachResult.removeClass("highlight");
                eachResult
                    .eq(i)
                    .prev()
                    .addClass("highlight");
                break;
            }
        }
    } else if (e.key == "Enter") {
        var chosenCountry = $(".highlight").html();
        field.val(chosenCountry);
        $(".results").addClass("disappear");
    }
});

field.on("focus", function(e) {
    resultContainer.removeClass("disappear");
});

field.on("blur", function(e) {
    resultContainer.addClass("disappear");
});

var countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Angola",
    "Anguilla",
    "Antigua",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bonaire (Netherlands Antilles)",
    "Bosnia Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, The Democratic Republic of",
    "Cook Islands",
    "Costa Rica",
    "Croatia",
    "Curacao (Netherlands Antilles)",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iraq",
    "Ireland (Republic of)",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kosrae Island",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia (FYROM)",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Moldova",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Ponape",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Rota",
    "Russia",
    "Rwanda",
    "Saba (Netherlands Antilles)",
    "Saipan",
    "Samoa",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St. Barthelemy",
    "St. Croix",
    "St. Eustatius (Netherlands Antilles)",
    "St. John",
    "St. Kitts and Nevis",
    "St. Lucia",
    "St. Maarten (Netherlands Antilles)",
    "St. Thomas",
    "St. Vincent and the Grenadines",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Tinian",
    "Togo",
    "Tonga",
    "Tortola",
    "Trinidad and Tobago",
    "Truk",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos",
    "Tuvalu",
    "US Virgin Islands",
    "Uganda",
    "Ukraine",
    "Union Island",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Virgin Gorda",
    "Wallis and Futuna",
    "Yap",
    "Yemen",
    "Zambia",
    "Zimbabwe"
];
