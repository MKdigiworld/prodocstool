'use client'
import {useState} from 'react'
import {Moon,Sun} from 'lucide-react'

export default function Home(){
const[d,setD]=useState(0)
const tools=[
{id:1,n:'PDF to Word',i:'📄'},
{id:2,n:'Word to PDF',i:'📑'},
{id:3,n:'PDF Excel',i:'📊'},
{id:4,n:'PDF PPT',i:'🎯'},
{id:5,n:'Images PDF',i:'🖼️'},
{id:6,n:'PDF JPG',i:'🎨'},
{id:7,n:'Compress',i:'⚙️'},
{id:8,n:'Merge',i:'🔀'},
{id:9,n:'Split',i:'✂️'},
{id:10,n:'Rotate',i:'🔄'},
{id:11,n:'Delete',i:'🗑️'},
{id:12,n:'Extract',i:'📌'},
{id:13,n:'Watermark',i:'💧'},
{id:14,n:'Edit',i:'✏️'},
{id:15,n:'eSign',i:'🖊️'},
{id:16,n:'Protect',i:'🔒'}
]
return(<div className={d?'min-h-screen bg-gray-900 text-white':'min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100'}>
<header className={`${d?'bg-gray-800':'bg-white'} shadow sticky top-0 z-50`}>
<div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
<h1 className="text-3xl font-bold">ProDocsTool</h1>
<button onClick={()=>setD(1-d)}>{d?<Sun/>:<Moon/>}</button>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 py-12">
<div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-12 rounded-xl mb-12 text-center">
<h2 className="text-4xl font-bold mb-4">Powerful PDF Tools Online</h2>
<p className="text-lg mb-8">100% Secure • Zero File Retention • No Registration</p>
<button className={`${d?'bg-gray-700':'bg-white text-blue-600'} px-8 py-3 rounded-lg font-bold hover:shadow-lg`}>Get Started Free</button>
</div>
<h3 className="text-3xl font-bold mb-8">All PDF Tools</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
{tools.map(t=>(
<div key={t.id} className={`p-6 rounded-xl cursor-pointer hover:shadow-xl transition ${d?'bg-gray-800 hover:bg-gray-700':'bg-white hover:bg-blue-50'}`}>
<div className="text-5xl mb-3">{t.i}</div>
<h4 className="font-semibold">{t.n}</h4>
</div>
))}
</div>
</main>
<footer className={`${d?'bg-gray-800':'bg-gray-100'} py-8 mt-12 text-center text-sm text-gray-500`}>
<p>&copy; 2024 ProDocsTool • 100% Secure • Zero Data Retention</p>
</footer>
</div>)
}
