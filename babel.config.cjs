module.exports = {
    presets: [["@babel/preset-env", { targets: { node: "current" } }]]
};

//Babel makes modern JavaScript compatible with Jest/Node.
/*
Jest Issue

Jest runs in Node.js
Node does NOT support:
localStorage
ES Modules (without setup)

package-lock.json

Locks exact dependency versions
Prevents updates from breaking your project
Keeps environment stable

*/