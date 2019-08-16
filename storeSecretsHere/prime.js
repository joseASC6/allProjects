// for (let prime = 2; prime < 1001; prime++){
//     if(prime%2 == 0){
//         continue;
//         if(prime%3 == 0){
//             continue;
//             if(prime%5 == 0){
//                 continue;
//                 if(prime%7 == 0){
//                     continue;
                    
    
//             }
    
//         }
//     }
// }  else {
//     console.log(prime);
// }
//     }    


let prime = parseInt(process.argv[2]);
    if(prime%2 == 0){
    console.log('not a prime');
}
if(prime%3 == 0){
    console.log('not a prime');
}
if(prime%5 == 0){
    console.log('not a prime');
}
if(prime%7 == 0){
    console.log('not a prime');
}else {
    console.log(prime);
}    
