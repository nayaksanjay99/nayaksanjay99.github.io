
projects_animated=false

function setMenuScroll() {
    $('.menu_item').on('click', function (event) {
        var id = $(this).attr('href').replace('#', '')
        var position = $('#' + id).offset().top - 20;
        $('html, body').animate({ scrollTop: position }, 500);
        // var menuitem = "." + id + "_link"
        // $('.menu_item').removeClass('active');
        // $(menuitem).addClass('active');
        event.preventDefault();
    });
}

function gist_left_to_right(g1, offset) {
    if (g1.className.indexOf('leftToRight') === -1 && offset < 0) {
        g1.classList.add('leftToRight');             //remove
        setTimeout(function () {
            document.querySelector('.g2').classList.add('leftToRight')
            setTimeout(function () {
                document.querySelector('.g3').classList.add('leftToRight')
                setTimeout(function () {
                    document.querySelector('.g4').classList.add('leftToRight')
                }, 500)
            }, 500)
        }, 500)
        return;
    }
}

var windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

var g1 = document.querySelector('.g1')
offset = g1.getBoundingClientRect().top - windowHeight;
if (g1.className.indexOf('leftToRight') === -1 && offset < 0)
    gist_left_to_right(g1, offset)

window.onscroll = function () {
    if (document.getElementById("contact").getBoundingClientRect().top < 200) {
        $('a').removeClass('active');
        $("[href=\"#contact\"]").addClass('active');
    } else if (document.getElementById("skills").getBoundingClientRect().top < 200) {
        $('a').removeClass('active');
        $("[href=\"#skills\"]").addClass('active');
    } else if (document.getElementById("projects").getBoundingClientRect().top < 200) {
        $('a').removeClass('active');
        $("[href=\"#projects\"]").addClass('active');
    } else {
        $('a').removeClass('active');
        $("[href=\"#home\"]").addClass('active');
    }

    if(document.getElementById("projects").getBoundingClientRect().top > 10)
        callAnimatorProj()

    if(document.getElementById("skills").getBoundingClientRect().top > 10&& projects_animated==true)
        callAnimatorSkills()

    var g1 = document.querySelector('.g1'),
        offset = g1.getBoundingClientRect().top - windowHeight;

    gist_left_to_right(g1, offset);

    //   if (gists.className.indexOf('leftToRight') === -1) {
    //   	gists.classList.add('leftToRight');
    //   }
}

setMenuScroll();

callAnimatorProj = function () {
    setTimeout(() => {
        document.getElementById('card1').style.display = 'block';
        setTimeout(() => {
            document.getElementById('card2').style.display='block';
            setTimeout(() => {
                document.getElementById('card3').style.display='block';
                setTimeout(() => {
                    document.getElementById('card4').style.display='block';
                    setTimeout(() => {
                        document.getElementById('card5').style.display='block';
                        setTimeout(() => {
                            document.getElementById('card6').style.display='block';
                            setTimeout(()=>{
                                projects_animated=true
                            },500)
                        }, 200);
                    }, 200);
                }, 200);
            }, 200);
        }, 200);
    }, 200);
}

callAnimatorSkills = function () {
    setTimeout(() => {
        document.getElementById('cardA').style.display = 'block';
        setTimeout(() => {
            document.getElementById('cardB').style.display='block';
            setTimeout(() => {
                document.getElementById('cardC').style.display='block';
            }, 200);
        }, 200);
    }, 200);
}

// $(document).ready(function () {
    // var linkArr=['home','projects','skills','contact']
    // $("div").mouseover(function () {
    //     var id = $(this).attr('id');
    //     if(linkArr.indexOf(id)!=-1){
    //         console.log(id)
    //         $('a').removeClass('active');
    //         $("[href=\"#" + id + "\"]").addClass('active');
    //     }
    // });


// })