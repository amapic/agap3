

export default function App(){
	function changeColor(e){
		// let y=document.getElementsByClassName("light")[0]
		let y=e.target.children[0]
		y.classList.remove("petit")
		y.classList.add("grand")
		// document.getElementsByClassName("light")[0].style.height="300px";
		// alert(e)
	}
	
	function changeColor2(e){
		// let y=document.getElementsByClassName("light")[0]
		let y=e.target.children[0]
		y.classList.remove("grand")
		y.classList.add("petit")
		// document.getElementsByClassName("light")[0].style.height="300px";
		// alert(e.target)
	}
	return(<>
	<div className="conteneur">AA</div>
	<div className="light-wrap">
  <div id="container" onClick={changeColor} onMouseLeave={changeColor2}>

    <div id="green" className="light petit"></div>
  </div>
</div>
</>
)}