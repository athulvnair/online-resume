// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

//var name="ATHUL V NAIR";
//var role="Front end web developer";
// var formattedName = HTMLheaderName.replace("%data%",bio.name);
//var formattedRole = HTMLheaderRole.replace("%data%",role);
//$("#header").prepend(formattedName);
//$("#header").append(formattedRole); 
var bio = {
    "name": "ATHUL V NAIR",
    "role": "Web Developer",
    "contactInfo": {
        "email": "athulvnair@yahoo.com",
        "mobile": "8129046436",
        "location": "Kerala",
        "github": "athulvnair"
    },
    "welcomeMessage": "Technical aspirant willing to test my knowledge in the field to benefit the employer, myself and the society.",
    "skills": ["coordination", "programming", "Team player"],
    "biopic": "images\\IMG_6071-1.jpg"
};

var work = {
    "jobs": [{
        "employer": "Nil",
        "title": "Student",
        "location": "nil",
        "dates": "-",
        "description": "-"
    }]
};
var education = {
    "schools": [{
            "name": "Bishop Moore Vidyapith",
            "dates": "2003-2013",
            "degree": "matriculation",
            "location": "Cherthala",
            "majors": []
        },
        {
            "name": "St.Joseph's College of Engineering & Technology",
            "dates": "2013-2017",
            "location": "Palai",
            "degree": "B.Tech",
            "majors": ["Electrical & Electronics Engineering"]
        }
    ],
    "onlineCourses": [{
        "title": "Front end web development nanodegree",
        "dates": "June 2017- November 2017",
        "school": "Udacity"
    }]
};
//$("#main").append(work.position);
//$("#main").append(education["name"]);
var project = {
    "projects": [{
            "title": "Scope of energy conservation at BPCL KR",
            "dates": "2017",
            "teamMembers": ["Pranav", "Bibin"],
            "description": "A comprehensive analysis on improving the energy conservation at the maintenance shop and warehouse at BPCL-KR using alternate lighting, ventilation and efficient design."
        },
        {
            "title": "Password based door lock system using 8051 microcontroller",
            "dates": "2016",
            "teamMembers": ["Ashish", "Bibin", "Athira"],
            "description": "A simple security lock system based on the 8051 microcontroller which triggers mechanical relay based on the input given by the user."
        }
    ]
};

function displayBio() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").append(formattedName);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").append(formattedRole);

    var mySpan = "<span id='mySpan'><ul id='contacts' class='spanU'>  </ul></span></br></br>";
    $("#header").append(mySpan);

    $("#contacts").append(HTMLcontactGeneric);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
    $(".flex-item:last").append(formattedMobile);
    var formattedmail = HTMLemail.replace("%data%", bio.contactInfo.email);
    $(".flex-item:last").append(formattedmail);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
    $(".flex-item:last").append(formattedgithub);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
    $(".flex-item:last").append(formattedlocation);

    var formattedimage = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedimage);

    var formattedmessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedmessage);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills-h3").append(formattedSkill);
         formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills-h3").append(formattedSkill);
         formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills-h3").append(formattedSkill);
    }
}

function displayWork() {
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        $(".work-entry:last").append(formattedEmployer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(formattedTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}


function displayEducation() {
    for (var edu in education.schools) {
        $("#education").append(HTMLschoolStart);
        var schoolName = HTMLschoolName.replace("%data%", education.schools[edu].name);
        $(".education-entry:last").append(schoolName);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);
        $(".education-entry:last").append(formattedDegree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);
        $(".education-entry:last").append(formattedDates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[edu].location);
        $(".education-entry:last").append(formattedLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[edu].majors);
        $(".education-entry:last").append(formattedMajor);
    }
    var newDiv = "<div id='newDiv' class='education-entry'></div>";

    for ( edu in education.onlineCourses) {
        $("#education").append(HTMLonlineClasses);
        $('#education').append(newDiv);
        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[edu].title);
        $("#newDiv").append(formattedTitle);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[edu].school);
        $("#newDiv").append(formattedSchool);
         formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[edu].dates);
        $("#newDiv").append(formattedDates);
    }

}

$(document).click(function(loc) {

    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});

// function inName(name) {
//	name =name.trim().split(" ");
//	console.log(name);
//	name[1] = name[1].toUpperCase();
//	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//	return name[0] +" "+ name[1];
//}
//$("#main").append(internationalizeButton);   

function displayProject() {
    for (var pro in project.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.projects[pro].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", project.projects[pro].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.projects[pro].description);
        $(".project-entry:last").append(formattedDescription);
    }
}


function displayFooter() {
    var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
    $("#footerContacts").append(formattedMobile);
    var formattedmail = HTMLemail.replace("%data%", bio.contactInfo.email);
    $("#footerContacts").append(formattedmail);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
    $("#footerContacts").append(formattedgithub);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contactInfo.location);
    $("#footerContacts").append(formattedlocation);
}

function display() {
    displayBio();
    displayWork();
    displayProject();
    displayEducation();
    displayFooter();
    $("#mapDiv").append(googleMap);
}

var disp = function() {
    display();
};

disp();
