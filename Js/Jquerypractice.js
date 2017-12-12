$('#submit').click(function(){
alert("text: "+$('.demo').text());
});
$('#html').click(function(){
alert("html: "+$('.demo').html());
});
$('#value').click(function(){
alert("entered value is: "+$('.input').val());
});
$('#href').click(function(){
alert($('.hr').attr("href"));
});

				
						/*setting value*/
						$('#set').click(function(){
						 alert("text: "+$('.set').text("chandana"));
						
						});
						
						$('#set1').click(function(){
						$('.set1').html("<b> google </b>");
						});
								
						$('#set3').click(function(){
						$('.set3').val("chandana@gmail,com");
						});
						
						$('#set4').click(function(){
						alert($('.gref').attr("href","www.learningjquery.com"));
						});
						
						
						<!-- add elment Jquery-->
						$('#append').click(function(){
						$('p.append').append("New text").css("color","green");
						});
						
						$('#prepend').click(function(){
						$('p.prepend').prepend("hey!!!");
						});
						
						$('#before').click(function(){
						$('.container').before("<i> before</i>");
						});
						
							$('#after').click(function(){
						$('.container').after("<i> After</i>");
						});
						
						 <!-- Remove element -->
						 $('#remove').click(function(){
						 $('.para').remove();
						 });
						 
						 $("#empty").click(function(){
						 $(".para").empty();
						 });
						 
						 $(document).ready(function(){
							$("p#o").click(function(){
								 $('p#o').toggleClass('important');
							});
						  });
						  
						  <!-- accordion-->
						   $(".accordion").on("click", ".hi", function() {
 	                      $(this).toggleClass("active").next().slideToggle();
                                });
						 
						 <!-- Tabs -->
						 $('.tab-list').on("click",'.tab',function(e){
						 e.preventDefault();
						 		 $('.tab').removeClass("active");
						 $('.tab-content').removeClass("show");
						 $(this).addClass("active");
	                     $($(this).attr("href")).addClass("show");
						 });
						
						<!--form validation-->
						$('.submit').on('click',function(e){
						var isValid = true;
						$('.valid input[type="text"],.valid input[type="file"]').each(function(){
						if($(this).val() ===''){
						isValid = false;
						$(this).parent('.valid').find('.name,.fileupload').addClass("has");
						
		                      					}
						else{
							$(this).parent('.valid').find('.name').removeClass("has");
							alert($('.name').val());
						}
						});
						    alert(isValid)
                            if (isValid == false) {
                                e.preventDefault();
                            } else
                            {
                            // statement of filtering
                            }
						});
						$('.valid input[type="text"]').on('click',function(){
						$(this).removeClass("has");
						});
						
						// Alerting Id//
						$(function(){
                      $('input[type="text"]').click(function(){
                         alert(this.id);
                       });
                     });
					 
					 $(function(){
$('p').click(function(){
alert(this.id);
});	
});
	

	$(document).ready(function() {
// Datepicker Popups calender to Choose date.
$(function(){
$( “#datepicker” ).datepicker(changeYear: true,changeMonth: true);
//Pass the user selected date format
$( “#format” ).change(function() {
$( “#datepicker” ).datepicker( “option”, “dateFormat”, $(this).val() );
});
});
$(".datepicker").datepicker();
});