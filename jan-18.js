let courses = [
    { title: "JS", duration: 2, top: ["architecture", "C"] },
    { title: "Python", duration: 3, top: ["data analysis", "automation", "architecture", "C"] },
    { title: "React", duration: 4, top: ["components", "hooks"] },
    { title: "Node.js", duration: 3, top: ["backend", "APIs", "C"] },
    { title: "TypeScript", duration: 2, top: ["type safety", "OOP", "architecture", "C"] },
    { title: "SQL", duration: 2, top: ["databases", "queries"] }
]


function getCourse() {
    return new Promise((resolve, reject) => {
        let delay = Math.floor(Math.random()* 3000) + 1000
        setTimeout(() => {
            resolve(courses[Math.floor(Math.random() * courses.length)])
        }, delay)
    })
}


async function getCourses() {
    let course_one = await getCourse()
    let course_two = await getCourse()
    
    let result = {
        title: course_one.title + "+" + course_two.title,
        duration: course_one.duration + course_two.duration,
        top: [...new Set([...course_one.top, ...course_two.top])]
    }
    return result
}

getCourses().then((result) => console.log(result))

