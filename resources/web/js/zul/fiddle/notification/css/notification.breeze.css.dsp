<%@ taglib uri="http://www.zkoss.org/dsp/web/core" prefix="c" %>

.z-notification {
    -moz-box-shadow: 0 0 6px #000000;
    -webkit-box-shadow: 0 0 6px #000;
    background: none repeat scroll 0 0 rgba(0, 0, 0, 0.8);
    -moz-border-radius: 8px 8px 8px 8px;
    -webkit-border-radius: 8px;
    padding: 10px;
}
.z-notification-title{
    font-size: 14px;
    margin: 0;
    padding: 0;		
	display: block;
    color: #FFFFFF;
    font-weight: bold;
	-webkit-margin-before: 0.67em;
	-webkit-margin-after: 0.67em;
	-webkit-margin-start: 0px;
	-webkit-margin-end: 0px;
}
.z-notification-message{
	color:#FFFFFF;
    line-height: 18px;
    margin: 3px 0;
    padding: 0;
    font: 12px Helvetica,Arial,sans-serif;
}
.z-notification-close{
	color:#FFFFFF;
    cursor: pointer;
    float: right;
    font-size: 12px;
    font-weight: bold;
    margin-top: -4px;
    padding: 2px;
    text-decoration: none;
    text-shadow: 0 1px 1px #FFFFFF;
}