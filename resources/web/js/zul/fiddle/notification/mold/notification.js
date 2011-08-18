function (out) {

	var zcls = this.getZclass(),
		uuid = this.uuid;

	out.push('<div ', this.domAttrs_(),'>',
		'<a href="javascript:void 0;" id="',uuid,'-close" class="',zcls,'-close">X</a>',
		'<h1 id="',uuid,'-title" class="',zcls,'-title">',this._title,'</h1>',
		'<span  id="',uuid,'-message" class="',zcls,'-message">',this._message,'</span>',
		'</div>'
	);

}