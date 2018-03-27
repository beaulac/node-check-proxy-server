#!/usr/bin/env node
'use strict';
const express = require('express')
    , app = express()
    , bodyParser = require('body-parser')
    , cookieParser = require('cookie-parser')
    , debug = require('debug')('check-proxy-server')
    , getProxyType = require('check-proxy').ping;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const handleRequest = (req, res) => {
    debug('ip', req.connection.remoteAddress);
    debug('headers', req.headers);
    debug('cookies', req.cookies);
    res.json(getProxyType(req.headers, req.query, req.body, req.cookies));
};

app.use('/', handleRequest);


const DEFAULT_IP = '127.0.0.1';
const useDefaultIP = () => debug('No CHECKPROXY_IP var, using %s', DEFAULT_IP) || DEFAULT_IP;

const {
    CHECKPROXY_PORT: port = 8080,
    CHECKPROXY_IP: ipAddress = useDefaultIP()
} = process.env;

app.listen(
    port,
    ipAddress,
    () => console.log('%s: Node server started on %s:%d ...', Date(), ipAddress, port)
);
