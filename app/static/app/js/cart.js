var updateBtns = document.getElementsByClassName('update-cart')

for (i=0;i<updateBtns.length;i++){
    updateBtns[i].addEventListener('click',function(){
        var productID = this.dataset.product
        var action = this.dataset.action
        console.log('producID: ', productID, 'action: ',action)
        console.log('user: ',user)
        if(user === "AnonymousUser"){
            console.log('user not logged in')
        }else {
            updateUserOrder(productID,action)
        }

    })
}

function updateUserOrder(productID,action){
    console.log('user logger in, success add')
    var url = '/update_item/'
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({ 'productID': productID, 'action': action })
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            console.log('data', data);
        })
        .catch((error) => {
            console.error('Fetch error:', error);
        });
    
}