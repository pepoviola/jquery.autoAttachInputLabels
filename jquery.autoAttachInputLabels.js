/*
 * Auto attach input labels - v0.1 - 7/20/2011
 * 
 * Copyright (c) David Beck
 * Dual licensed under the MIT and GPL licenses.
 */

// Auto assign the "for" attribute in label elements that are adjacent to check boxes and radio button inputs
// to the id of the adjacent input. If the adjacent button does not have an id, assign it a unique id so
// that we can complete the attachment.

(function($,undefined){
	'$:nomunge'; // Used by YUI compressor.
	
	var autoAttachInputLabels_idCounter = 0;
	
	$.fn.autoAttachInputLabels = function(){
		
		this.find( "input[type='checkbox'] + label:not([for]), input[type='radio'] + label:not([for])" ).each( function() {
			var inputEl = $( this ).prev();
			var inputId = inputEl.attr( "id" );
			
			if( _.isUndefined( inputId ) )
			{
				inputId = "id_assigned_by_auto_attach_input_label_" + autoAttachInputLabels_idCounter;
				autoAttachInputLabels_idCounter++;
				
				inputEl.attr( "id", inputId );
			}
			
			$( this ).attr( "for", inputId );
		} );
		
		return this;
	};

})(jQuery);