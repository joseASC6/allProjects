let loops = ['pizza', 'hotdogs', 'fruit loops'];
for (let i = 0; i<loops.length; i++){
    console.log(loops[i]);
}
loops.push('bagel', 'toast');
loops.push('bagel', 'toast');
for ( const item of loops ){
       console.log(item);
} 