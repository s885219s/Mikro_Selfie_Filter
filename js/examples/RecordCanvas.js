/**
 * Created by Arick on 2016/4/24.
 */
var elementToShare = document.getElementById('elementToShare');
var recorder = RecordRTC(elementToShare, {
    type: 'canvas',
    showMousePointer: false,
    disableLogs: false
});
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 13 && !document.getElementById('start').disabled) {
        document.getElementById('start').disabled = true;
        recorder.startRecording();
        setTimeout(function() {
            document.getElementById('stop').disabled = false;
        }, 1000);
    }
    else if(event.keyCode == 13 && document.getElementById('start').disabled) {
        document.getElementById('stop').disabled = true;
        document.getElementById('start').disabled = false;
        setTimeout(function() {
            recorder.stopRecording();
        }, 700);
    }
    else if(event.keyCode == 83){
        document.getElementById('save-to-disk').disabled = true;
        recorder.save();
        setTimeout(function() {
            document.getElementById('save-to-disk').disabled = false;
        }, 1000);
    }
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
    document.getElementById('start').disabled = false;
    setTimeout(function() {
        recorder.stopRecording();
    }, 500);
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
    setTimeout(function() {
        document.getElementById('save-to-disk').disabled = false;
    }, 1000);
};
window.onbeforeunload = function() {
    document.getElementById('start').disabled = false;
    document.getElementById('stop').disabled = true;
};
webrtcUtils.enableLogs = false;
