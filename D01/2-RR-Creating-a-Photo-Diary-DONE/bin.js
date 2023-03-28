#!/usr/bin/env node
const open = require('open')
const crossSpawn = require("cross-spawn");
const isWin = process.platform === "win32";
const { exec, spawn } = require('child_process')
exec('npx webpack --mode="development"', () => {
    //spawn('npx', [ 'webpack', '--watch', '--mode="development"' ], { stdio: 'inherit' });
    
    crossSpawn(
        isWin ? "npx.cmd" : "npx",
        [ 'webpack', '--watch', '--mode="development"' ],
        { stdio: "inherit" }
    )
    
    open('./public/index.html')
    console.log('Watching for changes in "./src"')
})