/* Tested in TDS 15.0 */
function bookmarking_button(bmcheck, admin_name) {
  if (not_bookmarked(admin_name)) {
		var widget_html = '<center><input type="button" value="Add Bookmark" onclick="add_bookmark(\'' + bmcheck.charAt(3) + '\',\'' + admin_name + '\');"></center>';
	} else {
		var widget_html = '<center><input type="button" value="Add Bookmark" disabled="disabled"></center>';
	}
	$("#bm-button").append(widget_html);
}

function not_bookmarked(admin_name) {
	var bm_list = localStorage.getItem(admin_name.replace(/\s/g, ''));
	if (bm_list) {
		var purl = window.location.href;
		if (purl.indexOf("StudentAdmin") != -1) {
			var app_id = "A" + $("input[name='Application_ID']").val();
			if (bm_list.indexOf(app_id) != -1) {
				return false;
			}
		} else if (purl.indexOf("ProgramAdmin") != -1) {
			var prog_id = "P" + $('input[name="Program_ID"]').val();
			if (bm_list.indexOf(prog_id) != -1) {
				return false;
			}
		} else if (purl.indexOf("ProfileAdmin") != -1) {
			var user_id = "U" + $("#Userid").val();
			if (bm_list.indexOf(user_id) != -1) {
				return false;
			}
		}
	}
	return true;
}

function add_bookmark(bm_key,admin_name) {
	var bm_value = "";
	var bm_list = localStorage.getItem(admin_name.replace(/\s/g, ''));
	if (bm_key == "U") {
		bm_value = $.trim($(".H3b").text()) + "|" + window.location.href;
		bm_key = bm_key + $("#Userid").val();
	} else if (bm_key == "P") {
		var prog_href = window.location.href;
		if (prog_href.indexOf("Program_ID") != -1) {
			bm_value = $.trim($(".H3b").text()) + "|" + prog_href;
		} else {
			bm_value = $.trim($(".H3b").text()) + "|" + $('a[href*="ProgramAdmin.GeneralEdit"]').attr('href');
		}
		bm_key = bm_key + $('input[name="Program_ID"]').val();
	} else if (bm_key == "A") {
		var info = document.title.split(" - ")
		bm_value = info[0] + "|" + info[1] + "|" + info[2] + "|" + window.location.href;
		bm_key = bm_key + $("input[name='Application_ID']").val();
	}
	localStorage.setItem(bm_key, bm_value);
	if (bm_list) {
	localStorage.setItem(admin_name.replace(/\s/g, ''), bm_list + "|" + bm_key);
	} else {
	localStorage.setItem(admin_name.replace(/\s/g, ''), bm_key);
	}
	$("#bm-widget").children().remove();
	$("#bm-button").children().remove();
	build_bookmarks(admin_name);
	var bmcheck = $("#bookmarkable").val();
	if (bmcheck != "undefined") {
		bookmarking_button(bmcheck, admin_name);
	}
}

function remove_bookmark(bm_key,admin_name) {
	var answer = confirm('Delete bookmark?');
	if (!answer) {
		return false;
	}
	var bm_array = "";
	var bm_list = localStorage.getItem(admin_name.replace(/\s/g, ''));
	if (!bm_list) {
		return false;
	}
	localStorage.removeItem(bm_key);
	$("#bm-widget").children().remove();
	$("#bm-button").children().remove();
	if (bm_list.indexOf("|") != -1) {
		bm_array = bm_list.split("|");
		// build the list without the bm_key
		var length = bm_array.length;
		var element = null;
		var new_bm_list = "";
		for (var i = 0; i < length; i++) {
			element = bm_array[i];
			if (element != bm_key) {
				new_bm_list = new_bm_list + "|" + element;
			}
		}
		new_bm_list = new_bm_list.substring(1);
		localStorage.setItem(admin_name.replace(/\s/g, ''), new_bm_list);
		build_bookmarks(admin_name);
	} else {
		localStorage.removeItem(admin_name.replace(/\s/g, ''));
	}
	var bmcheck = $("#bookmarkable").val();
	bookmarking_button(bmcheck, admin_name);
}

function build_bookmarks(admin_name) {
	var bm_list = localStorage.getItem(admin_name.replace(/\s/g, ''));
	var bm_array = bm_list.split("|");
	var bm_html = "";
	$.each(bm_array, function(index, bookmark_id) {
		var bm_value = localStorage.getItem(bookmark_id);
		var bm_details = bm_value.split("|");
		if (bookmark_id.charAt(0)=="U") {
			// user bookmark - add it to the container
			bm_html = bm_html + '<p class="bookmark"><span class="bm_type">Profile</span> <span class="bm_delete"><a href="" class="bm_delete" onclick="remove_bookmark(\'' + bookmark_id + '\',\'' + admin_name + '\'); return false;">[delete]</a></span></br><a href="' + bm_details[1] + '">' + bm_details[0] + '</a></p>';
		} else if (bookmark_id.charAt(0)=="P") {
			// program bookmark - add it to the container
			bm_html = bm_html + '<p class="bookmark"><span class="bm_type">Program</span> <span class="bm_delete"><a href="" class="bm_delete" onclick="remove_bookmark(\'' + bookmark_id + '\',\'' + admin_name + '\'); return false;">[delete]</a></span></br><a href="' + bm_details[1] + '">' + bm_details[0] + '</a></p>';
		} else if (bookmark_id.charAt(0)=="A") {
			// application bookmark - add it to the container
			bm_html = bm_html + '<p class="bookmark"><span class="bm_type">Application</span> <span class="bm_delete"><a href="" class="bm_delete" onclick="remove_bookmark(\'' + bookmark_id + '\',\'' + admin_name + '\'); return false;">[delete]</a></span></br><a href="' + bm_details[3] + '">' + bm_details[0] + '</br>' + bm_details[1] + ' ' + bm_details[2] + '</a></p>';
		}
	});
	var widget_html = '<div class="wdgt-container" id="bookmarks" style="background-color: white; margin-bottom: 0px; padding-top: 20px; padding-left: 5%; width: 90%; padding-right: 5%;"><div class="wdgt-header"><div class="wdgt-header-left"><div class="wdgt-header-right"><div class="wdgt-header-center"><h2>Bookmarks</h2></div></div></div></div><div class="wdgt-content" id="bookmarks-content">' + bm_html + '</br></div><div class="bottom-layer"><div class="bottom-layer-left"><div class="bottom-layer-right"><div class="bottom-layer-center"></div></div></div></div></div>';
	$("#bm-widget").append(widget_html);
}
