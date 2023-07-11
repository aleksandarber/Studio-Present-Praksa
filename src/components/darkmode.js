const DarkMode = () => {
    let darkMode = false;
    return(
        <img src="images/night-mode.png" alt="logo" id="darkmode" onClick={()=>{
            if(!darkMode){
                document.body.classList.toggle("dark-mode");
            }
            else {
                document.body.classList.remove("dark-mode");
            }
        }}/>
    );
}

export default DarkMode;