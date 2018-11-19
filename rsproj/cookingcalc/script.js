"use strict";

var WIKI_URL = "https://www.runescape.fandom.com/w/api.php";
var GE_URL = "http://services.runescape.com/m=itemdb_rs/api/catalogue/detail.json?item=";

var MIN_LEVEL = 1;
var MAX_LEVEL = 99;
var LEVELS = [];

var ITEMS = {
    "trout": {
        "level": 15,
        "exp": 70,
        "noburn": 50,
        "rid": 335,
        "cid": 337,
        "price": 0,
        "cprice": 0,
    },
    "salmon": {
        "level": 25,
        "exp": 90,
        "noburn": 58,
        "rid": 331,
        "cid": 333,
        "price": 0,
        "cprice": 0,
    },
    "tuna": {
        "level": 30,
        "exp": 100,
        "noburn": 64,
        "rid": 359,
        "cid": 361,
        "rprice": 0,
        "cprice": 0,
    },
    "lobster": {
        "level": 40,
        "exp": 120,
        "noburn": 74,
        "rid": 377,
        "cid": 379,
        "rprice": 0,
        "cprice": 0,
    },
    "swordfish": {
        "level": 45,
        "exp": 140,
        "noburn": 86,
        "rid": 371,
        "cid": 373,
        "rprice": 0,
        "cprice": 0
    },
    "monkfish": {
        "level": 62,
        "exp": 150,
        "noburn": 90,
        "rid": 7944,
        "cid": 7946,
        "rprice": 0,
        "cprice": 0
    },
    "shark": {
        "level": 80,
        "exp": 210,
        "noburn": 99,
        "rid": 383,
        "cid": 385,
        "rprice": 0,
        "cprice": 0
    }
};

function next_level_exp(x) {
    return (x===0) ? 0 : (x-1+300*2*(x-1)/7)/4;
}

function init_levels(LEVELS){
    for (var i=MIN_LEVEL; i<MAX_LEVEL+1; i++) {
        LEVELS.push(next_level_exp(i));
    }
}

function get_ge_price(id, request) {
    var price = 0;
    var api_url = GE_URL + id;
    request.open('GET', api_url, true);
    request.onload = function() {
        var data = JSON.parse(this.response);
        price = data["item"]["current"]["price"];
    }
    request.send();
    return price;
}

function init_items(ITEMS) {
    var request = new XMLHttpRequest();
    for (var key in ITEMS) {
        var item = ITEMS[key];
        item["rprice"] = get_ge_price(item["rid"], request);
        item["cprice"] = get_ge_price(item["cid"], request);
        console.log(item["rprice"]);
        console.log(item["cprice"]);
    }
}

function addRow() {
    document.getElementById('root').appendChild(entry)
}

init_levels(LEVELS);
init_items(ITEMS);

document.getElementById("go_btn").addEventListener("click", function() {
    start_level = document.getElementById("start_level").value;
    end_level = document.getElementById("end_level").value;
    alert(document.getElementById("no_burn").value);
    alert(document.getElementById("no_loss").value);
});
