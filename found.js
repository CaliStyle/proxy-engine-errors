'use strict'
// const _ = require('lodash')

module.exports = class FoundError extends Error {
  constructor(error) {
    super(error)

    error.name = ''
    this.name = error.toString()
    this.error = 'Not Found'
    this.statusCode = '404'
  }
}
