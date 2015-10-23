/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['allerta, sans-serif']='<script src=\"http://use.edgefonts.net/allerta:n4:all.js\"></script>';
    fonts['raleway, sans-serif']='<script src=\"http://use.edgefonts.net/raleway:n1,n7,n4,n5,n3,n8,n9,n2,n6:all.js\"></script>';

var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '0px','1000px','400px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'blue',
                type: 'image',
                rect: ['0px', '-268px','1920px','988px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"blue.jpg",'0px','0px']
            },
            {
                id: 'Text',
                type: 'text',
                rect: ['311px', '41px','auto','auto','auto', 'auto'],
                text: "Sensofec",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(255,255,255,1.00)", "normal", "none", ""]
            },
            {
                id: 'Text6',
                type: 'text',
                rect: ['516px', '41px','auto','auto','auto', 'auto'],
                text: "Solutions",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 45, "rgba(255,255,255,1)", "400", "none", "normal"]
            },
            {
                id: 'Text5',
                type: 'text',
                rect: ['1000px', '41px','auto','auto','auto', 'auto'],
                text: "| Online Business Management™",
                align: "left",
                font: ['raleway, sans-serif', 45, "rgba(255,255,255,1)", "200", "none", "normal"]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['410px', '174px','auto','auto','auto', 'auto'],
                text: "Presents",
                align: "left",
                font: ['raleway, sans-serif', 45, "rgba(255,255,255,1)", "300", "none", "normal"]
            },
            {
                id: 'Text4',
                type: 'text',
                rect: ['89px', '157px','auto','auto','auto', 'auto'],
                text: "Online Business Managment",
                align: "center",
                font: ['raleway, sans-serif', 45, "rgba(255,255,255,1)", "300", "none", "normal"]
            },
            {
                id: 'Text11',
                type: 'text',
                rect: ['901px', '378px','auto','auto','auto', 'auto'],
                text: "interactive menu",
                align: "center",
                font: ['raleway, sans-serif', 15, "rgba(255,255,255,1)", "300", "none", "normal"]
            },
            {
                id: 'Text7',
                type: 'text',
                rect: ['518px', '142px','auto','auto','auto', 'auto'],
                text: "Command Site Beta Now Available:",
                align: "left",
                font: ['raleway, sans-serif', 35, "rgba(255,255,255,1)", "200", "none", "normal"]
            },
            {
                id: 'serWebsite',
                type: 'text',
                rect: ['562px', '200px','auto','auto','auto', 'auto'],
                text: "- Integrates Into Your Site",
                align: "left",
                font: ['raleway, sans-serif', 35, "rgba(255,255,255,1)", "200", "none", "normal"]
            },
            {
                id: 'serSSA',
                type: 'text',
                rect: ['562', '241px','auto','auto','auto', 'auto'],
                text: "- Automate Routine Activities",
                align: "left",
                font: ['raleway, sans-serif', 35, "rgba(255,255,255,1)", "200", "none", "normal"]
            },
            {
                id: 'serHosting',
                type: 'text',
                rect: ['523px', '282px','auto','auto','auto', 'auto'],
                text: "- Accessible Worldwide",
                align: "left",
                font: ['raleway, sans-serif', 35, "rgba(255,255,255,1)", "200", "none", "normal"]
            },
            {
                id: 'button',
                type: 'image',
                rect: ['76px', '334px','131px','53px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",'img/button.png','0px','0px']
            },
            {
                id: 'login',
                type: 'text',
                rect: ['97px', '340px','auto','auto','auto', 'auto'],
                text: "Login",
                align: "left",
                font: ['raleway, sans-serif', 35, "rgba(255,255,255,1)", "100", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_serSSA}": [
                ["style", "top", '241px'],
                ["style", "font-weight", '200'],
                ["style", "left", '523px'],
                ["style", "opacity", '0']
            ],
            "${_blue}": [
                ["style", "height", '988px'],
                ["style", "top", '-268px'],
                ["style", "left", '0px'],
                ["style", "width", '1920px']
            ],
            "${_Text7}": [
                ["style", "top", '142px'],
                ["style", "font-weight", '200'],
                ["style", "left", '357px'],
                ["style", "opacity", '0']
            ],
            "${_Text11}": [
                ["style", "top", '378px'],
                ["style", "left", '901px'],
                ["style", "font-size", '15px']
            ],
            "${_Text2}": [
                ["style", "top", '147px'],
                ["style", "opacity", '0'],
                ["style", "font-family", 'raleway, sans-serif'],
                ["style", "left", '896px'],
                ["style", "font-weight", '300']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '400px'],
                ["style", "width", '1920px']
            ],
            "${_login}": [
                ["style", "left", '97px'],
                ["style", "top", '340px']
            ],
            "${_Text6}": [
                ["style", "top", '41px'],
                ["style", "opacity", '1'],
                ["style", "left", '994px']
            ],
            "${_serWebsite}": [
                ["style", "top", '200px'],
                ["style", "font-weight", '200'],
                ["style", "left", '523px'],
                ["style", "opacity", '0']
            ],
            "${_Text5}": [
                ["style", "top", '46px'],
                ["style", "font-weight", '200'],
                ["style", "font-style", 'normal'],
                ["style", "font-family", 'raleway, sans-serif'],
                ["style", "left", '1936px'],
                ["style", "font-size", '35px']
            ],
            "${_Text}": [
                ["style", "top", '41px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '780px'],
                ["style", "font-size", '45px']
            ],
            "${_serHosting}": [
                ["style", "top", '282px'],
                ["style", "font-weight", '200'],
                ["style", "left", '523px'],
                ["style", "opacity", '0']
            ],
            "${_button}": [
                ["style", "height", '53px'],
                ["style", "top", '334px'],
                ["style", "left", '76px'],
                ["style", "width", '131px']
            ],
            "${_Rectangle}": [
                ["style", "width", '1000px']
            ],
            "${_TextCopy}": [
                ["style", "top", '41px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '311px'],
                ["style", "font-size", '45px']
            ],
            "${_Text4}": [
                ["style", "top", '173px'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'raleway, sans-serif'],
                ["style", "font-style", 'normal'],
                ["style", "font-weight", '300'],
                ["style", "left", '692px'],
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8500,
            autoPlay: true,
            timeline: [
                { id: "dg15", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "dg16", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '0'}], position: 1000, duration: 0 },
                { id: "dg17", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 1078, duration: 922 },
                { id: "dg18", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 2750, duration: 500 },
                { id: "dg7", tween: [ "style", "${_Text5}", "left", '254px', { fromValue: '1936px'}], position: 6169, duration: 831, easing: "easeInQuad" },
                { id: "dg2", tween: [ "style", "${_Text7}", "opacity", '1', { fromValue: '0'}], position: 6934, duration: 66, easing: "easeInQuad" },
                { id: "dg8", tween: [ "style", "${_Text5}", "font-size", '35px', { fromValue: '35px'}], position: 7000, duration: 0, easing: "easeInQuad" },
                { id: "dg6", tween: [ "style", "${_Text5}", "top", '46px', { fromValue: '46px'}], position: 7000, duration: 0 },
                { id: "dg1", tween: [ "style", "${_Text7}", "top", '142px', { fromValue: '142px'}], position: 7750, duration: 0 },
                { id: "eid56", tween: [ "style", "${_Text2}", "left", '896px', { fromValue: '896px'}], position: 1078, duration: 0 },
                { id: "dg20", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
                { id: "dg21", tween: [ "style", "${_Text4}", "opacity", '1', { fromValue: '0'}], position: 3250, duration: 750 },
                { id: "dg22", tween: [ "style", "${_Text4}", "opacity", '0', { fromValue: '1'}], position: 4750, duration: 500 },
                { id: "dg4", tween: [ "style", "${_serSSA}", "left", '523px', { fromValue: '523px'}], position: 8000, duration: 0 },
                { id: "dg5", tween: [ "style", "${_serSSA}", "opacity", '1', { fromValue: '0'}], position: 7500, duration: 500, easing: "easeInQuad" },
                { id: "dg13", tween: [ "style", "${_Text6}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 194, easing: "easeInOutQuad" },
                { id: "dg3", tween: [ "style", "${_Text7}", "left", '357px', { fromValue: '357px'}], position: 7750, duration: 0, easing: "easeInQuad" },
                { id: "dg10", tween: [ "style", "${_serWebsite}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 500, easing: "easeInQuad" },
                { id: "eid57", tween: [ "style", "${_Text2}", "top", '157px', { fromValue: '147px'}], position: 1078, duration: 922 },
                { id: "dg12", tween: [ "style", "${_serHosting}", "opacity", '0.98', { fromValue: '0'}], position: 8000, duration: 500, easing: "easeInQuad" },
                { id: "dg11", tween: [ "style", "${_Text}", "left", '50px', { fromValue: '780px'}], position: 5750, duration: 419, easing: "easeInOutQuad" },
                { id: "eid55", tween: [ "style", "${_Text6}", "left", '994px', { fromValue: '994px'}], position: 5750, duration: 0 },
                { id: "dg9", tween: [ "style", "${_serWebsite}", "left", '523px', { fromValue: '523px'}], position: 7750, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-29263524");
