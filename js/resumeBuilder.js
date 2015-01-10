var bio = {
    "name": "Mike Pule",
    "role": "System Engineer / Data Scientist",
    "contacts": {
        "mobile": "111-222-88888",
        "email": "your@email.here",
        "github": "your_github_id",
        "twitter": "your_twitter_id",
        "location": "San Francisco, CA"
    },
    "welcomeMessage": "Welcome to My Resume",
    "skills": [
        "MongoDB", "Python Programming", "Data Analysis", "Web Development"
    ],
    "biopic": "images/fry.jpg",
    "display": function() {
        // Header
        $('#header').prepend(HTMLheaderRole.replace("%data%", this.role));
        $('#header').prepend(HTMLheaderName.replace("%data%", this.name));
        
        // Contacts
        for (var contact in this.contacts) {
            var formatedContact = HTMLcontactGeneric
                    .replace("%contact%", contact)
                    .replace("%data%", this.contacts[contact]);
            
            // Top contacts
            $('#topContacts').append(formatedContact);
                    
            // Footer contacts
            $('#footerContacts').append(formatedContact);
        }
        
        // Bio picture
        $('#header').append(HTMLbioPic.replace("%data%", this.biopic));
        $('#header').append(HTMLWelcomeMsg.replace("%data%", this.welcomeMessage));
        
        // Skills
        $('#header').append(HTMLskillsStart);
        for (var idx in this.skills) {
            $("#skills").append(HTMLskills.replace("%data%", this.skills[idx]));
        }
        
        // Google map
        $('#mapDiv').append(googleMap);
    }
};

var education = {
    "schools": [ // Array of objects
        {
            "name": "Georgia Tech",
            "location": "Atlanta, GA",
            "degree": "MS",
            "majors": ["Software Engineering"],
            "dates": "2015 (in progress)",
            "url": "http://www.gatech.edu/"
        },
        {
            "name": "George Washington University",
            "location": "Washington, DC",
            "degree": "MS",
            "majors": [ "Engineering Management", "Concentration in Economics", "Finance, & Cost Engineering" ],
            "dates": "2009",
            "url": "http://www.gwu.edu/"
        },
        {
            "name": "University of Maryland",
            "location": "College Park, MD",
            "degree": "BS",
            "majors": ["Computer Engineering", "Business, Cost Estimating & Financial Management Level II Certificate"],
            "dates": 2006,
            "url": "http://www.umd.edu"
        }
    ],
    "onlineCourses": [ // Array of objects
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/ud804"
        },
        {
            "title": "Web Development",
            "school": "Udacity",
            "date": 2014,
            "url": "https://www.udacity.com/course/cs253"
        },
        {
            "title": "Data Analysis with R",
            "school": "Udacity",
            "date": 2015,
            "url": "https://www.udacity.com/course/ud651"
        },
    ],
    "display": function() {
        // Schools
        for (var idx in this.schools) {
            var school = this.schools[idx];
            
            // Construct a div element for a school
            var schoolDiv = $(HTMLschoolStart);
            
            // Show school's information
            schoolDiv.append(
                HTMLschoolName.replace("%data%", school.name) +
                HTMLschoolDegree.replace("%data%", school.degree));
            schoolDiv.append(HTMLschoolDates.replace("%data%", 
                school.dates));
            schoolDiv.append(HTMLschoolLocation.replace("%data%", 
                school.location));
            
            // List of majors
            for (var idx in school.majors) {
                schoolDiv.append(HTMLschoolMajor.replace("%data%", 
                    school.majors[idx]));
            }
            
            $('#education').append(schoolDiv);
        }
        
        // Online Courses
        $('#education').append(HTMLonlineClasses);
        
        for (var idx in this.onlineCourses) {
            var course = this.onlineCourses[idx];
            
            // Construct a div element for a course
            var courseDiv = $(HTMLschoolStart);
            
            // Show course's information
            courseDiv.append(
                HTMLonlineTitle.replace("%data%", course.title) +
                HTMLonlineSchool.replace("%data%", course.school));
            courseDiv.append(HTMLonlineDates.replace("%data%", 
                course.date));
            courseDiv.append(HTMLonlineURL.replace("%data%", 
                course.url));
                
            $('#education').append(courseDiv);
        }
    }
};

var work = {
    "jobs": [ // Array of objects
        {
            "employer": "ABC Inc.",
            "title": "Industrial Engineer",
            "location": "Houston, TX",
            "dates": "​July 2010 - Present",
            "description": "Drives the improvement of systematic processes while utilizing statistical analysis, design, planning, quality control, operations management, computer simulations, and problem solving techniques."
        },
        {
            "employer": "ZYX Corporation",
            "title": "It Consultant",
            "location": "CSpringfield, IL",
            "dates": "​June 2008 - July 2010",
            "description": "Owned accountability for measuring, analyzing, and driving testing of complex communication systems."
        }
    ],
    "display": function() {
        
        // Jobs list
        for (var idx in this.jobs) {
            var job = this.jobs[idx];
            
            // Construct a div element for a job
            var workDiv = $(HTMLworkStart);
            
            // Show job's information
            workDiv.append(
                HTMLworkEmployer.replace("%data%", job.employer) +
                HTMLworkTitle.replace("%data%", job.title));
            workDiv.append(HTMLworkDates.replace("%data%", job.dates));
            workDiv.append(HTMLworkLocation.replace("%data%", job.location));
            workDiv.append(HTMLworkDescription.replace("%data%", job.description));
                                                
            $('#workExperience').append(workDiv);
        }
    }
};

var projects = {
    "projects": [ // array of objects
        {
            "title": "Grapminder - Adults with HIV - Data Analysis",
            "dates": "June 2014 - July 2014",
            "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.",
            "images": ["images/project2a.png", "images/project2b.png"]
        },
        {
            "title": "Ray Tracer",
            "dates": "May 2014 - June 2014",
            "description": "Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.",
            "images": ["images/project1a.png", "images/project1b.png"]
        },
    ],
    "display": function() {
        // Projects list
        for (var idx in this.projects) {
            var project = this.projects[idx];
            
            // Construct a div element for a project
            var projectDiv = $(HTMLprojectStart);
            
            // Show project's information
            projectDiv.append(HTMLprojectTitle.replace("%data%", project.title));
            projectDiv.append(HTMLprojectDates.replace("%data%", project.dates));
            projectDiv.append(
                HTMLprojectDescription.replace("%data%", project.description));
            
            // Images
            for (var idx in project.images) {
                projectDiv.append(
                    HTMLprojectImage.replace("%data%", project.images[idx]));
            }
                                                
            $('#projects').append(projectDiv);
        }
    }
};

// Display all objects for the resume
function displayResume() {
    bio.display();
    education.display();
    work.display();
    projects.display();
}

// Call once to populate all the resume
displayResume();

// Add more interactivity
$(document).ready(function() {
    // click on a header of a section to collapse/expand its details
    $('div.collapsible > h2').click(function() {
        $(this).toggleClass("collapsed"); // change the header itself
        
        // The container div
        var parentDiv = $(this).parent();
        
        // hide all elements below the header
        $(this).nextAll().toggle(400, function() {
            // Set the minimal height for hiding the content
            // (this is a workaround in order to completely hide the map div 
            // because the map div has a fixed height)
            parentDiv.toggleClass("minimal-height");
        });
    });
});
