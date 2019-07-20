function sym(...args) {

    let result = args.reduce( (a,b, args, obtener) => {

        console.log([...new Set(a)]);
        a = [...new Set(a)]
        b = [...new Set(b)]
        for(let i in a) {
           
            for(let x in b) {
                if (a[i] == b[x]) {
                  
                    b.splice(x, 1)
                    a.splice(i, 1, null)
                    
                } 
            }
        }
        b = b.concat(a);

        return b
    })
    result = [...new Set(result)];
    result = result.sort((a, b) => {
        return a - b;
    })
    result = result.filter(dato => {
        return dato != undefined;
    })
  
    return result;
  }
  
  sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);