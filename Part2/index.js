



$('#submit').on('click', (e)=>{
	e.preventDefault()
	const $ol = $("form ol")
	const $newLi = $(`<li> Title:${$('#movie').val()} Rateing:${$('#rating').val()}</li>`).append($('<button> delete me </button> on clicn').click( function(e){
	   e.preventDefault();
	  let p = e.target.parentNode;
	  p.remove();
	//    console.log(p);
	//    $(e.target).parent().remove();
	}
		)
	)
	$ol.append($newLi)
})
