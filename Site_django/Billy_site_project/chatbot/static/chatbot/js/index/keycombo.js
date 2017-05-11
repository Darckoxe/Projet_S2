$(document).keydown(function(e){
    if(e.keyCode in keyCodeMap){
        keyCodeMap[e.keyCode] = true;
        
        if(keyCodeMap.CtrlMajUp()){
            alert("Ctrl + Shift + ↑");//fire above theme event
        }
        
        if(keyCodeMap.CtrlMajDown()){
            alert("Ctrl + Shift + ↓");//fire below theme event
        }
        
        if(keyCodeMap.CtrlMajAltX()){
            console.clear();
        }
    }
}).keyup(function(e){
    if(e.keyCode in keyCodeMap){
        keyCodeMap[e.keyCode] = false;
    }
});





var keyMap = {};
var keyCodeMap = {};
$(document).ready(setupKeyMaps);
function setupKeyMaps(){
    keyMap["ctrl"]=17;
    keyMap["shift"]=16;
    keyMap["alt"]=18;
    
    keyMap["up"] = 38;
    keyMap["down"] = 40;
    keyMap["left"] = 37;
    keyMap["right"] = 39;
    
    keyMap["²"] = 0;
    
    keyMap["x"] = 88;
    
    
    for(var str in keyMap){
        keyCodeMap[ keyMap[str] ] = false;
    }
    
    
    keyCodeMap.CtrlMajUp = function(){
        return this[17] && this[16] && this[38];
    };
    keyCodeMap.CtrlMajDown = function(){
        return this[17] && this[16] && this[40];
    };
    
    keyCodeMap.CtrlMajAltX = function(){
        return this[17] && this[16] && this[18] && this[88];
    }
}
/*
17 : ctrl / altgr
16 : maj/shift
18 : alt
20 : capslock
9 : tab

65 : a
90 : z
69 : e
82 : r
84 : t
89 : y
85 : u
73 : i
79 : o
80 : p
81 : q
83 : s
68 : d
70 : f
71 : g
72 : h
74 : j
75 : k
76 : l
77 : m
87 : w
88 : x
67 : c
86 : v
66 : b
78 : n

38 : ↑
40 : ↓
39 : →
37 : ←
0 : ²
*/