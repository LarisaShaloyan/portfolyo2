$(".readMore-btn").on("click",function(){
  $(this).parent().toggleClass("showContent")
  let replaceText=$(this).parent().hasClass("showContent") ?"Read less":"View more"
  $(this).text(replaceText)
})


