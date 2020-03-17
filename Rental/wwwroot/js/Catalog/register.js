

function Weapon(name, type, damage, requirements, price, description, imageurl){
    this.name = name;
    this.type = type;
    this.damage = damage;
    this.requirements = requirements;
    this.price = price;
    this.description = description;
    this.imageurl = imageurl;
}

function clearForm(){
    $("#wname").val("");
    $("#wtype").val("");
    $("#wdamage").val("");
    $("#wrequirements").val("");
    $("#wprice").val("");
    $("#wdescription").val("");
    $("#wimageurl").val("");
}

function saveWeapon(){
    var name = $("#wname").val();
    var type;
    var radios = document.getElementsByName('optradio');
    if(radios = "1") {
        type = "Trick Weapon"
    } else if (radios = "2") {
        type = "Fire Arm"
    } else {
        type = "Hunter Tool"
    };
    var damageType
    var selectList = document.getElementById("wdamagetype");
    if(selectList = "1") {
        damageType = "Physical";
    } else if (selectList = "2") {
        damageType = "Blood"
    } else if (selectedList = "3") {
        damageType = "Arcane"
    } else if (selectedList = "4") {
        damageType = "Fire"
    } else {
        damageType = "Bolt"
    }
    var damagePoints = $("#wdamage").val();
    var damage = damagePoints + " " + damageType;
    var requirements = $("#wrequirements").val();
    var price = $("#wprice").val();
    var description = $("#wdescription").val();
    var imageurl = $("#wimageurl").val();

    var theWeapon = new Weapon(name, type, damage, requirements, price, description, imageurl);
    console.log(theWeapon);
    var jsonString = JSON.stringify(theWeapon);

    $.ajax({
        url: '/catalog/saveWeapon',
        type: 'POST',
        data: JSON.stringify(theWeapon),
        contentType: "application/json",
        success: function(response){
            console.log("Server says ", response);
            clearForm();
        },
        error: function(errorDetails){
            console.log("Error", errorDetails);
        }
    });
}

function init(){
    console.log("Register Weapon Page!");

    $("#btnSave").click(saveWeapon);
}

window.onload = init;