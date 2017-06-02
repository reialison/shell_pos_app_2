$(document).ready(function(){
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            if (window.StatusBar) window.StatusBar.hide();
            base_url ='http://www.pointonesolutions.com.ph/shell_pos/app';
            new_address(base_url);
        }

            function new_address(url){

                var ref = cordova.InAppBrowser.open(url, '_blank', 'location=no,fullscreen=yes,toolbar=no');
                    ref.addEventListener('loadstart', function(event) { });

                  ref.addEventListener('loadstop', function(event) {        
                       if (event.url.match("mobile/close")) {
                               ref.close();
                        }                  
                  });               

                  //  document.addEventListener("deviceready", onDeviceReady, false);
               //  function onDeviceReady() {
               //      alert(url);
               //      window.open = cordova.InAppBrowser.open(url, '_blank', 'location=yes');
               // // window.open(url,'winname',"directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no,width=400,height=350");
               //  }
            }

});