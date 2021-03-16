function googlePress(v){
    let val = v.value.replace(' ', '+')
    if (event.key === 'Enter'){
        window.open(`https://www.google.com/search?q=${val}`, '__blank');
        v.value = ''
    }
}