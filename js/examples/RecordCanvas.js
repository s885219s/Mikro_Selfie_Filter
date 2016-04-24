/**
 * Created by Arick on 2016/4/24.
 */
var elementToShare = document.getElementById('elementToShare');
var recorder = RecordRTC(elementToShare, {
    type: 'canvas',
    showMousePointer: false,
    disableLogs: false
});

document.getElementById('start').onclick = function() {
    document.getElementById('start').disabled = true;
    recorder.startRecording();
    setTimeout(function() {
        document.getElementById('stop').disabled = false;
    }, 1000);
};
document.getElementById('stop').onclick = function() {
    this.disabled = true;
    recorder.stopRecording();
//			recorder.stopRecording(function(url) {
//				var video = document.createElement('video');
//				video.src = url;
//				video.setAttribute('style', 'width="1280" height="720" style="position:absolute;left:0px;top:0px;');
//				document.body.appendChild(video);
//				video.controls = true;
//				video.play();
//				window.open(url);
//			});
};
window.onbeforeunload = function() {
    document.getElementById('start').disabled = false;
    document.getElementById('stop').disabled = true;
};
document.getElementById('save-to-disk').onclick = function(){
    this.disabled = true;
    recorder.save();
};
window.onbeforeunload = function() {
    document.getElementById('start').disabled = false;
    document.getElementById('stop').disabled = true;
};
webrtcUtils.enableLogs = false;
