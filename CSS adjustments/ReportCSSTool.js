/* Tested in TDS 14.0 */
/* This file should be uploaded to the document center as a .js file */
function initialize_editor() {
	// remove the existing report styles
	$('body style').empty();
	// add the styles for the editor
	$('body').prepend('<style id="interface-styles" type="text/css">#editor {position: absolute;top: 10px;left: 10px;display: none;border: 1px solid;border-radius: 10px;width: 290px;height: 270px;padding: 5px;background-color: white;-webkit-touch-callout: none;-webkit-user-select: none;-khtml-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;font-size: 11pt;font-family: Arial, Verdana, san-serif;}#editor h1 {font-size: 18pt; margin-top: 0px;}#editor-instruction {display: none;font-size: 30pt;text-align: center;}#font-selector {margin: 10px 10px 0px 10px;}.size-button {cursor: pointer;border: 1px solid;border-radius: 5px;width: 50px;height: 50px;vertical-align: middle;font-size: 28pt;}.size-button:hover {background-color: aquamarine;}.size-button:active {background-color: mediumaquamarine;}.font-resizer {float: left;margin: 10px;text-align: center;}.font-currentsize {margin: 5px;}</style>');
	// add the editor interface
	$('#interface-styles').after('<div id="editor-instruction">press "esc" to change font or font size</div><div id="editor"><h1>Report display options</h1><div id="font-selector">Font:<select><option value="Verdana, Arial, Helvetica, Tahoma, sans-serif">Verdana</option><option value="Arial, Helvetica, Tahoma, sans-serif">Arial</option><option value="Tahoma, Geneva, sans-serif;">Tahoma</option><option value="Trebuchet ms, Helvetica, sans-serif;">Trebuchet</option><option value="Comic sans ms, cursive;">Comic Sans :P</option></select></div><div id="H3b-size" class="font-resizer">1st<br/>Header<div id="H3b-plus" class="size-button">+</div><div id="H3b-field" class="font-currentsize">9pt</div><div id="H3b-minus" class="size-button">-</div></div><div id="H4b-size" class="font-resizer">2nd<br/>Header<div id="H4b-plus" class="size-button">+</div><div id="H4b-field" class="font-currentsize">8pt</div><div id="H4b-minus" class="size-button">-</div></div><div id="H5b-size" class="font-resizer">Name<br/>&amp; Sum<div id="H5b-plus" class="size-button">+</div><div id="H5b-field" class="font-currentsize">7pt</div><div id="H5b-minus" class="size-button">-</div></div><div id="small-size" class="font-resizer">Column<br/>&amp; Data<div id="small-plus" class="size-button">+</div><div id="small-field" class="font-currentsize">7pt</div><div id="small-minus" class="size-button">-</div></div></div>');
	// add hidden fields for storing the setting values with defaults
	$('#editor').after('<input type="hidden" value="Verdana, Arial, Helvetica, Tahoma, sans-serif" name="Font"><input type="hidden" value="9" name="H3bsize"><input type="hidden" value="8" name="H4bsize"><input type="hidden" value="7" name="H5bsize"><input type="hidden" value="7" name="smallsize">');
	update_formatting('init');
	// set the key trigger to toggle the interface
	$("body").keyup(function(event) {
		if (event.which == 27) {
			$("#editor").slideToggle();
		}
	});
	// set the triggers on the buttons and drop-down menu
	$(".size-button").click(function() {
		update_formatting($(this).attr('id'));
	});
	$("#font-selector").change(function() {
		update_formatting($(this).attr('id'));
	});
	// display message
	$("#editor-instruction").slideToggle();
	setTimeout(function(){$("#editor-instruction").slideToggle()}, 3000);
}

function update_formatting(id) {
	// remove the existing styles
	$('#report-styles').remove();
	// create the styles that can't be changed
	$('body').prepend('<style id="report-styles" type="text/css">BODY, TABLE, TR, TH, TD, CAPTION, DIV, TITLE {font-size: 10pt;font-weight: normal;color: #000000;margin: 0;}.grayScale1 {background-color:#B6B5B5;}.grayScale2 {background-color:#E4E2E2;}#LightSolidBorder {border-bottom: 1px #E4E2E2 solid;border-right: 1px #E4E2E2 solid;padding-left: 5px; padding-right: 5px;}.H3b {font-weight: 600}.H4b {font-weight: 600;}.H5b {font-weight: 600;}</style>');
	// read in the current values for the editable styles
	var reportFont = $('input[name="Font"]').val();
	var reportH3b = $('input[name="H3bsize"]').val();
	var reportH4b = $('input[name="H4bsize"]').val();
	var reportH5b = $('input[name="H5bsize"]').val();
	var reportSmall = $('input[name="smallsize"]').val();
	// check the id to see if these values need to be changed
	switch (id) {
		case "font-selector":
		reportFont = $('#font-selector select').val();
		break;
		case "H3b-plus":
		reportH3b++;
		$('#H3b-field').text(reportH3b + "pt");
		break;
		case "H3b-minus":
		reportH3b--;
		$('#H3b-field').text(reportH3b + "pt");
		break;
		case "H4b-plus":
		reportH4b++;
		$('#H4b-field').text(reportH4b + "pt");
		break;
		case "H4b-minus":
		reportH4b--;
		$('#H4b-field').text(reportH4b + "pt");
		break;
		case "H5b-plus":
		reportH5b++;
		$('#H5b-field').text(reportH5b + "pt");
		break;
		case "H5b-minus":
		reportH5b--;
		$('#H5b-field').text(reportH5b + "pt");
		break;
		case "small-plus":
		reportSmall++;
		$('#small-field').text(reportSmall + "pt");
		break;
		case "small-minus":
		reportSmall--;
		$('#small-field').text(reportSmall + "pt");
		break;
	}
	// create the styles that are editable
	$('#report-styles').append('BODY, TABLE, TR, TH, TD, CAPTION, DIV, TITLE {font-family: ' + reportFont + ';}.H3b {font-size: ' + reportH3b + 'pt;}.H4b {font-size: ' + reportH4b + 'pt;}.H5b {font-size: ' + reportH5b + 'pt;}.Small {font-size: ' + reportSmall + 'pt;}');
	// update the hidden fields
	$('input[name="Font"]').val(reportFont);
	$('input[name="H3bsize"]').val(reportH3b);
	$('input[name="H4bsize"]').val(reportH4b);
	$('input[name="H5bsize"]').val(reportH5b);
	$('input[name="smallsize"]').val(reportSmall);
}