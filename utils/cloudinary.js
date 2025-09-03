import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;





// enum IngredientType {vegetable, meat, fruit, grain, dairy, spice}
// enum ActionStatus {perfect, good, bad}

// enum ActionType {
//   chop,    
//   peel,    
//   stir,    
//   cut,     
//   marinate,
//   slice,   
//   blend,   
//   grind,   
//   pour,    
//   grate,   
//   sprinkle,
//   rinse,   
//   soak,    
//   season,  
//   whisk,   
//   crack,   
//   beat,    
//   wash,    
//   scoop,   
//   scramble,
//   clean
// }

// enum ToolType {
//   knife,        
//   chopper,      
//   cleaver,      
//   peeler,       
//   paringKnife,  
//   spoon,        
//   spatula,      
//   whisk,        
//   scissors,     
//   cutter,       
//   container,    
//   tongs,        
//   blender,      
//   foodProcessor,
//   grinder,      
//   mortarAndPestle,
//   mill,         
//   pitcher,      
//   ladle,        
//   grater,       
//   strainer,     
//   sink,         
//   shaker,       
//   hand,         
//   fork,         
//   mixer,   
//   measuringCup, 
//   mandolineSlicer, 
//   ziplocBag, 
//   cup,  
//   bowl,
//   zester,
//   breadSlicer
// }