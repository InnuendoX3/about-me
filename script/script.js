$(document).ready(function() {

   let learning = [
      "HTML",
      "CSS",
      "JavaScript",
      "NodeJS",
      "React",
      "Git",
      "MongoDB",
      "Bootstrap"
   ];

   // Do effects on each learning item (zoom // show name) Infinite loop.
   function infinite() {
      $.each(learning, function (index, value) {
         setTimeout(writeList, index * 1000);
         function writeList() {
            $("#learning div img").removeClass("hooover");
            $("#learning-here").text(value).hide().fadeIn("slow");
            $("#log-" + index).addClass("hooover");
         }
         if (index == learning.length - 1) {
            setTimeout(infinite, (index + 1) * 1000);
         }
      });
   }
   infinite();
   
});