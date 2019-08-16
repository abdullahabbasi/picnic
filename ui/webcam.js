(function() {
    console.log('webcam')
    navigator.getMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia);
    navigator.getMedia(
        {video: true, audio: false},
        function(stream) {
            var video = document.getElementsByTagName('video')[0];
            //video.src = window.URL.createObjectURL(stream);
            video.srcObject = stream;
            video.play();
        }, function(error) {
            console.log('video stream error');
        });
        document.getElementById('capture').addEventListener('click', takeSnapshot)
    
})();

function takeSnapshot(){
    var canvas = document.getElementById('canvas');
    var output = document.getElementById('output');
    var video = document.getElementById('player');

    width = video.videoWidth;
    height = video.videoHeight;
    context = canvas.getContext('2d');
    canvas.width = width;
    canvas.height = height;
    context.drawImage(video, 0, 0, width, height);
    var imageDataUrl = canvas.toDataURL('image/png');
    output.setAttribute('src', imageDataUrl);
    console.log('image is ', output);
}
