    var quicksort = function(arr) {
        if (arr.length <= 1) { return arr; }
        var pivotIndex = Math.floor(arr.length / 2);  
        var pivot = arr.splice(pivotIndex, 1)[0];
        var left = [];
        var right = [];
        for(let a=0;a<arr.length;a++){
            if(arr[a]+''+pivot+''< pivot+''+arr[a]+''){
                left.push(arr[a])
            }else{
                right.push(arr[a])
            }
        }
        return quicksort(left).concat([pivot], quicksort(right));
    };