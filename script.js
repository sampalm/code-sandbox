$(document).ready(function(){
    let panel;
    let numberOfActivePanels;

    function updateOutput(){
        $("iframe").contents().find("html").html(`
            <html>
                <head>
                    <style type="text/css">${$("#cssPanel").val()}</style>
                </head>
                <body>
                    ${$("#htmlPanel").val()}
                </body>
            </html>
        `);

        document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
    }

    updateOutput();

    $(".toggleButton").hover(function(){
        $(this).addClass("highlightedButton");
    }, function(){
        $(this).removeClass("highlightedButton");
    });

    $(".toggleButton").click(function(){
        $(this).toggleClass("active");
        panel = $(this).attr("id") + "Panel";
        $(`#${panel}`).toggleClass("hidden");
        numberOfActivePanels = 4 - $('.hidden').length;
        $(".panel").width(($(window).width() / numberOfActivePanels) - 10);
    });

    $(".panel").height($(window).height() - $("#header").height() - 20);
    $(".panel").width(($(window).width() / 2) - 10);

    /* UPDATE IFRAME CODE */
    $("textarea").on("change keyup paste", function(){
        // CODE
        updateOutput();
    });
    
});