
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId, symbolName, "${_Text4}", "mouseover", function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_serWebsite}", "mouseover", function(sym,e){sym.$("serWebsite").css("color","#229CEB");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_serSSA}", "mouseover", function(sym,e){sym.$("serSSA").css("color","#229CEB");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_serHosting}", "mouseover", function(sym,e){sym.$("serHosting").css("color","#229CEB");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_serHosting}", "mouseout", function(sym,e){sym.$("serHosting").css("color","#FFFFFF");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_serSSA}", "mouseout", function(sym,e){sym.$("serSSA").css("color","#FFFFFF");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_serWebsite}", "mouseout", function(sym,e){sym.$("serWebsite").css("color","#FFFFFF");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_serHosting}", "click", function(sym,e){window.open("hosting.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_serSSA}", "click", function(sym,e){window.open("serverside.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_serWebsite}", "click", function(sym,e){window.open("webdesign.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_login}", "mouseover", function(sym,e){sym.$("login").css("color","#229CEB");});
//Edge binding end
Symbol.bindElementAction(compId, symbolName, "${_login}", "mouseout", function(sym,e){sym.$("login").css("color","#FFFFFF");});
//Edge binding end
})("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-29263524");