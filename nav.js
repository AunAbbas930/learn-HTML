//Script for Navbar / Menu

var menu = true;

function toggleMenu()
    {
        if(menu)
        {
            menu = false;
            menuLesson = true;
            document.querySelector("#menu").style.visibility = "visible";
        }
        else
        {
            menu = true;
            menuLesson = true;
            document.querySelector("#menu").style.visibility = "hidden";
            document.querySelector("#menuLesson").style.visibility = "hidden";
        }
    }


//Script for Menu > Lessons

function openLesson()
    {
        document.querySelector("#menuLesson").style.visibility = "visible";
    }

function closeLesson()
    {
        document.querySelector("#menuLesson").style.visibility = "hidden";
    }