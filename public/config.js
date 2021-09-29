/**
 * @Author: ZEESHAN AHMAD
 * @Date:   2021-09-28 03:07:08
 * @Last Modified by:   ZEESHAN AHMAD
 * @Last Modified time: 2021-09-28 03:20:17
 */
(function () {
  var loginDomain = "localhost";
  var wsURL = "ws://mongoose.mysmartpbx.org:5280/ws-xmpp";

  window.config = {
    xmpp: {
      transport: "websocket",
      wsURL: wsURL,
    },
    xmppDomain: loginDomain,
  };
})();
