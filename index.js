'use strict'

const request = require('request');

const APOD = class APOD {
    constructor(opts={}) {
        this.key = opts.key;
        this.date = opts.date || this.getCurrentDate();
    }

    getAllData(callback) {
        request(this.baseUrl(), (error, response, body) => {
            if (error) throw error;

            return callback(JSON.parse(body));
         });
    }

    baseUrl() {
        return `https://api.nasa.gov/planetary/apod?api_key=${this.key}&date=${this.date}`;
    }

    getCurrentDate() {
        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        return `${yyyy}-${mm}-${dd}`;
    }
};

module.exports = APOD;