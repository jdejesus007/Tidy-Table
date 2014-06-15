test('Sort Column A', function() {
	var col = 'th[title="Column A"]';

	ok($(table).find(col).trigger('click'), "Click event 'descending'");

	ok($(table).find(col).hasClass('sort_desc'), "<th> contains required class 'sort_desc'");

	equal($(table).find('tr:nth-child(1) > td:nth-child(2)').text(), 'Row 4A', "1st column expected is 'Row 4A'");
	equal($(table).find('tr:nth-child(2) > td:nth-child(2)').text(), 'Row 3A', "2nd column expected is 'Row 3A'");

	ok($(table).find(col).trigger('click'), "Click event 'ascending'");
	
	ok($(table).find(col).hasClass('sort_asc'), "<th> contains required class 'sort_asc'");

	equal($(table).find('tr:nth-child(1) > td:nth-child(2)').text(), 'Row 1A', "1st column expected is 'Row 1A'");
	equal($(table).find('tr:nth-child(2) > td:nth-child(2)').text(), 'Row 2A', "2nd column expected is 'Row 2A'");
});

test('Sort Column B', function() {
	var col = 'th[title="Column B"]';

	ok($(table).find(col).trigger('click'), "Click event 'descending'");

	ok($(table).find(col).hasClass('sort_desc'), "<th> contains required class 'sort_desc'");

	equal($(table).find('tr:nth-child(1) > td:nth-child(3)').text(), 'Row 4B', "1st column expected is 'Row 4B'");
	equal($(table).find('tr:nth-child(2) > td:nth-child(3)').text(), 'Row 3B', "2nd column expected is 'Row 3B'");

	ok($(table).find(col).trigger('click'), "Click event 'ascending'");

	ok($(table).find(col).hasClass('sort_asc'), "<th> contains required class 'sort_asc'");

	equal($(table).find('tr:nth-child(1) > td:nth-child(3)').text(), 'Row 1B', "1st column expected is 'Row 1B'");
	equal($(table).find('tr:nth-child(2) > td:nth-child(3)').text(), 'Row 2B', "2nd column expected is 'Row 2B'");
});

test('Sort Column C', function() {
	var col = 'th[title="Column C"]';

	ok($(table).find(col).trigger('click'), "Click event 'descending'");

	ok($(table).find(col).hasClass('sort_desc'), "<th> contains required class 'sort_desc'");

	equal($(table).find('tr:nth-child(1) > td:nth-child(4)').text(), 'Row 4C', "1st column expected is 'Row 4C'");
	equal($(table).find('tr:nth-child(2) > td:nth-child(4)').text(), 'Row 3C', "2nd column expected is 'Row 3C'");

	ok($(table).find(col).trigger('click'), "Click event 'ascending'");

	ok($(table).find(col).hasClass('sort_asc'), "<th> contains required class 'sort_asc'");

	equal($(table).find('tr:nth-child(1) > td:nth-child(4)').text(), 'Row 1C', "1st column expected is 'Row 1C'");
	equal($(table).find('tr:nth-child(2) > td:nth-child(4)').text(), 'Row 2C', "2nd column expected is 'Row 2C'");
});