import {html, css, bootstrap, tailwindCss, reactjs, nodejs, expressjs, mongodb, javascript} from '../../svg-icons/svg'
import tesla from '../../images/projects_thumbnail/tesla.png'
import reactMovie from '../../images/projects_thumbnail/reactMovie.png'
import sorting from '../../images/projects_thumbnail/sorting.png'
import campusTour from '../../images/projects_thumbnail/campusTour.png'
import sudoku from '../../images/projects_thumbnail/sudoku.png'
import techBeats from '../../images/projects_thumbnail/techBeats.png'
export const projectsData = [
    {
        id: 994,
        title: "Tech Beats",
        dates: "Jan 2023",
        github: "https://github.com/abhisheksharmayt",
        deployed: "https://techbeats.vercel.app/",
        img: techBeats,
        duties: [],
        tech_stack:[
            {
                id: '1a',
                title: 'HTML',
                svg: html
            },
            {
                id: '1b',
                title: 'CSS',
                svg: css
            },
            {
                id: '1c',
                title: 'JavaScript',
                svg: javascript
            },
            {
                id: '1d',
                title: 'Tailwind CSS',
                svg: tailwindCss
            },
            {
                id: '1e',
                title: 'ReactJS',
                svg: reactjs
            },
        ],
        short: "techBeats"
    },
    {
        id: 995,
        title: "Tesla Ecommerce Clone",
        dates: "Nov 2022",
        github: "https://github.com/abhisheksharmayt/tesla-clone",
        deployed: "https://tesla-ecom-clone.vercel.app/",
        img: tesla,
        duties: [
            "Full C.R.U.D website where user can add their campus, and other users can interact by adding their reviews about campuses.",
            "Added authentication and error-handling.",
        ],
        tech_stack:[
            {
                id: '1a',
                title: 'HTML',
                svg: html
            },
            {
                id: '1b',
                title: 'CSS',
                svg: css
            },
            {
                id: '1c',
                title: 'JavaScript',
                svg: javascript
            },
            {
                id: '1d',
                title: 'Tailwind CSS',
                svg: tailwindCss
            },
            {
                id: '1e',
                title: 'ReactJS',
                svg: reactjs
            },
        ],
        short: "teslaEcomClone"
    },
    {
        id: 996,
        title: "React Movie",
        dates: "Nov 2022",
        github: "https://github.com/abhisheksharmayt/reactMovie",
        deployed: "https://1reactmovie.netlify.app/",
        img: reactMovie,
        duties: [
            "Full C.R.U.D website where user can add their campus, and other users can interact by adding their reviews about campuses.",
            "Added authentication and error-handling.",
        ],
        tech_stack:[
            {
                id: '1a',
                title: 'HTML',
                svg: html
            },
            {
                id: '1b',
                title: 'CSS',
                svg: css
            },
            {
                id: '1c',
                title: 'JavaScript',
                svg: javascript
            },
            {
                id: '1d',
                title: 'ReactJS',
                svg: reactjs
            },
        ],
        short: "reactMovie"
    },
    {
        id: 997,
        title: "Campus Tour",
        dates: "Dec 2022",
        github: "https://github.com/abhisheksharmayt/CampusTour",
        deployed: "https://github.com/abhisheksharmayt/CampusTour",
        img: campusTour,
        duties: [
            "Shows working of Bubble Sort, Insertion Sort, Selection Sort and Merge Sort by visualizing them.",
        ],
        tech_stack: [
            {
                id: '1a',
                title: 'HTML',
                svg: html
            },
            {
                id: '1b',
                title: 'CSS',
                svg: css
            },
            {
                id: '1c',
                title: 'JavaScript',
                svg: javascript
            },
            {
                id: '1d',
                title: 'Bootstrap',
                svg: bootstrap
            },
            {
                id: '1e',
                title: 'NodeJS',
                svg: nodejs
            },
            {
                id: '1f',
                title: 'ExpressJS',
                svg: expressjs
            },
            {
                id: '1g',
                title: 'MongoDB',
                svg: mongodb
            },
        ],
        short: "campusTour"
    },
    {
        id: 998,
        title: "Sorting Visualizer",
        dates: "JAN 2022",
        github: "https://github.com/abhisheksharmayt/Sorting-Visualizer",
        deployed: "https://sortvisualizerr.netlify.app/",
        img: sorting,
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
        short: "sortingVisualizer"
    },
    {
        id: 999,
        title: "Sudoku Visualizer",
        dates: "JAN 2022",
        github: "https://github.com/abhisheksharmayt/Sudoku-Solver",
        deployed: "https://abhisheksharmayt.github.io/Sudoku-Solver/",
        img: sudoku,
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
        short: "sodokuVisualizer"
    },
]