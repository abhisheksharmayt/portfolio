import {html, css, bootstrap, reactjs, nodejs, expressjs, mongodb, javascript} from '../../svg-icons/svg'
export const data = [
    {
        id: 1,
        title: "CAMPUS TOUR",
        dates: "Present",
        duties: [
            "Full C.R.U.D website where user can add their campus, and other users can interact by adding their reviews about campuses.",
            "Added authentication and error-handling.",
        ],
        tech_stack:[
            {
                title: 'HTML',
                svg: html
            },
            {
                title: 'CSS',
                svg: css
            },
            {
                title: 'JavaScript',
                svg: javascript
            },
            {
                title: 'Bootstrap',
                svg: bootstrap
            },
            {
                title: 'NodeJs',
                svg: nodejs
            },
            {
                title: 'ExpressJs',
                svg: expressjs
            },
            {
                title: 'MongoDB',
                svg: mongodb
            }
        ],
        short: "CAMPUS TOUR"
    },
    {
        id: 2,
        title: "SORTING VISUALIZER",
        dates: "JAN 2022",
        duties: [
            "Shows working of Bubble Sort, Insertion Sort, Selection Sort and Merge Sort by visualizing them.",
        ],
        tech_stack: [
            {
                title: 'HTML',
                svg: html
            },
            {
                title: 'CSS',
                svg: css
            },
            {
                title: 'JavaScript',
                svg: javascript
            },
            {
                title: 'Bootstrap',
                svg: bootstrap
            },
        ],
        short: "SORTING ALGO"
    },
    {
        id: 3,
        title: "FOCUSED CHROME EXTENSION",
        dates: "MARCH 2022",
        duties: [
            "A utility chrome extension which helps to customize youtube by manipulating DOM.",
            "It allows you to add bookmarks to any video and stores it using chrome storage API",
        ],
        tech_stack: [
            {
                title: 'HTML',
                svg: html
            },
            {
                title: 'CSS',
                svg: css
            },
            {
                title: 'JavaScript',
                svg: javascript
            },
        ],
        short: "FOCUSED EXTENSION"
    }
]