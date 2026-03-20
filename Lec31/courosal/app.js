let arr =[
    'https://images.unsplash.com/photo-1723109438209-2f6402e08c7c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG51ZGUlMjBnaXJsfGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1655455561178-0d3c092d0edb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjYyfHxudWRlJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1599470609787-113eac30917d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG51ZGVzJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1587129970901-95ac2311fc21?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG51ZGVzJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1598046925099-ed5726d7c766?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fG51ZGVzJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D'
];








let img = document.querySelector('img');
let n = 0;
setInterval(() => {
    img.setAttribute('src',arr[n]);
    n = (n + 1) % arr.length;
},3000);