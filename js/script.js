
            function isEmail(email) {
  
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return regex.test(email);
                
            }

            function CheckPassword(password) { 
                var passw=  /[A-Za-z]^[A-Za-z]\w{7,14}$/;
                return passw.test(password);
            }



            
            $("#submitButton").click(function() {
                var errorMessage = "";
                var fieldsMissing = "";
                
                if ($("#email").val() == "") {
                    
                    fieldsMissing += "<br>Email";
                    
                }
                
                if ($("#phone").val() == "") {
                    
                    fieldsMissing += "<br>Telephone";
                    
                }
                
                if ($("#password").val() == "") {
                    
                    fieldsMissing += "<br>Password";
                    
                }
                
                if ($("#passwordConfirm").val() == "") {
                    
                    fieldsMissing += "<br>Confirm Password";
                    
                }
                
                if (fieldsMissing != "") {
                    
                    errorMessage += "<p>The following field(s) are missing:" + fieldsMissing;
                    
                }
                
                if (isEmail($("#email").val()) == false) {
                    
                    errorMessage += "<p>Your email address is not valid</p>";
                    
                }
                
                if ($.isNumeric($("#phone").val()) == false) {
                    
                    errorMessage += "<p>Your phone number is not numeric</p>";
                    
                }

                if (CheckPassword($("password").val())== false){
                     errorMessage += "<p>Your password does not match the required constraints</p>";
                }

                if ($("#password").val() != $("#passwordConfirm").val()) {
                    
                    errorMessage += "<p>Your passwords don't match</p>";
                    
                }

                
                if (errorMessage != "") {
                    
                    $("#errorMessage").html(errorMessage);
                    
                } else {
                    
                    $("#successMessage").show();
                    $("#errorMessage").hide();
                    
                }
                
            });
            
            