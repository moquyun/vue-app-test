setTimeout(function(){
//
  var username = document.getElementById('js-shareData');
  console.log(username)

},3000);
//flashvars_212910342.mediaDefinitions

// defaultQuality

// document.getElementById('player').data-video-id
//getAttribute('data-video-id')

let videoid =  document.getElementById('player').getAttribute('data-video-id')
let vidname = 'flashvars_' + videoid
console.log(vidname)
console.log(window[vidname].mediaDefinitions)
//videoUrl
//
//
//flashvars_212910342.mediaDefinitions

// defaultQuality

// document.getElementById('player').data-video-id
//getAttribute('data-video-id')

let ppvideoid =  document.getElementById('player').getAttribute('data-video-id')
let ppvidname = 'flashvars_' + ppvideoid
let ppvidarr  = window[ppvidname].mediaDefinitions

if(ppvidarr[0].videoUrl){
  console.log(ppvidarr[0].videoUrl)
}else if(ppvidarr[1].videoUrl) {
  console.log(ppvidarr[1].videoUrl)
}else {
  console.log(ppvidarr[2].videoUrl)
}

