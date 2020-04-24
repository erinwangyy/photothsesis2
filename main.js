function viewedAC(){
document.querySelector("#AC").style.color="blue";

}
function viewedBC(){
    document.querySelector("#BC").style.color="blue";
    
    }
function viewedBU(){
        document.querySelector("#BU").style.color="blue";    
        }
function viewedCCA(){
        document.querySelector("#CCA").style.color="blue";    
        }
function viewedCC(){
        document.querySelector("#CC").style.color="blue";    
        }
function viewedCU(){
        document.querySelector("#CU").style.color="blue";    
        }
function viewedCSU(){
        document.querySelector("#CSU").style.color="blue";    
        }
function viewedFIT(){
        document.querySelector("#FIT").style.color="blue";    
        }
function viewedGSY(){
        document.querySelector("#GSY").style.color="blue";    
        }
function viewedHCC(){
        document.querySelector("#HCC").style.color="blue";    
        }
function viewedI(){
        document.querySelector("#I").style.color="blue";    
        }
function viewedL(){
        document.querySelector("#L").style.color="blue";    
        }
function viewedMC(){
        document.querySelector("#MC").style.color="blue";    
        }
function viewedMA(){
        document.querySelector("#MA").style.color="blue";    
        }
function viewedMICA(){
        document.querySelector("#MICA").style.color="blue";    
        }
function viewedNMU(){
        document.querySelector("#NMU").style.color="blue";    
        }
function viewedNYU(){
        document.querySelector("#NYU").style.color="blue";    
        }
function viewedOC(){
        document.querySelector("#OC").style.color="blue";    
        }
function viewedPC(){
        document.querySelector("#PC").style.color="blue";    
        }
function viewedPS(){
        document.querySelector("#PS").style.color="blue";    
        }
function viewedPRATT(){
        document.querySelector("#PRATT").style.color="blue";    
        }
function viewedPR(){
        document.querySelector("#PR").style.color="blue";    
        }
function viewedRISD(){
        document.querySelector("#RISD").style.color="blue";    
        }
function viewedRIT(){
        document.querySelector("#RIT").style.color="blue";    
        }
function viewedRC(){
        document.querySelector("#RC").style.color="blue";    
        }
function viewedSAIC(){
        document.querySelector("#SAIC").style.color="blue";    
        }
function viewedSCU(){
        document.querySelector("#SCU").style.color="blue";    
        }
function viewedSMFA(){
        document.querySelector("#SMFA").style.color="blue";    
        }
function viewedSVA(){
        document.querySelector("#SVA").style.color="blue";    
        }
function viewedUCLA(){
        document.querySelector("#UCLA").style.color="blue";    
        }
function viewedUU(){
        document.querySelector("#UU").style.color="blue";    
        }
function viewedUA(){
        document.querySelector("#UA").style.color="blue";    
        }
function viewedUG(){
        document.querySelector("#UG").style.color="blue";    
        }
function viewedUI(){
        document.querySelector("#UI").style.color="blue";    
        }
function viewedUK(){
        document.querySelector("#UK").style.color="blue";    
        }
function viewedUM(){
        document.querySelector("#UM").style.color="blue";    
        }
function viewedUT(){
        document.querySelector("#UT").style.color="blue";    
        }
function viewedUP(){
        document.querySelector("#UP").style.color="blue";    
        }
function viewedVCU(){
        document.querySelector("#VCU").style.color="blue";    
        }
function viewedYA(){
        document.querySelector("#YA").style.color="blue";    
        }



 function cursor(){
                var x= event.pageX;
                var y=event.pageY;
                var cursor=document.querySelector(".cursor");
                console.log(x);

cursor.style.top=y+"px";
cursor.style.left=x+"px";



}
// function hover(){
// // document.querySelector(".cursor").style.opacity=100;
// // document.querySelector(".cursor").style.color="grey";



// }
// function unhover(){
//         // document.querySelector(".cursor").style.opacity=0;

//         document.querySelector(".cursor").style.color="black";
        
//         }

function show(){
       
        setTimeout(function(){ 
        document.querySelector(".introduction").style.display="block"; }, 100);
}

function unshow(){
       
        setTimeout(function(){  document.querySelector(".title").style.color="black";
        document.querySelector(".introduction").style.display="none"; }, 800);
}
function start(){
        document.querySelector(".loading").style.display="none"
        document.querySelector("body").style.overflow="scroll"
}