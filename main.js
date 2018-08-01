
    var textArea = document.getElementById("textarea");
    var charEntered = document.getElementById("header");
    
    function keyDown(e) {
            var length = textArea.value.length;
            document.getElementById("header").innerText = (250 - length) + " characters remaining";

            if (length >= 250) {
                event.preventDefault();
                document.getElementById("header").innerText = "Maximum characters have been reached";
            }
    }
