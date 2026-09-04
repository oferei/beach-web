(function(root,factory){
  const model=factory();
  if(typeof module==="object"&&module.exports)module.exports=model;
  else root.BeachAudioModel=model;
})(typeof globalThis!=="undefined"?globalThis:this,function(){
  "use strict";
  function sandAudioParams(moving,speed=0){const energy=Math.max(0,Math.min(1,speed/1.5));return moving?{gain:.005+energy*.025,frequency:165+energy*650,q:.8-energy*.35}:{gain:0,frequency:165,q:.8}}
  function volumeScale(level,maxScale){const safeLevel=Math.max(0,Math.min(1,level)),safeMax=Math.max(1,maxScale);if(safeLevel<=0)return 0;const exponent=Math.log(1/safeMax)/Math.log(.5);return safeMax*Math.pow(safeLevel,exponent)}
  function splashAudioParams(speed){const onset=.65,saturation=1.8,energy=Math.max(0,Math.min(1,(speed-onset)/(saturation-onset)));return{trigger:speed>=onset,gain:.014+energy*.012,frequency:720+energy*260,attack:.008,release:.11}}
  return{sandAudioParams,splashAudioParams,volumeScale};
});
