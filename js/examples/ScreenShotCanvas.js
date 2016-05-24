/**
 * Created by Arick on 2016/5/25.
 */
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 32){
        html2canvas(elementToShare,
            {
                onrendered: function (canvas) {
                    var a = document.createElement('a');
                    var name = "mikro" + Math.floor(Math.random()*10000).toString()+'.jpg';
                    console.log(name);
                    // var img = canvas.toDataURL("image/png");
                    // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
                    a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
                    a.download = name;
                    a.click();
                }
            });
    }
});

document.getElementById('save-image').onclick = function(){
    html2canvas(elementToShare,
        {
            onrendered: function (canvas) {
                var a = document.createElement('a');
                var name = "mikro" + Math.floor(Math.random()*10000).toString()+'.jpg';
                console.log(name);
                // var img = canvas.toDataURL("image/png");
                // toDataURL defaults to png, so we need to request a jpeg, then convert for file download.
                a.href = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream");
                a.download = name;
                a.click();
            }
        });
};