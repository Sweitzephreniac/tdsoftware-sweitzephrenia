tdsoftware-sweitzephrenia
=========================

Description
-----------

This repository is where Steve Sweitzer keeps all the various Terra Dotta software/StudioAbroad hacks that he has posted to [Sweitzephrenia](http://sweitzephrenia.com). The scripts that were posted for Version 11 and Version 12 of Terra Dotta software are found in the directories with those names. However, scripts that have been tested in TDS 14.0 are in the descriptive named directories. Please note that all these scripts are the independent work of Steve Sweitzer and not covered by the Terra Dotta software standard support agreement. Any issues/bugs/difficulties when attempting implement or use these scripts can be reported in the article in which they were posted on [Sweitzephrenia](http://sweitzephrenia.com).

CSS adjustments
---------------

### AddingButtonStyles.html
By default, StudioAbroad's buttons have no styles applied to them. However, by adjusting your style sheet, you can easily make your buttons fit the look and feel of your site.

> [STYLIN' BUTTIN'S](http://sweitzephrenia.com/articles/2012/12/29/stylin-buttins)

### BoldGlowingProgramsProcesses.html
Do you have a few programs or process elements that are 'bolded' because you put bold tags around the name of the program/process element? Does that make some of your reports look funny and cause trouble when you're trying to work with other tools? There's a better way to do it with JavaScript and jQuery, and there are even some additional tricks you can use to make specific programs and process elements pop-out at your users.

> [BE A BETTER BOLDER](http://sweitzephrenia.com/articles/2014/1/28/be-a-better-bolder)

###BrochureFactSheetStyleMod.html
The display of program parameters on the public brochure page can sometimes be a bit difficult to massage into an aesthetically-pleasing format. There aren't a lot of settings to mess with, and trying to fix it up with CSS is not easy because of the way that the data is rendered on the page. This script says, "To heck with it all - let's parse the data on the page - nuke and pave!"

> [FIXING A FUNKY FACT SHEET](http://sweitzephrenia.com/articles/2014/8/6/fixing-a-funky-fact-sheet)

### HighlightedSearchResults.html
With just a couple jQuery commands, you can make an application or profile in your search results easier to select. Instead of having to put the mouse pointer directly on the text of the hyperlink, a couple of event handlers can be used to make the entire row the 'clickable region' for that particular profile or application.

> [GETTING CRAFTY WITH HOVERING](http://sweitzephrenia.com/articles/2014/1/4/getting-crafty-with-hovering)

### PostItTags.html
Application tags are really useful, but they look pretty boring on an application. Why not use a little bit of style to make them look a bit friendlier? This is a simple script that targets the elements of the application tags on a page and changes the styling around them.

> [POST-IT TAGS](http://sweitzephrenia.com/articles/2013/11/14/post-it-tags)

### PrintableApplicationCheckboxes.html
Version 12 changed the way that the icons were being displayed on all the pages. Instead of being 'images', they are actually 'div's with a class attribute indicating which icon they should be.Someone who wants to print out an application page is not going to see any of the checkboxes unless they know that they need to click the option to include background images and colors in their browser. Fortunately, this can be resolved with a couple lines of javascript on the page.

> [SCISSORS AND CSS BEAT PAPER](http://sweitzephrenia.com/articles/2013/9/12/scissors-and-css-beat-paper)

### ReportCSSTool.html *(file 1 of 2)*
Are you getting old like me? Do you print out reports and wonder what kind of species these reports were designed to be read by?  Do you hand them to someone younger who just reads them without constantly adjusting the distance between the paper and their face and squinting? Don't let them do that! The problem isn't your eyes or your age. The problem is that the font is too darn small!

> [READING REPORTS WITHOUT A MICROSCOPE](http://sweitzephrenia.com/articles/2013/5/5/reading-reports-without-a-microscope)

### ReportCSSTool.js *(file 2 of 2)*
Are you getting old like me? Do you print out reports and wonder what kind of species these reports were designed to be read by?  Do you hand them to someone younger who just reads them without constantly adjusting the distance between the paper and their face and squinting? Don't let them do that! The problem isn't your eyes or your age. The problem is that the font is too darn small!

> [READING REPORTS WITHOUT A MICROSCOPE](http://sweitzephrenia.com/articles/2013/5/5/reading-reports-without-a-microscope)

### StickyNavigationMenu.html
If you use the stock layout or have a layout where there isn't anything underneath the navigation menu, why would you let your administrative navigation menu disappear when you scroll down the page? That space in the left column is basically being wasted, and if you need to go to another tool, you need to scroll back up to the top of the page. With this bit of javascript, you can make the admin navigation bar stick to the top of the page as you scroll down.

> [HOT, STICKY NAVIGATION (EW!)](http://sweitzephrenia.com/articles/2013/10/19/hot-sticky-navigation-ew)

### SwitchForExpermentalCSSChecker.html *(file 1 of 2)*
Here is a way to implement some code that implements a CSS change on your pages, but only for a sub-set of your users.

> [THE GOLDEN TEXT INTERFACE FIELD](http://sweitzephrenia.com/articles/2012/11/13/the-golden-text-interface-field)

### SwitchForExpermentalCSSUI.html *(file 2 of 2)*
Here is a way to implement some code that implements a CSS change on your pages, but only for a sub-set of your users.

> [THE GOLDEN TEXT INTERFACE FIELD](http://sweitzephrenia.com/articles/2012/11/13/the-golden-text-interface-field)

Functional modifications
------------------------

### AddingGrayboxToUnsignedSigDoc.html

You can let your applicants know that something incomplete in their application is a priority and present a modal, fancy-box interface to them when they view their application pages until it has been marked as complete.

> [IMPORTANT AND INCOMPLETE](http://sweitzephrenia.com/articles/2012/10/7/important-and-incomplete)

### AddingLinkToDocumentsToReviewerView.html
This is how you can give your reviewers an easy way to get to the 'Documents' tab of an application without having to teach them how to work with application queries. When viewing the applications from the 'My Reviews' panel on their home page, the reviewers will have a new section that opens the 'Documents' tab of the application in a new window.

> [SHOW ME THE DOCUMENTS](http://sweitzephrenia.com/articles/2012/10/7/show-me-the-documents)

### AddOptionsToProgressAudit.html
The progress audit is a great tool, but when you run the audit, you can't run any of the batch processes that you have available on the search results page. ORLY? With this little hack, you can.

> [PROGRESSIVE AUDIT OPTIONS](http://sweitzephrenia.com/articles/2013/1/10/progressive-audit-options)

### AddressCheckWhenAbroad.html
This little trick will make any of your applicants that go to an application page during the 'abroad' phase enter an address if it is currently blank.

> [ABROAD WITH NO ADDRESS ON FILE?! EXPLAIN! EXPLAIN!](http://sweitzephrenia.com/articles/2012/10/14/abroad-with-no-address-on-file-explain-explain)

### AddTabsToAdminHome.html
If there are some administrative tools that you always use and would like to always have appear as tabs at on the administrative home page, this script will add them for you.

> [I HEARD YOU LIKE TABS](http://sweitzephrenia.com/articles/2013/1/22/i-heard-you-like-tabs)

### AddWYSObjectToBrochures.html
If you want to have some text that appears on all your brochure pages and is managed through a single document, look no further. Here is the way to implement it on your site using a few lines of javascript.

> [BOILERPLATE CENTER](http://sweitzephrenia.com/articles/2012/12/1/boilerplate-center)

### AdminHomeDashboard.html
This is a pretty wild bit of javascript that can be used to add a new widget to your administrative home page that displays a simplified report that is updated on a daily basis.

> [CLUTTER-UP ADMIN HOME WITH DATA](http://sweitzephrenia.com/articles/2013/1/24/clutter-up-admin-home-with-data)

### AdminHomeDashboardAreaChart.html
This is a slightly different graph that you can build which takes all the applications in the results, looks at the major of the applicant and creates a stacked count of each distinct major in the results. It's like a pie chart, but looks more like a layer cake.

> [LET GOOGLE DRAW THAT FOR YOU](http://sweitzephrenia.com/articles/2013/1/29/let-google-draw-that-for-you)

### AdminHomeDashboardBarChart.html
This is a very simple chart using the same kind of saved report that was used in the original dashboard project, but instead of displaying all the statuses in plain text with a number to the side, this is going to use the Google chart tool to display them in a bar graph.

> [LET GOOGLE DRAW THAT FOR YOU](http://sweitzephrenia.com/articles/2013/1/29/let-google-draw-that-for-you)

### AdminHomeDashboardGeoMap.html
This is a very simple chart using the same kind of saved report that was used in the original dashboard project, but it will take the results of the report and come up with a count for each country in the results. Then, it will create a heat map of those countries showing how many applications are in each country.

> [LET GOOGLE DRAW THAT FOR YOU](http://sweitzephrenia.com/articles/2013/1/29/let-google-draw-that-for-you)

### AdministrativeBookmarks.html *(file 1 of 2)*
This a whole new feature you can provide for administrators. A 'Bookmarks' widget that appears under the admin navigation menu that provides a saved list of links back to specific profiles, programs, and applications.

> [ADMIN'S GOT A BRAND NEW WIDGET](http://sweitzephrenia.com/articles/2013/4/4/admins-got-a-brand-new-widget)

### AdministrativeBookmarks.js *(file 2 of 2)*
This a whole new feature you can provide for administrators. A 'Bookmarks' widget that appears under the admin navigation menu that provides a saved list of links back to specific profiles, programs, and applications.

> [ADMIN'S GOT A BRAND NEW WIDGET](http://sweitzephrenia.com/articles/2013/4/4/admins-got-a-brand-new-widget)

### ApplicantHomeTwitterWidget.html
If your office has a Twitter feed, you can leverage the Twitter API to embed that feed in your pages. In addition, you can create custom Twitter feeds that might serve additional purposes and put them into your website in various places. Now, you can have dynamic information feeds all over the place displayed like a standard StudioAbroad panel.

> [ADDING TWITTER WIDGETS (TWIDGETS!)](http://sweitzephrenia.com/articles/2013/12/4/adding-twitter-widgets-twidgets)

### ApplicationPageProgressMeter.html
The progress meter has become a standard interface design element for many online registration processes. Thanks to the new HTML5 tag, it's a snap to add one to the top of your pre-decision application process and have a real-time indicator of when an application has everything checked off and ready for review by the administrators.

> [PRODUCING A PRE-DECISION PROGRESS METER](http://sweitzephrenia.com/articles/2013/12/19/producing-a-pre-decision-progress-meter)

### ApplicationTabToOpen.html
You can use this to create a drop-down on the application search results page to let you jump into any of the application tabs instead of the 'Overview' tab.

> [ANY APPLICATION TAB YOU WANT](http://sweitzephrenia.com/articles/2012/10/7/any-application-tab-you-want)

### BatchOptionImport.html
For applicant/program parameters and question items of the single/multi-select type, long option value lists can be very cumbersome to create because they have to be done one at a time with a button click in-between each option.

> [PAINLESS PARAMETER OPTIONS](http://sweitzephrenia.com/articles/2012/10/7/painless-parameter-options)

### BrochureTemplateImport.html
While everyone has been sold on the use of templates when creating program brochures, it can be a pain to have to copy/paste the HTML into the WYSIWYG Editor. This little bit of javascript will allow you to put a button on the 'brochure' tab of the program builder that will automatically populate the contents of the WYSIWYG Editor with the contents of a Document Center WYS object. 

> [ONE CLICK BROCHURE TEMPLATES](http://sweitzephrenia.com/articles/2013/9/27/one-click-brochure-templates)

### ConnectingLCPAsessments.html
Here's a script that connects a learning content page with an assessment so that you can automatically quiz an applicant on her/his comprehension of the material read as soon as it has been marked as such.

> [AUTO-ASSESS YOUR APPLICANTS](http://sweitzephrenia.com/articles/2014/8/30/auto-assess-your-applicants)

### CraftyslidePage.html
This script is essentially a jQuery plug-in created by Abid Din and his site has some pretty amazing stuff on it. I strongly recommend checking it out. The plug-in I'm including here is called Craftyslide, and it is very customizable. However, the really nice thing is that it has a really small footprint (about 2k).

> [YOU'LL LESS-THAN-THREE CRAFTYSLIDE!](http://sweitzephrenia.com/articles/2012/11/15/youll-less-than-three-craftyslide)

### CustomPageAlerts.html *(file 1 of 2)*
Sometimes, you need to have a way of displaying a warning or alert about some event or deadline to all your users. Pulling together a few techniques, you can create a system on your site that will check a document center object on certain pages and display an alert or warning that you need shown to the users looking at that page.

> [ALERTS, WARNINGS, AND OTHER WAYS TO ATTRACT ATTENTION](http://sweitzephrenia.com/articles/2014/2/27/alerts-warnings-and-other-ways-to-attract-attention)

### CustomPageAlertsDocCenterObject.html *(file 2 of 2)*
Sometimes, you need to have a way of displaying a warning or alert about some event or deadline to all your users. Pulling together a few techniques, you can create a system on your site that will check a document center object on certain pages and display an alert or warning that you need shown to the users looking at that page.

> [ALERTS, WARNINGS, AND OTHER WAYS TO ATTRACT ATTENTION](http://sweitzephrenia.com/articles/2014/2/27/alerts-warnings-and-other-ways-to-attract-attention)

### DailyPhotoCheck.html
If your office really wants to have students submit a profile image, you can put a quick javascript check on the applicant home page that will prompt the user to upload a photo. Soon, you'll have everyone's lovely face appearing in the application admin headers.

> [PROFILE PICS PLEEZ](http://sweitzephrenia.com/articles/2014/1/27/profile-pics-pleez)

### DuplicateSavedQueries.html *(file 1 of 2)*
Have you ever wanted to duplicate one of your saved queries so that you can edit it to have slightly different search criteria? This hack will give you a new icon on the admin home page that lets you do just that.

> [DUPE THOSE SAVED QUERIES](http://sweitzephrenia.com/articles/2013/9/27/dupe-those-saved-queries)

### DuplicateSavedQueriesFormScript.html *(file 2 of 2)*
Have you ever wanted to duplicate one of your saved queries so that you can edit it to have slightly different search criteria? This hack will give you a new icon on the admin home page that lets you do just that.

> [DUPE THOSE SAVED QUERIES](http://sweitzephrenia.com/articles/2013/9/27/dupe-those-saved-queries)

### ExpandingCollapsingSections.html
With just a little bit of jQuery, you can embed expanding sections of content in the WYSIWYG Editor to make a page's content more accessible to site visitors.

> [ACCORDIANS ARE COOL](http://sweitzephrenia.com/articles/2012/10/22/accordians-are-cool)

### HappyBirthdayWidget.html
Here's how you can add a script to your applicant and admin home pages that will display a birthday cake for a user when they login on their birthday. If you just rolled your eyes at this idea, okay then... just pout.

> [HAPPY BIRTHDAY TO EVERYONE](http://sweitzephrenia.com/articles/2013/12/12/happy-birthday-to-everyone)

### LocationSearchTool.html
If your site has hundreds of locations, it can be a pain to find one in the locations admin tool, especially if it starts with a letter in the middle of the alphabet.  Here's a hack that makes your location list searchable with a little bit of javascript magic.

> [LOCATION SEARCH, LOCATION SEARCH, LOCATION SEARCH](http://sweitzephrenia.com/articles/2013/5/21/location-search-location-search-location-search)

### PaginatedProfileExport.html *(file 1 of 2)*
If you want to have a quick reference hardcopy of a bunch of profiles, you can run an Excel export and then feed that into a Word template, but given the magic powers of CSS and javascript, there is another way to get that information in a nice formatted "One sheet per profile" stack of paper. 

> [PRINTING A PLETHORA OF PRETTY PROFILES](http://sweitzephrenia.com/articles/2013/9/30/printing-a-plethora-of-pretty-profiles)

### PaginatedProfileExportInterface.html *(file 2 of 2)*
If you want to have a quick reference hardcopy of a bunch of profiles, you can run an Excel export and then feed that into a Word template, but given the magic powers of CSS and javascript, there is another way to get that information in a nice formatted "One sheet per profile" stack of paper. 

> [PRINTING A PLETHORA OF PRETTY PROFILES](http://sweitzephrenia.com/articles/2013/9/30/printing-a-plethora-of-pretty-profiles)

### ProcessDueDatesAppPageScript.html *(file 1 of 2)*
If you've got process elements in your application process that have due dates that don't fit the natural four-phase schedule of Terra Dotta software, this is a bit scripting magic that can create due dates for process elements on the application pages.

> [DOOBY-DOOBY DUE DATES](http://sweitzephrenia.com/articles/2014/8/4/dooby-dooby-due-dates)

### ProcessDueDatesInstructionsTemplate.html *(file 2 of 2)*
If you've got process elements in your application process that have due dates that don't fit the natural four-phase schedule of Terra Dotta software, this is a bit scripting magic that can create due dates for process elements on the application pages.

> [DOOBY-DOOBY DUE DATES](http://sweitzephrenia.com/articles/2014/8/4/dooby-dooby-due-dates)

### QuestionItemDefaultOption.html
For a single-select type question item, sometimes it can be useful to have an option automatically selected for the applicant and instructions indicating that they can change the selected option when it is necessary. This simple jQuery script embedded in the question item's instructions can make that happen.

> [DEFAULTING ON A QUESTION ITEM](http://sweitzephrenia.com/articles/2013/11/11/defaulting-on-a-question-item)

### QuestionItemDupeCheck.html
If your application process has a questionnaire with a series of questions involving a first, second, and third preference, you likely have instructions explaining that the students shouldn't pick the same preference more than once. Chances are good that despite this and the very obviousness of why you wouldn't pick the same option twice, you still get applications where the person has picked the same preference three times and not provided you with any alternative preferences. Here's a way you can put a little bit of extra validation logic into your questionnaires to prevent it.

> [ASSUMING FORM INSTRUCTIONS GET IGNORED](http://sweitzephrenia.com/articles/2013/11/8/assuming-form-instructions-get-ignored)

### RequireSearchForRecRequest.html *(file 1 of 2)*
A frequent thing I find when troubleshooting sites is that many recommenders have multiple identities - one that is an 'internal' profile and then one or many 'external' profiles. Here is a little bit of javascript that you can use to hide the 'manual entry' of a recommender from an applicant until they've at least executed one search of the HR directory to try to find the recommender's internal identity first.

> [TRY OUR SEARCH FIELD PLEASE](http://sweitzephrenia.com/articles/2013/12/4/try-our-search-field-please)

### RequireSearchForRecRequestForm.html *(file 2 of 2)*
A frequent thing I find when troubleshooting sites is that many recommenders have multiple identities - one that is an 'internal' profile and then one or many 'external' profiles. Here is a little bit of javascript that you can use to hide the 'manual entry' of a recommender from an applicant until they've at least executed one search of the HR directory to try to find the recommender's internal identity first.

> [TRY OUR SEARCH FIELD PLEASE](http://sweitzephrenia.com/articles/2013/12/4/try-our-search-field-please)

### SelectiveExcelExport.html
If you use the 'Excel Export' for your application queries, you've learned that sometimes,  you need to be careful about the number of applications in the search results because too many applications to export can result in the process taking quite a long time to deliver the file. This javascript will add an interface to the application search results page that allows you to selectively choose which applications are going to be exported to an Excel file so that you can get the file quickly and only with the applications you care about.

> [EXCEL EXPORTS IN 30 MINUTES OR LESS](http://sweitzephrenia.com/articles/2013/12/23/excel-exports-in-30-minutes-or-less)

### WithdrawReasonDropdown.html
Instead of a big text area where the students can just type in 'Just cuz' and then withdraw their applications, make them choose from a drop-down menu and give your site more consistent data about these withdrawn applications.

> [REASONABLE WITHDRAWING REASONS](http://sweitzephrenia.com/articles/2014/4/18/reasonable-withdrawing-reasons)

UI fixes
--------

### AltStatusTabDropDownMenu.html
When changing an application's program and/or app cycle, there's a pretty good chance that the drop-down menu you need to select from is about... oh... let's be conservative with my guess here... TWENTY-TWO MILES LONG. This is a way to take the content of that drop-down menu and use javascript to bend it around into something that might be a little bit easier to navigate. Instead of one huge drop-down menu with every program/app cycle permutation, it will first ask you to select the program, and then it will ask you to select the application cycle from the available options for the program you've selected.

> [DROPPING THE DROP-DOWN INTERFACE](http://sweitzephrenia.com/articles/2013/5/5/dropping-the-drop-down-interface)

### AutoRegionMap.html *(file 1 of 2)*
If you've had some confusion with your staff when they create new locations with regards to the region of the locations, you can use this script to auto-select the region of a location when a country is selected.

> [LOCATIONS NOW WITH "INSTA-REGION"](http://sweitzephrenia.com/articles/2013/4/19/locations-now-with-insta-region)

### AutoRegionMap.js *(file 2 of 2)*
If you've had some confusion with your staff when they create new locations with regards to the region of the locations, you can use this script to auto-select the region of a location when a country is selected.

> [LOCATIONS NOW WITH "INSTA-REGION"](http://sweitzephrenia.com/articles/2013/4/19/locations-now-with-insta-region)

### ChangeURLOfHomePageLinks.html
If you have an external CMS and would rather not force your users through a javascript redirect on your StudioAbroad home page, this little bit of jQuery will transform any link so that it goes exactly where you want it to go.

> [THIS IS NOT MY BEAUTIFUL HOME PAGE](http://sweitzephrenia.com/articles/2012/12/1/this-is-not-my-beautiful-home-page)

### CheckboxMultiselectQuestionItems.html
Sometimes the multi-select question items are better displayed as a series of checkboxes rather than a multi-select listbox where you need to option-click each option after the first one and hope you didn't mess up the other options you've selected. This script will make that transformation.

> [CHECK YOUR QUESTION ITEMS](http://sweitzephrenia.com/articles/2014/8/30/check-your-question-items)

### CustomHomeInstitutionFSCList.html *(file 1 of 2)*
If you only allow external applicants from a distinct list of home institutions, you can use this javascript to make the selection list of home institutions only display a custom list of options instead of the entire list of US institutions.

> [FILTERED, LOW TAR HOME INSTITUTION OPTIONS](http://sweitzephrenia.com/articles/2012/11/5/filtered-low-tar-home-institution-options)

### CustomHomeInstitutionList.html *(file 2 of 2)*
If you only allow external applicants from a distinct list of home institutions, you can use this javascript to make the selection list of home institutions only display a custom list of options instead of the entire list of US institutions.

> [FILTERED, LOW TAR HOME INSTITUTION OPTIONS](http://sweitzephrenia.com/articles/2012/11/5/filtered-low-tar-home-institution-options)

### EssayQuestionToFileUpload.html
Questionnaires that require a file upload from the applicant have to use the 'Essay' question item type as the interface. However, this is something that can involve a lot of instructions. Here's how you can simplify that process with some javascript.

> [TDS14 CORRECTION FOR ESSAY HACK](http://sweitzephrenia.com/articles/2014/6/30/tds14-correction-for-essay-hack)

### FloatingReviewerCommentBox.html
With this bit of jQuery, you can add a button to the reviewer's view that makes the comments field stick to the bottom of the screen as you scroll around on the page. Your reviewers can type their comments as they review the application without having to scroll to the bottom of the page.

> [FLOATY COMMENTS](http://sweitzephrenia.com/articles/2013/3/7/floaty-comments)

### MakeSearchProgramTabStartAdvising.html
Have you ever wanted to change that 'Search Programs' tab at the top of the Applicant Home page to something completely different?

> [TAB SWITCH-A-ROO](http://sweitzephrenia.com/articles/2012/10/7/tab-switch-a-roo)

### PreventChangesToPhoto.html
While you can't block a user from removing and/or changing their photo after uploading it, you can put this javascript into the text interface to make it much more difficult for them.

> [DMV-IFY MY PHOTO](http://sweitzephrenia.com/articles/2013/1/12/dmv-ify-my-photo)

### ProcessAdminInterfaceMods.html
If you have a lot of process elements on your site, going through the listings in Process Admin can be a bit of a pain. Here's a script that will make that interface a little bit easier to work around. It isn't going to create 'folders' for you, but it's going to give you a handy way to get at what you want to find a bit more easily.

> [PROCESS MANAGEMENT MANAGEMENT (PMM)](http://sweitzephrenia.com/articles/2014/5/1/process-management-management-pmm)

### ProgramDatesToggle.html
If you've been using the software for a few years, something you might have noticed is that the 'Dates' tab of the program builder can get a bit cluttered. Here is a script you can embed on that page that will help manage the length of that table so that you aren't having to scroll past data that's a few years old.

> [RECORD-BREAKING NUMBERS OF DATE RECORDS](http://sweitzephrenia.com/articles/2014/6/23/record-breaking-numbers-of-date-records)

### QuestionItemFieldMask.html
If you have data field questions in your questionnaires that you would really like to implement a fixed format of data entry, you might be able to get it done with this little bit of javascript in the question item instructions.

> [THE ANSWER TO 'MOBILE PHONE #' IS NOT 'YES'](http://sweitzephrenia.com/articles/2013/2/15/the-answer-to-mobile-phone-is-not-yes)

### RemoveDecisionDateColumn.html
If you have a rolling admissions acceptance process for all your programs, you really don't need to display the decision date column in the 'Dates/Deadlines' table of the brochure page. With this bit of javascript, you can remove that column from the table.

> [DECISION DATE? DECISION DON'T!](http://sweitzephrenia.com/articles/2012/12/29/decision-date-decision-dont)

### RemoveNotReadyApps.html
The 'My Reviews' panel has an odd quirk to it. It displays the applications that aren't ready to be reviewed yet. If your reviewers have immediate access to review applications, that's not a problem, but if you want them to wait until you've marked the application as 'ready for review', there's no reason to have them displayed on the page. This script will hide the 'not ready for review' applications in that panel.

> [REALLY READY FOR REVIEW](http://sweitzephrenia.com/articles/2014/8/30/really-ready-for-review)

### RemoveRankingFields.html
So Terra Dotta got some feedback about the way that the 'Ranking' for outgoing programs is auto-enabled when you upgrade to TDS14, but do you really want yet another program-level setting that you have to go manipulate program by program? How about a script that not only hides the ranking interface on the applicant home page, but also corrects that awkward padding on the left side of the 'Applications' panel?

> [RANKLED BY RANKING](https://stephen-sweitzer.squarespace.com/articles/2014/7/14/rankled-by-ranking)

### RemovingCityFromAdvProgSearch.html *(file 1 of 2)*
Is your program catalog not one where a 'city' search makes sense? You can remove the option for searching your program catalog based on the city of the programs with these scripts.

> [CITY SEARCH? NOT ON MY SITE!](http://sweitzephrenia.com/articles/2012/10/22/city-search-not-on-my-site)

### RemovingCityFromSimpleProgSearch.html *(file 2 of 2)*
Is your program catalog not one where a 'city' search makes sense? You can remove the option for searching your program catalog based on the city of the programs with these scripts.

> [CITY SEARCH? NOT ON MY SITE!](http://sweitzephrenia.com/articles/2012/10/22/city-search-not-on-my-site)

### ShrinkCompletedWidgets.html
Sometimes, the application page can get rather lengthy as you get into the later phases of the application process. This script will check the page for process element widgets that don't have incomplete requirements in them and reduce the widget to just the header. That way, the applicant is only looking at relevant information on the page.

> [SHRINKING YOUR APPLICATION PAGE](http://sweitzephrenia.com/articles/2014/2/11/shrinking-your-application-page)

### SkipProfileQueryStepOne.html
If you run profile queries on a frequent basis and almost always just select the first checkbox for step one, you can put this script in your text interface so that the 'Profile Search' tool in your admin menu sends you directly to the query form where you can just type in a name and run the search.

> [ONE STEP PROFILE QUERIES](http://sweitzephrenia.com/articles/2013/9/25/one-step-profile-queries)

### SponsorDateRecordToggle.html
After a couple years, sponsored programs begin to get a bit of clutter on the 'Dates' tab of the program builder. This is a pretty frequently accessed part of the interface. Wouldn't it be nice if the sponsor's program date records were collapsed by default and only took up space when you click a button to expand them?

> [PESKY SPONSOR DATE RECORDS](http://sweitzephrenia.com/articles/2013/5/21/pesky-sponsor-date-records)

### WiderProgramTermsListbox.html
If you have terms that make your application cycle text just a little bit too long for the simple application search interface, you'll grumble about how you can't see the year of the app cycle when selecting it in the listbox. Here is how you stop grumbling.

> [FATTY MCFATT TERMS](http://sweitzephrenia.com/articles/2012/12/17/fatty-mcfatt-terms)

Public UI API projects
----------------------

### AddGoogleMapImage.html
If you've implemented the mobile program search API, you might be interested in using some of that code to put the Google Map graphics on other pages. Here's how you can repurpose those API calls for your program brochures.

> [LET GOOGLE MAP THAT FOR YOU](http://sweitzephrenia.com/articles/2012/12/17/let-google-map-that-for-you)

### CustomBrochurePageBrochureTemplate.html *(file 1 of 2)*
While this isn't going to look like something you want to have on your site, the underlying code and methods used to render the content can provide the groundwork for a completely re-imagined program brochure page.

> [MY OWN PRIVATE BROCHURE PAGE](http://sweitzephrenia.com/articles/2014/4/6/my-own-private-brochure-page)

### CustomBrochurePageCode.html *(file 2 of 2)*
While this isn't going to look like something you want to have on your site, the underlying code and methods used to render the content can provide the groundwork for a completely re-imagined program brochure page.

> [MY OWN PRIVATE BROCHURE PAGE](http://sweitzephrenia.com/articles/2014/4/6/my-own-private-brochure-page)

### DynamicProgramSearch.html
This is an API driven program search that creates a dynamically adjusting list of program search results based on checkboxes getting marked. It uses the Google Maps API to create pins on a world map showing where there are programs that meet the criteria. It also uses a browser cookie to retain the user's last search so that it can be recreated when the user returns to the program search page. UPDATE: It will now support program parameters as search criteria with just a couple adjustments.

> [LEVELING-UP THE API-DRIVEN PROGRAM SEARCH](http://sweitzephrenia.com/articles/2014/8/4/leveling-up-the-api-driven-program-search)

### MobileProgramSearch.html
Here's how to use the Terra Dotta Software public API to implement a mobile-optimized program search on your site. Trust me, this can be done in less than five minutes.

> [DIGGING INTO THE API, PART THREE](http://sweitzephrenia.com/articles/2012/11/15/digging-into-the-api-part-three)

LOLs
----

### AddImageToErrorMessage.html
Nobody likes to see the error screen, but you can at least try to get a chuckle out of your users when they encounter it by adding a little bit of humor to the message.

> [ERRORS WITH A SENSE OF HUMOR](http://sweitzephrenia.com/articles/2012/11/5/errors-with-a-sense-of-humor)

### AdminApplicantHomeRickroll.html
If you're looking for a creative prank for this April Fool's Day, you can use this script to Rickroll select members of your office. It may not be the most original joke, but it's a pretty safe bet that they won't see it coming.

> [JUST IN TIME FOR APRIL FIRST](http://sweitzephrenia.com/articles/2013/3/29/your-greatest-accomplishment-ever)

### MakeLoginButtonDance.html
Time for a really goofy hack that you can use to annoy people. With just a little bit of jQuery and css magic, you can make the 'Login' button of your site jump around the page for just the special people that you want to drive crazy.

> [DON'T GET MAD - GET ANNOYING](http://sweitzephrenia.com/articles/2013/2/6/dont-get-mad-get-annoying)

Images
------

### McKaylaUnimpressed.png
Nobody likes to see the error screen, but you can at least try to get a chuckle out of your users when they encounter it by adding a little bit of humor to the message.

> [ERRORS WITH A SENSE OF HUMOR](http://sweitzephrenia.com/articles/2012/11/5/errors-with-a-sense-of-humor)

### CustomBrochurePageBannerTemplate.jpg
While this isn't going to look like something you want to have on your site, the underlying code and methods used to render the content can provide the groundwork for a completely re-imagined program brochure page.

> [MY OWN PRIVATE BROCHURE PAGE](http://sweitzephrenia.com/articles/2014/4/6/my-own-private-brochure-page)

### MobileProgramSearchIcon.png
Here's how to use the Terra Dotta Software public API to implement a mobile-optimized program search on your site. Trust me, this can be done in less than five minutes.

> [DIGGING INTO THE API, PART THREE](http://sweitzephrenia.com/articles/2012/11/15/digging-into-the-api-part-three)

### MobileProgramSearchIcon.psd
Here's how to use the Terra Dotta Software public API to implement a mobile-optimized program search on your site. Trust me, this can be done in less than five minutes.

> [DIGGING INTO THE API, PART THREE](http://sweitzephrenia.com/articles/2012/11/15/digging-into-the-api-part-three)

### MobileProgramSearchLoading.png
Here's how to use the Terra Dotta Software public API to implement a mobile-optimized program search on your site. Trust me, this can be done in less than five minutes.

> [DIGGING INTO THE API, PART THREE](http://sweitzephrenia.com/articles/2012/11/15/digging-into-the-api-part-three)

### MobileProgramSearchLoading.psd
Here's how to use the Terra Dotta Software public API to implement a mobile-optimized program search on your site. Trust me, this can be done in less than five minutes.

> [DIGGING INTO THE API, PART THREE](http://sweitzephrenia.com/articles/2012/11/15/digging-into-the-api-part-three)
