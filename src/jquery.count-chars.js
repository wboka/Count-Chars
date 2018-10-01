(function($) {
	$.fn.countChars = function(options) {
		// Set default settings
		var settings = $.extend(
			{
				parentContainer: "div",
				charsClass: "charsRemaining",
				position: "before",
				debug: false,
				debugMode: "console",
				clearConsole: false
			},
			options
		);

		if (settings.debug) {
			if (!window.console) {
				window.console = {
					log: function() {}
				};
			}
			if (settings.clearConsole && settings.debugMode === "console") {
				console.clear();
			}

			var msg = ".:|BEGIN DEBUG @ " + new Date().toString() + "|:.";

			for (var I in settings) {
				msg += "\n" + I + " = " + settings[I];
			}

			msg += "\n.:|END DEBUG @ " + new Date().toString() + "|:.";

			switch (settings.debugMode) {
				case "alert":
					alert(msg);
					break;
				case "console":
					console.log(msg);
					break;
				default:
					console.log("This is not the message you are looking for...");
			}
		}

		var length = 1;
		var charRemainingContainer =
			"<" +
			settings.parentContainer +
			"><span class='" +
			settings.charsClass +
			"'></span> Characters Left</" +
			settings.parentContainer +
			">";
		var charEnteredContainer =
			"<" +
			settings.parentContainer +
			"><span class='" +
			settings.charsClass +
			"'></span> Characters Entered</" +
			settings.parentContainer +
			">";

		// Loop over each text box/field
		return this.each(function() {
			$(this).each(function() {
				var $this = $(this);

				var hasMaxLength = typeof $this.attr("maxlength") !== "undefined";

				if (hasMaxLength) {
					// Get max characters
					var totalChars = $this.attr("maxlength");
					// Get used characters
					var usedChars = $this.val().length;
					// Calculate characters remaining
					var numRemaining = totalChars - usedChars;
				} else {
					var numRemaining = $this.val().length;
				}

				// Check if the parent & charsRemaining containers exist
				if (settings.position === "before") {
					if ($this.prev(settings.parentContainer).length === 0) {
						if (hasMaxLength) {
							$(charRemainingContainer).insertBefore($this);
						} else {
							$(charEnteredContainer).insertBefore($this);
						}

						$parent = $this.prev(settings.parentContainer);
					} else {
						$parent = $(settings.parentContainer);
					}
				} else {
					if ($this.next(settings.parentContainer).length === 0) {
						if (hasMaxLength) {
							$(charRemainingContainer).insertAfter($this);
						} else {
							$(charEnteredContainer).insertAfter($this);
						}
						$parent = $this.next(settings.parentContainer);
					} else {
						$parent = $(settings.parentContainer);
					}
				}

				// Set the number remaining
				$parent.find("span." + settings.charsClass).text(numRemaining);

				// Increase the length
				length++;
			});

			$(this).bind("focus change keyup paste", function() {
				var $this = $(this);

				var hasMaxLength = typeof $this.attr("maxlength") !== "undefined";

				// setTimeout required due to the paste event
				setTimeout(function() {
					if (hasMaxLength) {
						// Get max characters
						var totalChars = $this.attr("maxlength");
						// Get used characters
						var usedChars = $this.val().length;
						// Calculate characters remaining
						var numRemaining = totalChars - usedChars;
					} else {
						var numRemaining = $this.val().length;
					}

					if (settings.position === "before") {
						$parent = $this.prev(settings.parentContainer);
					} else {
						$parent = $this.next(settings.parentContainer);
					}

					// Set the number remaining
					$parent.find("span." + settings.charsClass).text(numRemaining);
				}, 0);
			});
		});
	};
})(jQuery);
