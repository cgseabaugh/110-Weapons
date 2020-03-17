

function fetchCatalog(){
    console.log("Fetching catalog");

    $.ajax({
        type: 'GET',
        url: '/Catalog/GetCatalog',
        success: function(res){
            console.log("From server", res);

            // HOMEWORK: sort the weapons (res array) to be Cheapest first
            
            var sorted = [];
            sorted = res.sort( function(left, right) {
                if(left.price < right.price){
                    return -1;
                }
                else if(right.price < left.price){
                    return 1;
                }
            });
            

            for(var i=0; i<sortedWeapons.length; i++){
                var weapon = sortedWeapons[i];
                
                displayWeapon(weapon);
            }
        },
        error: function(details){
            console.log("Error:", details);
        }
    })
}

function sortByPrice(a, b) {
    if (a.price > b.price) {
        return 1;
    } else if (b.price > a.price) {
        return -1;
    } else {
        return 0;
    }
}

function displayWeapon(Weapon){
    var sntx =
    `<div class="row" id="item">
        <div class="col-8">
            <img id="itemImage" src='${Weapon.imageUrl}'>
            <div class="container-fluid" id="btnPrice">
                <button class="btn btn-primary" type="button" value="Input">Add To Cart</button>
                <label class="weaponPrice" id="price">$${Weapon.price}</label>
            </div>
        </div>
        <div class="col-4">
            <ul>
                <li><label class="weaponItems" id="name">${Weapon.name}</label></li>
                <li><label class="weaponItems" id="type"><p class="itemLabel">Type</p><p class="itemInfo">${Weapon.type}</p></label></li>
                <li><label class="weaponItems" id="damage"><p class="itemLabel">Damage</p><p class="itemInfo">${Weapon.damage}</p></label></li>
                <li><label class="weaponItems" id="requirement"><p class="itemLabel">Requirements</p><p class="itemInfo">${Weapon.requirements}</p></label></li>
                <li><label class="weaponItems" id="id"><p class="itemInfo">ID: ${Weapon.id}</p></label></li>
            </ul>
        </div>
        <div class="col-12">
            <p id="description">${Weapon.description}</p>
        </div>
    </div>
        
    </div>`

    var container = $("#catalog");

    container.append(sntx);
}

function init(){
    console.log("Catalog Page");

    fetchCatalog();
}

window.onload = init;

