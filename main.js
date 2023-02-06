const btn_navbar=document.getElementById("btn_navbar");
const sidebar=document.getElementById("sidebar");

btn_navbar.onclick=()=>{
  if(!sidebar.classList.contains("sidebar_show")){
    sidebar.classList.add("sidebar_show")
   

  }else{
    sidebar.classList.remove("sidebar_show")
  }
}
