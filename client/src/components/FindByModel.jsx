import React from "react";
import { useState } from "react";
// import "../assets/images" 
const FindByModel=()=>{
    return (<>
        <div class="theHeroo">
        <div class="Title">Find car by model</div>
        <div class="PP"></div>
        <div class="TheCars">
        <div class="oneCar">
        <div class="Theimg">
              {/* <img src=".." alt="" /> */}
              <img src="/assets/images/poloSedan.jpg" alt="" />
              </div>
              <div class="type">Sedan</div>
              <button>Get articles</button>
              </div>
          <div class="oneCar">
            <div class="Theimg">
            <img src="../assets/images/jag.jpg" alt="" />
            </div>
            <div class="type">Coupe</div>
            <button>Get articles</button>
            </div>
          <div class="oneCar">
          <div class="Theimg">
          <img src="../assets/images/i20.jpg" alt="" />
          </div>
          <div class="type">hatchback</div>
          <button>Get articles</button>
          </div>
          
          <div class="oneCar">
          <div class="Theimg">
          <img src="../assets/images/clio.jpg" alt="" />
          </div>
          <div class="type">Cross Over</div>
          <button>Get articles</button>
          </div>
          <div class="oneCar">
          <div class="Theimg">
          <img src="../assets/images/rangeSuv.jpg" alt="" />
          </div>
          <div class="type">Suv</div>
          <button>Get articles</button>
          </div>
          
          <div class="oneCar">
          <div class="Theimg">
          <img src="../assets/images/offRoad.png" alt="" />
          </div>
          <div class="type">Off Road</div>
          <button>Get articles</button>
          </div>
          </div>
          </div>
          
          </>
          
          )
}
export default FindByModel;