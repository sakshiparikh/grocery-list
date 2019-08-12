$(document).ready(function(){
    
    $('#AddItems').on('submit',function(e) {
        var items = $(".list").val();
        var notes = $("textarea").val();

        if(items.length > 0){
            var addedItem = '<div class="item"><input type="checkbox"/><span class="list-item">'+items+' </span><img src="images/edit.png" class="edit-icon" title="Edit" /><img src="images/delete.png" class="delete-icon" title="Delete" /><div class="hide notes">'+notes+'</div></div>'
            $(".shoppingList").append(addedItem);
            $(".list").val('');
            $("textarea").val('');

           
            $(document).on("click", ".item" , function() {
                var notesBox = $(this).find(".notes");
                if(notesBox.text().length > 0){
                    notesBox.toggleClass("hide");
                }
                else{
                    return false;
                }
            });
        }
        e.preventDefault();
    })
    $(document).on("click", ".delete-icon" , function() {
        if (confirm("Are you sure?")) {
            $(this).parent().hide("slow", function () {
                $(this).remove();
            })
        }
        return false;
    });
    $(document).on("click", ".edit-icon" , function() {
        var oldValue = $(this).parent().find(".list-item").text();
        $(this).parent().replaceWith('<form class="edit-form"><input class="edit-input" type="text" placeholder="edit.." autofocus></input><button class="save secondary-btn" type="submit">Save</button></form>');  
        $(".edit-form").submit(function(event){
            var editList = $('.edit-input').val();
            if(editList!= ''){
                $(".edit-form").replaceWith('<div class="item"><input type="checkbox"/><span class="list-item">'+editList+' </span><img src="images/edit.png" class="edit-icon" title="Edit"/><img src="images/delete.png" class="delete-icon" title="Delete"/></div>');
            }  
            else{
                $(".edit-form").replaceWith('<div class="item"><input type="checkbox"/><span class="list-item">'+oldValue+' </span><img src="images/edit.png" class="edit-icon" title="Edit"/><img src="images/delete.png" class="delete-icon" title="Delete"/></div>');
            }
            event.preventDefault();
        })

    });
    $(".shoppingList").on("click","input:checkbox",function () {
        var notes = $(this).parent().find(".notes").text();

        var oldValue = $(this).parent().find(".list-item").text();
        var addedItem = '<div class="item"><input type="checkbox"/><span class="list-item">'+oldValue+' </span><img src="images/delete.png" class="delete-icon" title="Delete" /><div class="hide notes">'+notes+'</div></div>'

        if(this.checked){
            $(this).parent().hide("slow", function () {
                $(this).remove();
            })
            $(".purchasedItems").append(addedItem);
        }
    });
    $(".purchasedItems").on("click","input:checkbox",function () {
        var oldValue = $(this).parent().find(".list-item").text();
        var notes = $(this).parent().find(".notes").text();

        var addedItem = '<div class="item"><input type="checkbox"/><span class="list-item">'+oldValue+' </span><img src="images/edit.png" class="edit-icon" title="Edit" /><img src="images/delete.png" class="delete-icon" title="Delete" /><div class="hide notes">'+notes+'</div></div>'

        if(this.checked){
            $(this).parent().hide("slow", function () {
                $(this).remove();
            })
            $(".shoppingList").append(addedItem);
        }
    });
   
})

