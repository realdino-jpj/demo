AFRAME.registerComponent("box", {
    schema: {
      height: { type: "number", default: 2 },
      width: { type: "number", default: 2 },
      depth: { type: "number", default: 2 },
    },
    init: function () {
     
        
        



                var box = document.createElement("a-entity");
                box.setAttribute("id", "wall");
              
                box.setAttribute("position",{x: 20, y: 0, z: -15});
        
                box.setAttribute("rotation",{x: 0, y: 90, z: 0});
        
               
                
                
                box.setAttribute("gltf-model", "./low_poly_small_car/scene.gltf")
          
                box.setAttribute("static-body", {});
        
                box.setAttribute("scale", {x: 0.7, y: 0.7, z: 0.7})
        
        
                box.addEventListener("collide", this.removeBox);

        
                var sceneEl = document.querySelector("#scene");
                sceneEl.appendChild(box)

                
              
              },
         
              removeBox: function(e){
                // original entity(bullet) 
          
                var car = document.querySelector("#car")
                var carPos = car.getWorldPosition()

                
               var boxPos=  box.getAttribute("position",{x})

               if(car.position.x-box.position.x < 10){
                document.removeElement(box)
               }
              },
          
      
    })