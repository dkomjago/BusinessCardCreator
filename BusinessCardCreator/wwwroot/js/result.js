var canvas = document.getElementById("card");
var ctx = canvas.getContext("2d");

window.onload = function draw(data) {
    //Background
    ctx.fillStyle = "#f2f2f2";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //Draw strings from input
    ctx.fillStyle = "#000000"
    ctx.textAlign = "left";
    ctx.font = 'bold 30px sans-serif';
    ctx.fillText(document.getElementById('FirstName').value + ' ' + document.getElementById('LastName').value, 10, 50);
    ctx.font = '22px sans-serif';
    ctx.fillText(document.getElementById('Position').value, 10, 85);
    ctx.textAlign = "right";
    ctx.font = '18px Arial';
    ctx.fillText(document.getElementById('Company').value, 390, 140);
    ctx.font = '12px Arial';
    ctx.fillText(document.getElementById('Link').value, 390, 160);
    ctx.fillText(document.getElementById('Phone').value, 390, 175);
    ctx.fillText(document.getElementById('Email').value, 390, 190);

    //Draw Logo
    var img = new Image();
    img.onload = function () {
        ctx.globalAlpha = 0.2;
        ctx.drawImage(img, canvas.width/4, 0, canvas.height, canvas.height);
    }
    img.src = document.getElementById('CompanyLogoString').value;

    //Add Image URL to button
    var downloadB = document.getElementById('download');
    download.href = canvas.toDataURL();
    download.download = "businesscard.png";
}