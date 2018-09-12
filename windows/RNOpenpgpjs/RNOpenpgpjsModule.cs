using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Openpgpjs.RNOpenpgpjs
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNOpenpgpjsModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNOpenpgpjsModule"/>.
        /// </summary>
        internal RNOpenpgpjsModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNOpenpgpjs";
            }
        }
    }
}
