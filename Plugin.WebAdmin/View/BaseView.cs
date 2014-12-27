﻿// Copyright © 2014 onwards, Andrew Whewell
// All rights reserved.
//
// Redistribution and use of this software in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
//    * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
//    * Neither the name of the author nor the names of the program's contributors may be used to endorse or promote products derived from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHORS OF THE SOFTWARE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using InterfaceFactory;
using Newtonsoft.Json;
using VirtualRadar.Interface.Presenter;
using VirtualRadar.Interface.View;
using VirtualRadar.Interface.WebServer;

namespace VirtualRadar.Plugin.WebAdmin.View
{
    /// <summary>
    /// The base class for all views.
    /// </summary>
    class BaseView : IView
    {
        private IResponder _Responder;

        /// <summary>
        /// Gets a value indicating that <see cref="ShowView"/> has been called.
        /// </summary>
        public bool IsRunning { get; private set; }

        /// <summary>
        /// Creates a new object.
        /// </summary>
        public BaseView()
        {
            _Responder = Factory.Singleton.Resolve<IResponder>();
        }

        public virtual DialogResult ShowView()
        {
            IsRunning = true;
            return DialogResult.OK;
        }

        public virtual void Dispose()
        {
            ;
        }

        public object ShowBusy(bool isBusy, object previousState)
        {
            return new object();
        }

        public void BubbleExceptionToGui(Exception ex)
        {
            ;
        }

        public virtual void SendData(RequestReceivedEventArgs args)
        {
            var json = JsonConvert.SerializeObject(this);
            _Responder.SendText(args.Request, args.Response, json, Encoding.UTF8, MimeType.Json);
            args.Handled = true;
        }
    }
}