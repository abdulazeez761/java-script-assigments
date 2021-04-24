//the second assigment (Day Switching)
const day = 'tuesday';
switch (day) {
    case 'sunday':
        console.log('today is the deadline for the assignments')
        break;
    case 'monday':
        console.log('you have  one extra week to finish your assignments ');
        break;
    case 'tuesday':
    console.log('did you finishe your assignments?')
        let A = 'yes';
         if (A === 'yes'){
             console.log('Upload the file on GitHub and send me the link')
         } else{
             console.log('you need to put more effort')
         };
         break;
    case 'wednesday':
        console.log('if you need helpe aske for it')
        break;
        case 'thursday':
            console.log('the extra week is finished')
         default: 
         console.log('you should finishe the assigments')
        }