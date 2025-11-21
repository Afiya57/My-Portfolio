import { useState } from 'react';
export default function Contact(){
const [formData,setFormData]=useState({name:'',email:'',message:''});
const handleSubmit=e=>{e.preventDefault(); alert(`Message sent! Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);};
return(
<div className="container section">
<h1>Contact Me</h1>
<div className="card">
<p>Email: aafiyahhussain57@gmail.com</p>
<p>LinkedIn: linkedin.com/in/afia-hussain</p>
<p>GitHub: github.com/Afiya57</p>
</div>
<form onSubmit={handleSubmit}>
<input type="text" placeholder="Name" value={formData.name} onChange={e=>setFormData({...formData,name:e.target.value})} required />
<input type="email" placeholder="Email" value={formData.email} onChange={e=>setFormData({...formData,email:e.target.value})} required />
<textarea placeholder="Message" value={formData.message} onChange={e=>setFormData({...formData,message:e.target.value})} required />
<button type="submit">Submit</button>
</form>
</div>
);
}