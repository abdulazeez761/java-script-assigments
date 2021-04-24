//Assignment 5 Home Security
//a key to check if he has the correct key
function key(_check = true){
   if (_check === true){
       return  true;
   }else {
       return false;
   }
}
key();
//a camera to check if he is Mohammad
   function person(_check = 'Mohammad'){
       if (_check === 'Mohammad'){
           return true
       } else {
           return false
       }
   }
   person()
   function security(_keyVar = true, _nameVar = true){
       if (_keyVar && _nameVar === true){
           return 'Welcome';
       }  else {
          return 'You cant access';
       }
   } security();
    const result = security(key(true), person('Mohammad'))
alert (result);
