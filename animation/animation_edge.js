/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'mike-the-frog',
            type:'image',
            rect:['550px','400px','209px','174px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mike-the-frog.png",'0px','0px'],
            transform:[]
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['305px','55px','237px','127px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Text',
            type:'text',
            rect:['337px','104px','auto','auto','auto','auto'],
            text:"Hello,I am Mike.",
            font:['Arial, Helvetica, sans-serif',[24,""],"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'Text2',
            type:'text',
            rect:['550px','47px','171px','57px','auto','auto'],
            text:" Hop right over to the shirts or",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text3',
            type:'text',
            rect:['487px','-142px','191px','57px','auto','auto'],
            text:"drop me a line on the contact page.",
            align:"left",
            font:['Arial, Helvetica, sans-serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "height", '127px'],
            ["style", "opacity", '0'],
            ["style", "top", '55px'],
            ["style", "width", '237px']
         ],
         "${_Text}": [
            ["style", "top", '223px'],
            ["style", "opacity", '1'],
            ["style", "left", '-176px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_Text3}": [
            ["style", "height", '57px'],
            ["style", "top", '-142px'],
            ["style", "left", '487px'],
            ["style", "width", '191px']
         ],
         "${_mike-the-frog}": [
            ["style", "top", '400px'],
            ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '174px'],
            ["style", "left", '550px'],
            ["style", "width", '209px']
         ],
         "${_Text2}": [
            ["style", "top", '-37px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '57px'],
            ["style", "opacity", '1'],
            ["style", "left", '669px'],
            ["style", "width", '171px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 8250,
         autoPlay: true,
         timeline: [
            { id: "eid44", tween: [ "style", "${_Text2}", "left", '337px', { fromValue: '669px'}], position: 4500, duration: 250, easing: "easeInOutElastic" },
            { id: "eid51", tween: [ "style", "${_Text3}", "left", '359px', { fromValue: '487px'}], position: 7000, duration: 250, easing: "swing" },
            { id: "eid52", tween: [ "style", "${_Text3}", "left", '337px', { fromValue: '359px'}], position: 7250, duration: 500, easing: "easeOutElastic" },
            { id: "eid54", tween: [ "style", "${_Text3}", "left", '327px', { fromValue: '337px'}], position: 7750, duration: 500, easing: "easeOutElastic" },
            { id: "eid11", tween: [ "transform", "${_mike-the-frog}", "rotateZ", '-180deg', { fromValue: '0deg'}], position: 0, duration: 500, easing: "swing" },
            { id: "eid20", tween: [ "transform", "${_mike-the-frog}", "rotateZ", '-360deg', { fromValue: '-180deg'}], position: 500, duration: 500, easing: "swing" },
            { id: "eid23", tween: [ "transform", "${_mike-the-frog}", "rotateZ", '-318deg', { fromValue: '-360deg'}], position: 1000, duration: 500, easing: "swing" },
            { id: "eid26", tween: [ "transform", "${_mike-the-frog}", "rotateZ", '-360deg', { fromValue: '-318deg'}], position: 1500, duration: 500, easing: "swing" },
            { id: "eid31", tween: [ "style", "${_mike-the-frog}", "width", '372px', { fromValue: '209px'}], position: 2000, duration: 500, easing: "swing" },
            { id: "eid46", tween: [ "transform", "${_Text2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 4500, duration: 250, easing: "easeInOutElastic" },
            { id: "eid50", tween: [ "style", "${_Text3}", "top", '90px', { fromValue: '-142px'}], position: 7000, duration: 250, easing: "swing" },
            { id: "eid53", tween: [ "style", "${_Text3}", "top", '75px', { fromValue: '90px'}], position: 7250, duration: 500, easing: "easeOutElastic" },
            { id: "eid55", tween: [ "style", "${_Text3}", "top", '90px', { fromValue: '75px'}], position: 7750, duration: 500, easing: "easeOutElastic" },
            { id: "eid45", tween: [ "style", "${_Text2}", "top", '90px', { fromValue: '-37px'}], position: 4500, duration: 250, easing: "easeInOutElastic" },
            { id: "eid49", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '1'}], position: 4750, duration: 0, easing: "swing" },
            { id: "eid48", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 6750, duration: 250, easing: "swing" },
            { id: "eid47", tween: [ "style", "${_Text}", "opacity", '1', { fromValue: '1'}], position: 2500, duration: 0, easing: "easeInOutElastic" },
            { id: "eid43", tween: [ "style", "${_Text}", "opacity", '0.0078125', { fromValue: '1'}], position: 4250, duration: 250, easing: "swing" },
            { id: "eid34", tween: [ "style", "${_RoundRect}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "swing" },
            { id: "eid21", tween: [ "style", "${_mike-the-frog}", "left", '341px', { fromValue: '550px'}], position: 500, duration: 500, easing: "easeInOutElastic" },
            { id: "eid24", tween: [ "style", "${_mike-the-frog}", "left", '211px', { fromValue: '341px'}], position: 1000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid27", tween: [ "style", "${_mike-the-frog}", "left", '0px', { fromValue: '211px'}], position: 1500, duration: 500, easing: "easeInOutElastic" },
            { id: "eid29", tween: [ "style", "${_mike-the-frog}", "height", '310px', { fromValue: '174px'}], position: 2000, duration: 500, easing: "swing" },
            { id: "eid38", tween: [ "style", "${_Text}", "left", '337px', { fromValue: '-176px'}], position: 2250, duration: 250, easing: "swing" },
            { id: "eid22", tween: [ "style", "${_mike-the-frog}", "top", '226px', { fromValue: '400px'}], position: 500, duration: 500, easing: "easeInOutElastic" },
            { id: "eid25", tween: [ "style", "${_mike-the-frog}", "top", '117px', { fromValue: '226px'}], position: 1000, duration: 500, easing: "easeInOutElastic" },
            { id: "eid28", tween: [ "style", "${_mike-the-frog}", "top", '226px', { fromValue: '117px'}], position: 1500, duration: 500, easing: "easeInOutElastic" },
            { id: "eid30", tween: [ "style", "${_mike-the-frog}", "top", '90px', { fromValue: '226px'}], position: 2000, duration: 500, easing: "swing" },
            { id: "eid59", tween: [ "style", "${_mike-the-frog}", "top", '70px', { fromValue: '90px'}], position: 4750, duration: 250, easing: "easeOutElastic" },
            { id: "eid60", tween: [ "style", "${_mike-the-frog}", "top", '90px', { fromValue: '70px'}], position: 5000, duration: 250, easing: "easeOutElastic" },
            { id: "eid40", tween: [ "style", "${_Text}", "top", '104px', { fromValue: '223px'}], position: 2250, duration: 250, easing: "swing" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-848388606");
