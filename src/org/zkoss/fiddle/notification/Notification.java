package org.zkoss.fiddle.notification;

import org.zkoss.lang.Objects;
import org.zkoss.zk.au.out.AuInvoke;
import org.zkoss.zk.ui.event.Events;
import org.zkoss.zul.impl.XulElement;

public class Notification extends XulElement {

	static {
		addClientEvent(Notification.class, Events.ON_CLOSE, CE_IMPORTANT | CE_NON_DEFERRABLE);
	}

	private String _title;

	private String _message;

	public Notification() {

	}

	public Notification(String message) {
		this(message, null);
	}

	public Notification(String message, String title) {
		this._message = message;
		this._title = title;
	}

	public String getTitle() {
		return _title;
	}

	public void setTitle(String title) {

		if (!Objects.equals(_title, title)) {
			_title = title;
			smartUpdate("title", _title);
		}
	}

	public String getMessage() {
		return _message;
	}

	public void setMessage(String message) {

		if (!Objects.equals(_message, message)) {
			_message = message;
			smartUpdate("message", _message);
		}
	}

	public void onClose() {
		this.detach();
	}

	/**
	 * Close the notification after specific seconds ,
	 * 
	 * @param seconds
	 */
	public void detachAfter(int seconds) {
		response(new AuInvoke(this, "close", seconds));
	}

	// super//
	protected void renderProperties(org.zkoss.zk.ui.sys.ContentRenderer renderer) throws java.io.IOException {
		super.renderProperties(renderer);

		if (!"".equals(_title))
			render(renderer, "title", _title);

		if (!"".equals(_message))
			render(renderer, "message", _message);
	}

	/**
	 * The default zclass is "z-notification"
	 */
	public String getZclass() {
		return (this._zclass != null ? this._zclass : "z-notification");
	}
}
