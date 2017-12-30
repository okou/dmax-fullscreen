chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "interactive") {
		clearInterval(readyStateCheckInterval);
		(function() {
			chrome.storage.local.get(["fullscreenMode"], function(data) {
				if( data.fullscreenMode !== undefined ) {
					if(data.fullscreenMode) {
						console.log('DMAX Fullscreen was loaded successfuly! >_');
						let videoIframe = jQuery('.video-wrapper iframe');			
						if(videoIframe) {
							jQuery('.video-wrapper').html('');
							jQuery('.video-wrapper').append('<iframe src="'+videoIframe.attr('src')+'" id="bcExperienceObj0" scrolling="no" class="BrightcoveExperience" style="border: 0px" allowFullscreen="true"></iframe>')
						}
					}
				}
			});
		})();
	}
	}, 10);
});