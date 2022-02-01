clevertap.notifications.push({
    "apnsWebPushId":"<apple web push id>", //only for safari browser
    "apnsWebPushServiceUrl":"<safari package service url>",//only for safari browser
    "titleText":'Would you like to receive Push Notifications?',
    "bodyText":'We promise to only send you relevant content and give you updates on your transactions',
    "okButtonText":'Sign me up!',
    "rejectButtonText":'No thanks',
    "okButtonColor":'#f28046'});
    
var loginCleverTap = function () {
    console.log('Entrou 03 ---<login>-------')
    clevertap.onUserLogin.push({
        "Site": {
          "Name": "Bruno Hauck Ferreira - Web CT teste",            // String
          "Identity": 620,              // String or number
          "Email": "hauckferreira@gmail.com",         // Email address of the user
          "Phone": "+14155551234",           // Phone (with the country code)
          "Gender": "M",                     // Can be either M or F
          "DOB": new Date(),                 // Date of Birth. Date object
       // optional fields. controls whether the user will be sent email, push etc.
          "MSG-email": false,                // Disable email notifications
          "MSG-push": true,                  // Enable push notifications
          "MSG-sms": true,                   // Enable sms notifications
          "MSG-whatsapp": true,              // Enable WhatsApp notifications
        }
       })
       clevertap.event.push("Product Viewed Web - CT Poc", {
        "Product name":"Casio Chronograph Watch",
        "Category":"Mens Accessories",
        "Price":59.99,
      });   
    }