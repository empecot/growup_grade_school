console.log( "hello, wrold" );

// Home Page--on load, start with apple logo, then fade in subjects then pencils
$


// Home Page--"About" button--onclick, smooth scroll down to About Page


// All Pages--search input--val=civil war, link to civl war page


// About Page--logo, onclick smooth scroll up to home page


// History Page--"US History" button, onclick smoothscroll to US History
// History Page--"World History" button, onclick smoothscroll to World History


// US History--drop down menus for Chronological Eras, Wars, Presidents. Link to Civil War page
var eras = ['Early America to 1630', 'The Colonial Period 1630-1763', 'Revolutionary America 1763-1783',
'The Young Republic 1783-1815', 'Expansion & Turmoil 1815-1860', 'War & Reconstruction 1830-1876',
'Second Industrial Revolution 1871-1914', 'Political Reform II 1880-1920', 'War, Prosperity, & Depression 1914-1933',
'The New Deal & World War II 1933-1945', 'Postwar America 1945-1960',
'The Vietnam Era 1960-1980', 'End of the Century 1980-2000', 'The New Millenium 2001-']

$('#era_name').append('<option>CHRONOLOGICAL ERAS</option>')

for (var i = 0; i < eras.length; i++) {
	$('#era_name').append('<option value=' +eras [i]+ '>' +eras [i]+ '</option');	
}

$('#era_name').on('change', function(e) {
	e.preventDefault();
	var era_name = $('#era_name').val(); 

// if (era_name === '') {
// 	$
// }

});

var wars = ["Revolutionary War", "War of 1812", "Mexican American", "Civil War", 
"Spanish American War", "World War I", "World War II", "Korean War", "Vietnam War", 
"Desert Storm", "Enduring Freedom", "Iraq War"]

$('#war_name').append('<option>WARS</option>')

for (var i = 0; i < wars.length; i++) {
	$('#war_name').append('<option value=' +wars [i]+ '>' +wars [i]+ '</option');	
}

$('#war_name').on('change', function(e) {
	e.preventDefault();
	var war_name = $('#war_name').val(); 

// if (war === 'Revolutionary War') {
// 	$
// }

});

var presidents = ["1	1789-1797	George Washington",	"2	1797-1801	John Adams",	"3	1801-1809	Thomas Jefferson",	
"4	1809-1817	James Madison",	"5	1817-1825	James Monroe",	"6	1825-1829	John Quincy Adams",	
"7	1829-1837	Andrew Jackson",	"8	1837-1841	Martin Van Buren",	"9	1841		William H. Harrison",	
"10	1841-1845	John Tyler", "11	1845-1849	James K. Polk",	"12	1849-1850	Zachary Taylor",	
"13	1850-1853	Millard Fillmore",	"14	1853-1857	Franklin Pierce", "15	1857-1861	James Buchanan",	
"16	1861-1865	Abraham Lincoln",	"17	1865-1869	Andrew Johnson",	"18	1869-1877	Ulysses S. Grant",	
"19	1877-1881	Rutherford Hayes", "20	1881		James A. Garfield",	"21	1881-1885	Chester Arthur",	
"22	1885-1889	Grover Cleveland",	"23	1889-1893	Benjamin Harrison",	"24	1893-1897	Grover Cleveland",	
"25	1897-1901	William McKinley",	"26	1901-1909	Theodore Roosevelt",	"27	1909-1913	William H. Taft",	
"28	1913-1921	Woodrow Wilson",	"29	1921-1923	Warren G. Harding",	
"30	1923-1929	Calvin Coolidge",	"31	1929-1933	Herbert C. Hoover",	"32	1933-1945	Franklin D. Roosevelt",	
"33	1945-1953	Harry S. Truman","34	1953-1961	Dwight D. Eisenhower",	"35	1961-1963	John F. Kennedy",	
"36	1963-1969	Lyndon B. Johnson",	"37	1969-1974	Richard M. Nixon",	"38	1974-1977	Gerald R. Ford",	
"39	1977-1981	Jimmy Carter",	"40	1981-1989	Ronald Reagan",	"41	1989-1993	George H.W. Bush",	"42	1993-2001	Bill Clinton",	
"43	2001-2009	George W. Bush",	"44	2009-2016	Barack Obama"]

$('#president_name').append('<option>PRESIDENTS</option>')

for (var i = 0; i < presidents.length; i++) {
	$('#president_name').append('<option value=' +presidents [i]+ '>' +presidents [i]+ '</option');	
}

$('#president_name').on('change', function(e) {
	e.preventDefault();
	var president_name = $('#president_name').val(); 

// if (president_name === '') {
// 	$
// }

});
// World History--drop down menus for eras
var world_eras = ["Stone Age 2.5 million-3000 B.C.", "Bronze Age 3000-1200 B.C.",
"Iron Age 1500-1000 B.C.", "Classical Greece 2000-300 B.C.","Roman Empire 500 B.C.-A.D. 500",
"Middle Ages 500-1200 A.D.","Renaissance 1300-1600 A.D.","Reformation 1300-1600 A.D.",
"Exploration and Colonization 1400-1800 A.D.","Revolution and Independence 1700-1900"]

$("#world_era_name").append('<option>ERAS</option>')

for (var i = 0; i < world_eras.length; i++) {
	$('#world_era_name').append('<option value=' +world_eras [i]+ '>' +world_eras[i]+ '</option');
}
$('#world_era_name').on('change', function(e){
	e.preventDefault();
	var world_eras_name = $('#world_era_name').val();

// if (world_era_name === "") {

// }
});

var regions = ["Europe","East Asia","South East Asia","South Asia","Middle East",
"North Africa","West Africa","Equatorial Africa","East Africa","Southern Africa","Latin America",
"North America","Caribbean","Central Asia","Oceania"
]

$("#region_name").append('<option>REGIONS</option>')

for (var i = 0; i < regions.length; i++) {
	$('#region_name').append('<option value=' +regions [i]+ '>' +regions [i]+ '</option');
}
$('#region_name').on('change', function(e){
	e.preventDefault();
	var region_name = $('#region_name').val();

// if (region_name === "") {

// }
});


var modernHistory = ["Machine Age (1880-1945)", "Age of Oil (after 1901)",'World War I (1914-1918)',
 "Interwar period (1918-1939)", "Roaring Twenties (1920-1929)", "Great Depression (1929-World War II)",
 "World War II (1939-1945)", "Atomic Age (after 1945)", "Post-war era (1946-1962)", "The Fifties (1950-1959)",
 "Cold War(1945-1989 or 1991)", "Korean War (1950-1953)", "Vietnam War (1955-1975)",
  "Space Age (after 1957)", "The Sixties (1960-1969)", "Post-Modern (1973-present)", "Information Age (1970-present)",
  "The Seventies (1970-1979)", "The Eighties (1980-1989)", "The Nineties (1990-1999)",
  "The 2000s (2000-2009)", "War on Terrorism (2001-present)", "War in Afghanistan (2001-2014)",
   "War in Iraq (2003-2011)", "The Social Age (2004-present)", "The Tens (2010-2019)",
  "The Big Data age (2001-present)", "The Multimedia Age (1987-2007)"]

$("#modern_history_category").append('<option>MODERN HISTORY</option>')

for (var i = 0; i < modernHistory.length; i++) {
	$('#modern_history_category').append('<option value=' +modernHistory [i]+ '>' +modernHistory [i]+ '</option');
}
$('##modern_history_category').on('change', function(e){
	e.preventDefault();
	var modern_history_category = $('#modern_history_category').val();

// if (modern_history_category === "") {

// }
});


// Civil War Page--history directory--onclick link back to appropriate page

// Civil War Page--Key Events Aside--onclick, smoothscroll to event

