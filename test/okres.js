var okres = require('../');

require('../locale/pl');
require('../locale/bn');

describe('okres en', function () {
  it('should format durations', function () {
    okres({ hour: 10, minute: 5 }).should.be.eql('10 hours 5 minutes');
  });

  it('should skip zeros by default', function () {
    okres({ day: 1, hour: 0, minute: 5 }).should.be.eql('a day 5 minutes');
  });

  it('should show zeros when required', function () {
    okres({ day: 1, hour: 0, minute: 5 }, { showZero: true }).should.be.eql('a day 0 hours 5 minutes');
  });

  it('should format future', function () {
    okres({ hour: 10, minute: 5 }, { future: true }).should.be.eql('in 10 hours 5 minutes');
  });

  it('should format past', function () {
    okres({ hour: 10, minute: 5 }, { past: true }).should.be.eql('10 hours 5 minutes ago');
  });
});

describe('okres pl', function () {
  before(function() {
    this.okres = okres('pl');
  });

  it('should format durations', function () {
    this.okres({ hour: 10, minute: 5 }).should.be.eql('10 godzin 5 minut');
  });

  it('should skip zeros by default', function () {
    this.okres({ day: 1, hour: 0, minute: 5 }).should.be.eql('1 dzień 5 minut');
  });

  it('should show zeros when required', function () {
    this.okres({ day: 1, hour: 0, minute: 5 }, { showZero: true }).should.be.eql('1 dzień 0 godzin 5 minut');
  });

  it('should format future', function () {
    this.okres({ hour: 10, minute: 5 }, { future: true }).should.be.eql('za 10 godzin 5 minut');
  });

  it('should format past', function () {
    this.okres({ hour: 10, minute: 5 }, { past: true }).should.be.eql('10 godzin 5 minut temu');
  });

  it('should format singualar forms properly', function () {
    this.okres({ hour: 1, minute: 5 }).should.be.eql('godzina 5 minut');
    this.okres({ hour: 1, minute: 5 }, { future: true }).should.be.eql('za godzinę 5 minut');
    this.okres({ hour: 1, minute: 5 }, { past: true }).should.be.eql('godzinę 5 minut temu');
  });
});

describe('okres bn', function () {
  before(function() {
    this.okres = okres('bn');
  });

  it('should format durations and use postformat', function () {
    this.okres({ hour: 10, minute: 5 }).should.be.eql('১০ ঘন্টা ৫ মিনিট');
  });
});
