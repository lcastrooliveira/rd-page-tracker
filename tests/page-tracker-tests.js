QUnit.testStart(function( details ) {
  console.log( "Now running: ", details.module, details.name );
  localStorage.clear();
});

QUnit.test('findOrCreatePageTracker()',function(assert){
    expected_object = {pages: []};

    assert.deepEqual($pageTracker.findOrCreatePageTracker(), expected_object, 'Creates a page tracker');
});

QUnit.test('findUrlEntry()', function(assert) {
  result_object = $pageTracker.createUrlEntry('pricing.html');
  expected_entry = result_object.pages[0];

  assert.deepEqual($pageTracker.findUrlEntry('pricing.html'), expected_entry, 'Finds an entry with "pricing.html"');
  assert.notOk($pageTracker.findUrlEntry('something.html'), 'Returns undefined');
});

QUnit.test('createUrlEntry()',function(assert) {
    expected_object={pages: [{ url: 'pricing.html', timestamp: (new Date()).toJSON()}]};
    expected_url = expected_object.pages;
    result_object = $pageTracker.createUrlEntry('pricing.html');

    assert.equal(result_object.pages.length, expected_url.length, 'Creaes one page entry');
    assert.equal(result_object.pages[0].url, expected_url[0].url, 'Same url property');
    assert.ok(result_object.pages[0].timestamp, 'Check if Timestamp not null');
});

QUnit.test('eraseTracker()', function(assert) {
  result_object = $pageTracker.createUrlEntry('pricing.html');
  $pageTracker.eraseTracker();

  assert.notOk(localStorage.getItem('rdPageTracker'), 'Returns undefined');
});
