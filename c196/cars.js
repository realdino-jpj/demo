var timer = 0
var timer2 = 0

AFRAME.registerComponent("cars", {
    schema: {
      height: { type: "number", default: 2 },
      width: { type: "number", default: 2 },
      depth: { type: "number", default: 2 },
    },
    init: function () {
     
        
        
              setInterval( ()=>{
              var car = document.createElement("a-entity");
              car.setAttribute("id", "car");
            
              car.setAttribute("position",{x: -15, y: 0, z: -15});
      
              car.setAttribute("rotation",{x: 0, y: 90, z: 0});
      
              car.setAttribute("velocity",{x: 7, y: 0, z: 0});
              
              
              car.setAttribute("gltf-model", "./low_poly_small_car/scene.gltf")
        
              car.setAttribute("static-body", {});
      
              car.setAttribute("scale", {x: 0.7, y: 0.7, z: 0.7})
  
              car.addEventListener("collide",this.removeBox);

              var sceneEl = document.querySelector("#scene");

              
              sceneEl.appendChild(car)
              

             
    },2000)
               
    
               
                
              },
         
              
              removeBox: function(e){
                // original entity(bullet) 
          
                console.log(e.detail.target.el)
          
                //original entity which bullet touch
                console.log(e.detail.body.el)
                
                var element = e.detail.target.el
                var elementHit = e.detail.body.el
          
                if(elementHit.id.includes("car")){
                 elementHit.setAttribute("material",{
                  opacity: 0.6,
                  transparent: true
                 })
          
               //impulsive and point vector
               var impulse = new CANNON.Vec3(-2,2,1) 
               var worldPoint = new CANNON.Vec3().copy(
                 elementHit.getAttribute("position")
               
               )
               elementHit.body.applyImpulse(impulse,worldPoint)
          
                 element.removeEventListener("collide",this.removeBox)
                 var scene = document.querySelector("#scene")
                 scene.removeChild(element)
                 console.log("collision")
                }
              },

              
      
    })