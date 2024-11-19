// Even Sized string count
function evenSizedStr(str){
    const size=str.length;
    console.log(str,size);
    if(size%2===0){
        console.log('Even Number')
        return true
    }

    console.log('Odd Number');
    return false
}

evenSizedStr('Dhaka');
evenSizedStr('Asifa Jahan Safa');
evenSizedStr('Allah')


// doDoubleTriple
function doDoubleTriple(number,boolean){
    // console.log(number,boolean)
    if(boolean===true){
        const result=number*2;
        // console.log(result);
        return true
    }else{
        const result=number*3;
        // console.log(result);
        return false
    }
}

doDoubleTriple(5,true);
doDoubleTriple(5,false)


// doDoubleTriple
function doDouble(num,boolean){
    // console.log(num,boolean);
 if(boolean){
    const result=num*2;
    console.log(result);
    return result
 } else{
    const result=num*3;
    console.log(result);
    return result
 }

}

doDouble(15,true);
doDouble(31,true);
doDouble(31,false)