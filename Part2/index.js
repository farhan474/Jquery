



$('#submit').on('click', (e)=>{
	e.preventDefault()
	const $ol = $("form ol")
	const $newLi = $(`<li> Title:${$('#movie').val()} Rateing:${$('#rating').val()}</li>`).append($('<button> delete me </button>').on('click',(e)=> {e.target.parent().remove()}))
	$ol.append($newLi)
})