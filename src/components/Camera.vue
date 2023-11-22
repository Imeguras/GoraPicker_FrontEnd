<template lang="pug">
img(v-bind:src="image")
</template>
<script>



        /* 
        
        
        cordova.plugins.barcodeScanner.scan(
          (result) => {
            // Handle the scan result
            this.handleScanResult(result);
          },
          (error) => {
            // Handle scan error
            this.$data.text = "failed";
            console.error('QR Code scan failed:', error);
          }
        );*/


export default {
  name: 'Camera',
  components: {
    
  },
  mounted(){
    //this.scanQRCode(); 
    


  },
  //function to transition to Inventory Component
  //function to transition to Database
  methods:{
    cameraSuccess(imageData){
      this.image = "data:image/jpeg;base64," + imageData;

    },
    cameraError(string){
      console.log(string); 
    },
    snapshot() {
      navigator.camera.getPicture(this.cameraSuccess, this.cameraError, this.cameraOptions);
    }

  /*scanQRCode() {
      // Check if Cordova is available
      
  },
  handleScanResult(result) {
      if (!result.cancelled) {
        // Log the scanned text
        this.$data.text = result.text;
        console.log('Scanned QR Code:', result.text);

        // You can perform additional actions with the scanned text here
      } else {
        this.$data.text = "cancelled";
        console.log('QR Code scanning cancelled.');
      }
    },**/
  },
  data() {
    return {
      cameraOptions : {
          // Some common settings are 20, 50, and 100
          quality: 50,
          destinationType: Camera.DestinationType.FILE_URI,
          // In this app, dynamically set the picture source, Camera or photo gallery
          sourceType: srcType,
          encodingType: Camera.EncodingType.JPEG,
          mediaType: Camera.MediaType.PICTURE,
          allowEdit: true,
          correctOrientation: true
      },
      image: ""
    }
  },
  



}
</script>
