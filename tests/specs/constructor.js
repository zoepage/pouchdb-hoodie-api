'use strict'

var test = require('tape')

var dbFactory = require('../utils/db')
var Store = require('../../')

test('constructs a store object', function (t) {
  t.plan(3)

  var db = dbFactory()
  var store = new Store(db)

  t.is(typeof store, 'object', 'is object')
  t.is(store.db, db, 'exposes db')
  t.ok(store.PouchDB, 'exposes PouchDB')
})

test('constructs a store object w/o new', function (t) {
  t.plan(2)

  var db = dbFactory()
  /*eslint-disable new-cap */
  var store = Store(db)
  /*eslint-enable new-cap */
  t.is(typeof store, 'object', 'is object')
  t.is(store.db, db, 'exposes db')
})

test('throws an error w/o db', function (t) {
  t.plan(2)

  t.throws(Store, 'no arguments')
  t.throws(Store.bind(null, {}), 'object but not a db')
})
