const orders=[
{id:1,customer:'Rahul',date:'2024-01-10',amount:1200,status:'Pending'},
{id:2,customer:'Anita',date:'2024-01-12',amount:2200,status:'Shipped'},
{id:3,customer:'Kiran',date:'2024-01-15',amount:800,status:'Cancelled'}
];

function showSection(id){
document.querySelectorAll('section').forEach(s=>s.classList.add('d-none'));
document.getElementById(id).classList.remove('d-none');
}

function render(data){
let t=document.getElementById('ordersTable');t.innerHTML='';
data.forEach(o=>{
t.innerHTML+=`<tr><td>${o.id}</td><td>${o.customer}</td><td>${o.date}</td><td>${o.amount}</td><td>${o.status}</td></tr>`;
});
}
render(orders);

searchInput.oninput=statusFilter.onchange=()=>{
const s=searchInput.value.toLowerCase();
const st=statusFilter.value;
render(orders.filter(o=>(o.customer.toLowerCase().includes(s)&&(st==='All'||o.status===st))));
};
