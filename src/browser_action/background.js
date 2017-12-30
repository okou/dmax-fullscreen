chrome.storage.local.get(["fullscreenMode"], function(data) {
  if( data.fullscreenMode == undefined ) {
    chrome.storage.local.set({ "fullscreenMode": true }, function(){
      jQuery("#fullscreenState").prop('checked', true);
    })
  }else {
    if(data.fullscreenMode) {
      jQuery("#fullscreenState").prop('checked', true);
    }else {
      jQuery("#fullscreenState").prop('checked', false);
    }
  }
});

jQuery(document).ready(function() {
  jQuery('#fullscreenState').on('click', function() {
    let newCheckboxState = $(this).prop('checked');
    chrome.storage.local.set({ "fullscreenMode": newCheckboxState }, function(){
      jQuery("#fullscreenState").prop('checked', newCheckboxState);
    })
  });
});