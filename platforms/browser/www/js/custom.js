 base_url ='http://www.pointonesolutions.com.ph/naac/';
        document.addEventListener("deviceready", onDeviceReady, false);

      $(document).ready(function(){
            function new_address(url){

                var ref = cordova.InAppBrowser.open(url, '_blank', 'location=yes');
                    ref.addEventListener('loadstart', function(event) { alert(event.url); });
               //  document.addEventListener("deviceready", onDeviceReady, false);
               //  function onDeviceReady() {
               //      alert(url);
               //      window.open = cordova.InAppBrowser.open(url, '_blank', 'location=yes');
               // // window.open(url,'winname',"directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0,scrollbars=no,resizable=no,width=400,height=350");
               //  }
            }

            $('.thumb,.portfolio-hover').click(function(){
                id = $(this).attr('id');
                $('a[label="'+id+'"]').click();
            })
            $('a.form_menu').click(function(e){
                e.preventDefault();
                href = $(this).attr('href');
                label = $(this).attr('label');

                if(label != 'CARE FERA'){
                    swal({
                          title: "Welcome to NAAC",
                          text: "You are about the fill up an "+label+" form. Do you want to proceed?",
                          type: "",
                          showCancelButton: true,
                          confirmButtonColor: "#009688",
                          confirmButtonText: "Proceed",
                          cancelButtonText: "Cancel",
                          closeOnConfirm: false,
                          closeOnCancel: true
                        },
                        function(isConfirm){

                            if(isConfirm){
                                 new_address(href);//window.location.href = href;
                            }
                            // console.log(isConfirm);
                         //    swal("Ajax request finished!");
                         
                    });
                }else{

                    swal.withForm({
                    title: "Welcome to NAAC",
                     text: "You are about the fill up an "+label+" form. Please select a language to proceed:",
                    showCancelButton: true,
                    confirmButtonColor: '#DD6B55',
                    confirmButtonText: 'Proceed',
                    closeOnConfirm: true,
                    closeOnCancel: true,
                    formFields: [
                      { id: 'select', type: 'select', options: [
                          {value: 'care_fera_english', text: 'English'},
                          {value: 'care_fera_vietnamese', text: 'Vietnamese'},
                          {value: 'care_fera_spanish', text: 'Spanish'},
                          {value: 'care_fera_chinese', text: 'Chinese'},
                      ]}
                    ]
                  }, function (isConfirm) {
                        alert(isConfirm);

                    // do whatever you want with the form data
                    if(isConfirm){
                        language = this.swalForm.select;
                        new_address(base_url + language); // window.location.href = baseUrl() + language;
                   
                    }
                  })

                }
                // swal("Welcome");
                // console.log('ff');
            });


            });