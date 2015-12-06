/**
 * @license Copyright © 2013 onwards, Andrew Whewell
 * All rights reserved.
 *
 * Redistribution and use of this software in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 *    * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 *    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
 *    * Neither the name of the author nor the names of the program's contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHORS OF THE SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
/**
 * @fileoverview Declares everything about the event handling mechanism used in VRS.
 */
var VRS;
(function (VRS) {
    /**
     * Global event names.
     */
    VRS.globalEvent = $.extend(VRS.globalEvent || {}, {
        /**
         * Raised after a bootstrap object has been created but before it does any work. param1 = the bootstrap object.
         */
        bootstrapCreated: 'bootstrapCreated',
        /**
         * Raised after the display has been updated - typically after the aircraft list has raised its 'updated' event
         * and the handlers have redrawn themselves.
         */
        displayUpdated: 'displayUpdated',
        /**
         * Raised when the server configuration has changed. param1 = the new configuration.
         */
        serverConfigChanged: 'serverConfigChanged'
    });
    /**
     * The event dispatcher object for VRS.
     */
    var EventHandler = (function () {
        /**
         * Creates a new object.
         */
        function EventHandler(settings) {
            /**
             * An associative array of event names to arrays of handlers.
             */
            this._Events = {};
            this._Settings = $.extend({
                name: 'anon',
                logLevel: 0
            }, settings);
        }
        /**
         * Hooks a listener to an event
         * @param {String} eventName    The name of the event to hook.
         * @param {Function} callback   The method to call when then event is raised.
         * @param {object=} forceThis   The object to use as 'this' when calling the callback. If not passed then window is the value of this.
         * @returns {IEventHandle}      The handle to the hook instance, can be used to unhook the event. Do not make any assumptions about the content of this object.
         */
        EventHandler.prototype.hook = function (eventName, callback, forceThis) {
            if (forceThis === void 0) { forceThis = window; }
            if (!this._Events[eventName])
                this._Events[eventName] = [];
            this._Events[eventName].push({ callback: callback, forceThis: forceThis });
            return { eventName: eventName, callback: callback };
        };
        /**
         * Unhooks a listener from an event.
         */
        EventHandler.prototype.unhook = function (hookResult) {
            if (hookResult) {
                var listeners = this._Events[hookResult.eventName];
                var self = this;
                if (listeners)
                    $.each(listeners, function (idx, handle) {
                        if (handle.callback === hookResult.callback) {
                            self._Events[hookResult.eventName].splice(idx, 1);
                            return false;
                        }
                        return true;
                    });
            }
        };
        /**
         * Calls all listeners to an event.
         */
        EventHandler.prototype.raise = function (eventName, args) {
            var startTime = this._Settings.logLevel ? new Date() : null;
            var listeners = this._Events[eventName];
            if (listeners) {
                var length = listeners.length;
                for (var i = 0; i < length; ++i) {
                    var handler = listeners[i];
                    if (handler) {
                        handler.callback.apply(handler.forceThis, args || []); // handler can be undefined if an event handler causes other event handlers to get removed...
                    }
                }
            }
            if (startTime) {
                var elapsed = new Date().getTime() - startTime.getTime();
                console.log('EVT ' + this._Settings.name + '.' + eventName + ' took ' + elapsed + 'ms with ' + (listeners ? listeners.length : 0) + ' listeners');
            }
        };
        /**
         * Hooks a jQuery UI event using a similar mechanism to hook/unhook.
         * @param {JQuery} pluginElement        The jQueryUI element to hook.
         * @param {String} pluginName           The name of the plugin (e.g. vrs.Map would be vrsMap).
         * @param {String} eventName            The name of the jQuery UI event to hook.
         * @param {Function} callback           The function to call when the jQuery event is raised.
         * @param {{}} [forceThis]              The object to use as 'this' when calling the callback.
         * @returns {object}                    A handle describing the hooked function for subsequent unhooking.
         */
        EventHandler.prototype.hookJQueryUIPluginEvent = function (pluginElement, pluginName, eventName, callback, forceThis) {
            if (forceThis === void 0) { forceThis = null; }
            var fullEventName = (pluginName + eventName).toLowerCase();
            if (forceThis)
                callback = $.proxy(callback, forceThis);
            pluginElement.bind(fullEventName, callback);
            return { eventName: fullEventName };
        };
        /**
         * Unhooks a jQueryUI event.
         * @param {jQuery} pluginElement        The jQueryUI element that was hooked.
         * @param {object} hookResult           The result of a previous call to hookJQueryUIPluginEvent.
         */
        EventHandler.prototype.unhookJQueryUIPluginEvent = function (pluginElement, hookResult) {
            if (pluginElement && hookResult && hookResult.eventName) {
                pluginElement.unbind(hookResult.eventName);
            }
        };
        return EventHandler;
    })();
    VRS.EventHandler = EventHandler;
    /**
    * The dispatcher for global events that are not associated with a single object.
    */
    VRS.globalDispatch = new VRS.EventHandler({
        name: 'GlobalDispatch'
    });
})(VRS || (VRS = {}));
//# sourceMappingURL=event.js.map