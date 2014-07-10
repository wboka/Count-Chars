(function ($) {
    $.fn.countChars = function (options) {
        // Set default settings
        var settings = $.extend({
            parentContainer: 'p',
            charsRemainingContainer: 'span.charsRemaining',
            debug: false,
            debugMode: "console",
            clearConsole: false
        }, options);

		// Check if the parent & charsRemaining containers exist
        if ($(settings.parentContainer).length !== 0 && $(settings.charsRemainingContainer).length !== 0) {
			// Loop over each text box/field            
            return this.each(function () {
                // Set default characters remaining to (maxlength - current value length) 
                $(this).each(function () {
                    var $this = $(this);

					// Get max characters
                    var totalChars = $this.attr("maxlength");
                    // Get used characters
                    var usedChars = $this.val().length;
                    // Calculate characters remaining
                    var numRemaining = totalChars - usedChars;

					// Set the number remaining
                    $this.prev(settings.parentContainer).find(settings.charsRemainingContainer).text(numRemaining);
                });

                $(this).bind("focus change keyup paste", function () {
                    var $this = $(this);

                    // setTimeout required due to the paste event
                    setTimeout(function () {
                    // Get max characters
                    var totalChars = $this.attr("maxlength");
                    // Get used characters
                    var usedChars = $this.val().length;
                    // Calculate characters remaining
                    var numRemaining = totalChars - usedChars;

					// Set the number remaining
                    $this.prev(settings.parentContainer).find(settings.charsRemainingContainer).text(numRemaining);
                    }, 0);
                });
            });
        } else {
            if (settings.debug) {
                if (settings.clearConsole) {
                    console.clear();
                }

                var msg = ".:|BEGIN DEBUG @ " + new Date().toString() + "|:.";
                if ($(settings.parentContainer).length === 0) {
                    msg += "\nThe parentContainer ('" + settings.parentContainer + "') does not exist. ";
                }

                if ($(settings.charsRemainingContainer).length === 0) {
                    msg += "\nThe charsRemainingContainer ('" + settings.charsRemainingContainer + "') does not exist.";
                }

                msg += "\n.:|END DEBUG @ " + new Date().toString() + "|:.";

                switch (settings.debugMode) {
                    case "alert":
                        alert(msg);
                        break;
                    case "console":
                    default:
                        console.log(msg);
                }
            }
        }
    };
}(jQuery));