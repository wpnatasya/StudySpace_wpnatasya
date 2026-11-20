/* Demo records and shared in-memory application state. */
let users=JSON.parse(localStorage.getItem('studyspaceUsers')||'[]');
let currentUser=JSON.parse(sessionStorage.getItem('studyspaceCurrentUser')||localStorage.getItem('studyspaceCurrentUser')||'null');
function saveUsers(){localStorage.setItem('studyspaceUsers',JSON.stringify(users));}
function saveCurrentUser(){if(currentUser){sessionStorage.setItem('studyspaceCurrentUser',JSON.stringify(currentUser));localStorage.setItem('studyspaceCurrentUser',JSON.stringify(currentUser));}else{sessionStorage.removeItem('studyspaceCurrentUser');localStorage.removeItem('studyspaceCurrentUser');}}
const rooms=[
    {
        id: 'R-01',
        name: 'Silent Study Room 01',
        type: 'Silent Study',
        capacity: 2,
        location: 'Library · Level 2',
        facilities: ['Quiet area', 'Power outlets'],
        status: 'Available',
        icon: 'bi-book',
        tone: 'purple',
        image: 'https://1.bp.blogspot.com/-l3ZxPxVlDjI/Xw2Eqe7MimI/AAAAAAAAAec/E46_kTojpGwLXjHnV6Xkq6oJRJWG9KZGACLcBGAsYHQ/d/1280px-LMU-Philologicum_Lesepl%25C3%25A4tze.jpg?'
    },
    {
        id: 'R-02',
        name: 'Silent Study Room 02',
        type: 'Silent Study',
        capacity: 2,
        location: 'Library · Level 2',
        facilities: ['Quiet area', 'Window view'],
        status: 'Occupied',
        icon: 'bi-journal-bookmark',
        tone: 'purple',
        image: 'https://www.eandy.com/news/images/_R8A9681.jpg?'
    },
    {
        id: 'R-07',
        name: 'Silent Study Room 03',
        type: 'Silent Study',
        capacity: 1,
        location: 'Library · Level 3',
        facilities: ['Quiet area', 'Desk lamp'],
        status: 'Available',
        icon: 'bi-book-half',
        tone: 'purple',
        image: 'https://dif1tzfqclj9f.cloudfront.net/000_clients/1317792/page/w1000-1317792rZF58Yna.jpg?'
    },
    {
        id: 'R-10',
        name: 'Silent Study Room 04',
        type: 'Silent Study',
        capacity: 2,
        location: 'Library · Level 3',
        facilities: ['Quiet area', 'Power outlets'],
        status: 'Available',
        icon: 'bi-journal',
        tone: 'purple',
        image: 'https://prcdn.freetls.fastly.net/release_image/18760/1576/18760-1576-525b76db359b50580bae81d38c9bd336-3900x2194.jpg?auto=webp&bg-color=fff&fit=bounds&format=jpeg&height=1350&quality=85,65&width=1950&'
    },

    // DISCUSSION ROOMS
    {
        id: 'R-03',
        name: 'Discussion Room 01',
        type: 'Discussion Room',
        capacity: 6,
        location: 'Learning Hub · Level 1',
        facilities: ['Whiteboard', 'Display screen'],
        status: 'Available',
        icon: 'bi-people',
        tone: 'green',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85'
    },
    {
        id: 'R-04',
        name: 'Discussion Room 02',
        type: 'Discussion Room',
        capacity: 6,
        location: 'Learning Hub · Level 1',
        facilities: ['Whiteboard', 'Video conference'],
        status: 'Occupied',
        icon: 'bi-chat-square-dots',
        tone: 'green',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85'
    },
    {
        id: 'R-08',
        name: 'Discussion Room 03',
        type: 'Discussion Room',
        capacity: 4,
        location: 'Learning Hub · Level 2',
        facilities: ['Whiteboard', 'Wi-Fi'],
        status: 'Occupied',
        icon: 'bi-people-fill',
        tone: 'green',
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85'
    },
    {
        id: 'R-11',
        name: 'Discussion Room 04',
        type: 'Discussion Room',
        capacity: 6,
        location: 'Learning Hub · Level 2',
        facilities: ['Whiteboard', 'Display screen'],
        status: 'Available',
        icon: 'bi-chat-square-text',
        tone: 'green',
        image: 'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&w=900&q=85'
    },

    // PROJECT STUDIOS
    {
        id: 'R-05',
        name: 'Project Studio 01',
        type: 'Project Studio',
        capacity: 8,
        location: 'Innovation Block · Level 3',
        facilities: ['Projector', 'Wi-Fi'],
        status: 'Available',
        icon: 'bi-laptop',
        tone: 'orange',
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=85'
    },
    {
        id: 'R-06',
        name: 'Project Studio 02',
        type: 'Project Studio',
        capacity: 8,
        location: 'Innovation Block · Level 3',
        facilities: ['Smart display', 'Power outlets'],
        status: 'Available',
        icon: 'bi-easel',
        tone: 'orange',
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85'
    },
    {
        id: 'R-09',
        name: 'Project Studio 03',
        type: 'Project Studio',
        capacity: 8,
        location: 'Innovation Block · Level 3',
        facilities: ['Projector', 'Video conference'],
        status: 'Available',
        icon: 'bi-display',
        tone: 'orange',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=85'
    },
    {
        id: 'R-12',
        name: 'Project Studio 04',
        type: 'Project Studio',
        capacity: 8,
        location: 'Innovation Block · Level 2',
        facilities: ['Smart display', 'Wi-Fi'],
        status: 'Occupied',
        icon: 'bi-easel2',
        tone: 'orange',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=85'
    }
];

const today=new Date();today.setHours(0,0,0,0);const dateOffset=n=>{const d=new Date(today);d.setDate(d.getDate()+n);return d.toISOString().slice(0,10)};
let bookings=JSON.parse(localStorage.getItem('studyspaceBookings')||'null')||[
 {id:'BK1001',roomId:'R-03',date:dateOffset(1),start:'14:00',duration:2,people:4,status:'Upcoming',owner:'student@studyspace.edu'},
 {id:'BK1002',roomId:'R-01',date:dateOffset(3),start:'09:00',duration:1,people:1,status:'Upcoming',owner:'student@studyspace.edu'},
 {id:'BK1003',roomId:'R-05',date:dateOffset(-2),start:'10:00',duration:2,people:5,status:'Completed',owner:'student@studyspace.edu'},
 {id:'BK1004',roomId:'R-04',date:dateOffset(2),start:'15:00',duration:1,people:3,status:'Upcoming',owner:'aina@studyspace.edu'},
 {id:'BK1005',roomId:'R-06',date:dateOffset(4),start:'11:00',duration:2,people:6,status:'Upcoming',owner:'aina@studyspace.edu'}
];
let students=[{name:'Student User',id:'2025123456',email:'student@studyspace.edu',since:'Jan 2026'},{name:'Aina Nordin',id:'2025123401',email:'aina@studyspace.edu',since:'Jan 2026'},{name:'Mikhail Tan',id:'2025123402',email:'mikhail@studyspace.edu',since:'Feb 2026'},{name:'Sofia Yasmin',id:'2025123403',email:'sofia@studyspace.edu',since:'Feb 2026'},{name:'Daniel Lee',id:'2025123404',email:'daniel@studyspace.edu',since:'Mar 2026'}];
let bookingChart=null,reportChart=null;
function saveBookings(){localStorage.setItem('studyspaceBookings',JSON.stringify(bookings));}
document.addEventListener('DOMContentLoaded',()=>{const todayInput=document.getElementById('bookingDate');if(todayInput)todayInput.min=dateOffset(0)});
