Ever get sick of giving html check boxes and radio buttons ID attributes so that you can then attach a label to them that toggles them when it is clicked? This jquery plugin is for you. This will automatically take care of attaching labels to adjacent checkboxes / radios, and also assign unique ids to the checkboxes / radios (if they do not have one already.) Usage:

	$( "body" ).autoAttachInputLabels();

Viola! All labels within the "body" element that have adjacent checkboxes or radios will be automatically attached to them. That is, the labels' "for" attribute will be automatically set to the ID of their adjacent checkbox / radio.