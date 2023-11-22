<template>
<div>
  <div v-on:click="transitInventory($event)">
    <Card style="width: 25em">
        <template #title>Inventory</template>
        <template #content>
            

        </template>
    </Card>
  </div>
  <div v-on:click="transitInventory($event)">
    <Card  style="width: 25em">
        <template #title>Database</template>
        <template #content>
        

        </template>
    </Card>
  </div>
  <div v-on:click="transitCamera()">
    <Card  style="width: 25em">
        <template #title>Camera</template>
        <template #content>
        

        </template>
    </Card>
  </div>
</div>
</template>

<script>
import Card from "primevue/card"
//vue router
export default {

  name: 'LandingPage',
  components: {
    Card
  },
  //function to transition to Inventory Component
  //function to transition to Database
  methods:{
    transitInventory: function (event){
      console.log(event.currentTarget.id); 
    }, 
    transitCamera: function(){
      //goto /Camera vue router
      this.$router.push({ name: 'Camera' })
    }
  },
  data() {
    return {
      
    }
  },
  



}
</script>
