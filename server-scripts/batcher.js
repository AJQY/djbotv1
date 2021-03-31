
//Dependencies
var Firebase = require('firebase');
var _ = require('lodash');
var marketOpen = require('./market-open.js');
var token = require('./token.js');

//Initialize variables
var ref = new Firebase('https://realtimetrade.firebaseio.com/series');

//Run through entire history and ensure that all days have around the expected number of ticks.
//If the batcher fails at some point, that will result in old data never being batched -- hence the run through of _all_ days.
//Since the computational time is relatively low right now, and it's during off-time, the time complexity is more than acceptable.
function historicalBatch() {
  if (marketOpen.isMarketOpen()) {
    console.log('Market is open!');
    process.exit();
  }

  token.authenticate(ref, 'admin').then(function () {
    ref.once('value', function (s) {
      console.log('Historical batcher utility started');

      close = closer(Object.keys(s.val()).length);
      s.forEach(function (userSeries) {
        userSeries.ref().orderByChild('0').limitToFirst(1).once('value', function (firstDay) {
          if (firstDay) {
            batchRef(userSeries.ref(), _.values(firstDay.val())[0][0]);
          }
        });
      });
    });
  });
}
var close;
function closer(num) {
  var total = 0;
  return function () {
    total++;
    if (total >= num) {
      console.log('Historical batcher utility closed');
      process.exit();
    }
  }
}

//Batch an entire ref, given the ref and the time to start batching.
function batchRef(ref, startTime) {
  startTime = getTime(startTime, 9);
  var endTime = getTime(startTime, 17);

  ref.orderByChild('0').startAt(startTime).endAt(endTime).once('value', function (series) {
    var values = _.values(series.val());
    if (values.length > 100) {
      batch(ref, series);
      close();
    }
    if (values.length) {
      batchRef(ref, getTime(startTime, 24));
    }
  });
}

//Adjust a JS timestamp (milliseconds since Jan 1, 1970) to correspond to a certain hour.
//If a number greater than 23 is given, the day will also be incremented.
function getTime(timestamp, hours) {
  var dateObj = new Date(timestamp);
  dateObj.setHours(hours);
  return dateObj.getTime();
}

//Batch the entries given into new elements, drop the old ones.
function batch(ref, series) {
  var entries = _.toArray(series.val());

  for (var i = 0; i < entries.length; i += 15) {
    ref.push(entries[i]);
  }

  series.forEach(function (serie) {
    ref.child(serie.key()).remove();
  });

  console.log('batch');
}

module.exports.historicalBatch = historicalBatch;