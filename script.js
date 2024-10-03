$(document).ready(function () {
    $('#generate').click(function () {
        var url = $('#url').val().trim();

        if (!url) {
            $('#message').text('Please enter a valid URL.').removeClass('hidden').css('color', 'red');
            return;
        }

        $('#qrcode').empty(); // Clear previous QR code

        // Generate new QR code using qrcode.js
        var qrcode = new QRCode(document.getElementById("qrcode"), {
            text: url,
            width: 128,
            height: 128,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });

        // Show the download button and success message
        $('#download').removeClass('hidden');
        $('#message').text('QR Code generated successfully!').removeClass('hidden').css('color', '#5cb85c');
    });

    // Download QR code as an image
    $('#download').click(function () {
        var canvas = document.querySelector('#qrcode canvas');
        if (canvas) {
            // Convert canvas to Data URL
            var link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'qrcode.png'; // Set download filename
            link.click(); // Trigger the download
        } else {
            $('#message').text('Please generate a QR code first.').removeClass('hidden').css('color', 'red');
        }
    });
});
