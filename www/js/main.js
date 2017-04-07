$.post("../php/getJSON.php",
	{ feed: "https://docs.google.com/spreadsheet/pub?key=0AneWTc0o_1bpdEVVczlDckt2aXpmX0tRUU01eUZMX3c&single=true&gid=2030699110&output=csv" }
	).done(function(d) {
		
		console.log("champs:" + d);
		
		for (i in d) {
		  $('#championlist')
         .append($("<option></option>")
                    .attr("value", toTitleCase(d[i]["Code"]))
                    .text(d[i]["Name"])); 
		}
});

function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

/** copy button */
var clipboard = new Clipboard('button.btn');

clipboard.on('success', function(e) {
	e.clearSelection();
	$("body").scrollTop(0);
});

clipboard.on('error', function(e) {
	alert("Error copying! Use control+c instead");
});

/* End Copy Button */
