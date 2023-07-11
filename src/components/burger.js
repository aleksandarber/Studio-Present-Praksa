const Burger = () => {
    let opened = false
    return (
        <img src="images/menu.png" alt="logo" id="burger" onClick={()=>{
    
            if(opened) {
                document.getElementById("header").style.height = "80px";
                document.getElementById("logo-lang").style.height = "100%";
                document.getElementById("menuUp").style.height = "0%";
        
                document.getElementById("menuUp").style.display = "none";
        
                opened = false
            }else{
                document.getElementById("header").style.height = "60vh";
                document.getElementById("logo-lang").style.height = "10%";
                document.getElementById("menuUp").style.height = "90%";
        
                document.getElementById("menuUp").style.display = "block";
        
                opened = true
        }
        }}/>      
    );
};

export default Burger;