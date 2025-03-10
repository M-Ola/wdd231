
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-links');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});








const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]
 







function filterCourses(subject) {
    const courseList = document.getElementById('courseList');
    courseList.innerHTML = '';

    // Filter courses by category ('all' shows all courses)
    const filteredCourses = subject === 'ALL'
        ? courses
        : courses.filter(course => course.subject === subject);

    let totalCompletedCredits = 0;
    let totalUncompletedCredits = 0;

    // Create and style each course button
    filteredCourses.forEach(course => {
        const courseButton = document.createElement('button');
        courseButton.classList.add('course-button');

        // Append check mark for completed courses
        if (course.completed) {
            courseButton.textContent = `${course.subject} ${course.number} ✓`;
            courseButton.classList.add('completed');
            totalCompletedCredits += course.credits;
        } else {
            courseButton.textContent = `${course.title}  ${course.number}`;
            courseButton.classList.add('uncompleted');
            totalUncompletedCredits += course.credits;
        }

        // All buttons are clickable
        courseButton.onclick = () => alert(`${course.subject} - ${course.credits} Credits`);
        courseList.appendChild(courseButton);
    });

    // Calculate the combined total credits
    const grandTotalCredits = totalCompletedCredits + totalUncompletedCredits;

    // Create a totals summary element
    if (filteredCourses.length > 0) {
        const totalItem = document.createElement('div');
        totalItem.classList.add('total-credits');
        totalItem.innerHTML = `<p>Total Credits: ${grandTotalCredits}</p> `;
        courseList.appendChild(totalItem);
    }
}
filterCourses('ALL')