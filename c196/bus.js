var timer = 0
var timer2 = 0

AFRAME.registerComponent("bus", {
    schema: {
      height: { type: "number", default: 2 },
      width: { type: "number", default: 2 },
      depth: { type: "number", default: 2 },
    },
    init: function () {
     
        
        
              setInterval( ()=>{
              var bus = document.createElement("a-entity");
              bus.setAttribute("id", "bus");
            
              bus.setAttribute("position",{x: -15, y: 0, z: -15});
      
              bus.setAttribute("rotation",{x: 0, y: 90, z: 0});
      
              bus.setAttribute("velocity",{x: 7, y: 0, z: 0});
              
              
              bus.setAttribute("gltf-model", "./low_poly_bus_with_interior/scene.gltf")
        
              bus.setAttribute("static-body", {});
      
              bus.setAttribute("scale", {x: 0.7, y: 0.7, z: 0.7})
  
              bus.addEventListener("collide",this.removeBox);

              var sceneEl = document.querySelector("#scene");

              
              sceneEl.appendChild(bus)
              

             
    },2000)
               
    
               
                
              },
         
              
              removeBox: function(e){
                // original entity(bullet) 
          
                console.log(e.detail.target.el)
          
                //original entity which bullet touch
                console.log(e.detail.body.el)
                
                var element = e.detail.target.el
                var elementHit = e.detail.body.el
          
                if(elementHit.id.includes("bus")){
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