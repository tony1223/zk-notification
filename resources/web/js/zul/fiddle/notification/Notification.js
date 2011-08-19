/**
 * A widget for notification
 */
zul.fiddle.notification.Notification = zk.$extends(zk.Widget, {
	_title: '',
	_message: '',
	_fadeoutDuring:1000,
	$define: {
		message: function(msg) {
			if (this.desktop) {
				var n = jq(this.$n("message"));
				n.text(msg);
			}
		},
		title: function(title) {
			if (this.desktop) {
				var n = jq(this.$n("title"));
				n.text(title);
				if (title) 
					n.show();
				else 
					n.hide();
			}
		}
	},
	$init:	function () {
		this.$supers(zul.fiddle.notification.Notification, '$init', arguments);
		var wgt = this;
		this.actions_ = {
			hide:[function(n, opts) {
				jq(n).fadeOut(this._fadeoutDuring, function() {
					wgt.afterAnima_(false);
				})
			}, null]
		} ;
	},
	bind_: function () {
		this.$supers(zul.fiddle.notification.Notification, 'bind_', arguments);
		this.domListen_(this.$n("close"), "onClick", "doClose_")
		if (!this._title) {
			jq(this.$n("title")).hide();
		}
		if (this.isVisible()) {
			jq(this).hide().fadeIn();
		}
	},
	doClose_: function() {
		this.close();
	},
	close: function(sec) {
		if (sec) {
			var wgt = this;
			setTimeout(function() {
				if (wgt.desktop) {
					wgt.fire("onClose");
				}
			}, zk.parseInt(sec) * 1000);
		} else {
			this.fire("onClose");
		}
	},
	unbind_: function() {
		this.$supers(zul.fiddle.notification.Notification, 'unbind_', arguments);
	},
	getZclass: function() {
		return this._zclass != null ? this._zclass : "z-notification";
	}
});
