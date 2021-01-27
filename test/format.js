const format = require('../lib/format');

require('../locale/pl');
require('../locale/it');

describe('format en', function () {
  before(function() {
    this.format = format();
  });

  it('should format units', function () {
    this.format.toString(5, 'mm').should.be.eql('5 minutes');
  });

  it('should format future', function() {
    this.format.toFutureOrPast('10 days', 'future').should.eql('in 10 days');
  });

  it('should format past', function() {
    this.format.toFutureOrPast('3 minutes', 'past').should.eql('3 minutes ago');
  });
});

describe('format pl', function () {
  before(function() {
    this.format = format('pl');
  });

  it('should format units', function () {
    this.format.toString(5, 'mm').should.be.eql('5 minut');
  });

  it('should format future', function() {
    this.format.toFutureOrPast('10 dni', 'future').should.eql('za 10 dni');
  });

  it('should format past', function() {
    this.format.toFutureOrPast('3 minuty', 'past').should.eql('3 minuty temu');
  });
});

describe('format it', function () {
  before(function() {
    this.format = format('it');
  });

  it('should format units', function () {
    this.format.toString(5, 'mm').should.be.eql('5 minuti');
  });

  it('should format future', function() {
    this.format.toFutureOrPast('5 minuti', 'future').should.eql('tra 5 minuti');
  });

  it('should format past', function() {
    this.format.toFutureOrPast('5 minuti', 'past').should.eql('5 minuti fa');
  });
});
