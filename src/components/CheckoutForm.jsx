import { useState } from "react";

const initialForm = { name: "", email: "", phone: "", address: "", payment: "delivery" };

function CheckoutForm({ order, onComplete }) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  function change(event) { const { name, value } = event.target; setForm((current) => ({ ...current, [name]: value })); setErrors((current) => ({ ...current, [name]: "" })); setSuccess(false); }
  function submit(event) {
    event.preventDefault(); const nextErrors = {};
    if (!order.length) nextErrors.order = "Add at least one product before placing your order.";
    if (!form.name.trim()) nextErrors.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Enter a valid email address.";
    if (!form.phone.trim()) nextErrors.phone = "Please enter your phone number.";
    if (!form.address.trim()) nextErrors.address = "Please enter a delivery address.";
    setErrors(nextErrors); if (Object.keys(nextErrors).length) return;
    setSuccess(true); setForm(initialForm); onComplete();
  }
  const fieldClass = (key) => `mt-1 w-full rounded-lg border bg-white px-3 py-2 text-sm outline-none transition focus:ring-2 focus:ring-orange-500 ${errors[key] ? "border-red-400" : "border-slate-300 focus:border-orange-500"}`;
  return <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
    <h2 className="text-lg font-bold">Place your order</h2><p className="mt-1 text-sm text-slate-500">We’ll confirm your delivery details.</p>
    {success && <div role="status" className="mt-4 rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800"><strong>Order placed successfully!</strong><br />Thank you for shopping with SportStore.</div>}
    {errors.order && <p role="alert" className="mt-4 rounded-lg bg-red-50 p-3 text-sm text-red-700">{errors.order}</p>}
    <form onSubmit={submit} noValidate className="mt-4 space-y-3">
      <label className="block text-sm font-semibold">Full name<input name="name" value={form.name} onChange={change} className={fieldClass("name")} placeholder="e.g. Ahmad Rahimi" />{errors.name && <span className="mt-1 block text-xs text-red-600">{errors.name}</span>}</label>
      <label className="block text-sm font-semibold">Email<input name="email" type="email" value={form.email} onChange={change} className={fieldClass("email")} placeholder="you@example.com" />{errors.email && <span className="mt-1 block text-xs text-red-600">{errors.email}</span>}</label>
      <label className="block text-sm font-semibold">Phone number<input name="phone" type="tel" value={form.phone} onChange={change} className={fieldClass("phone")} placeholder="e.g. 070 123 4567" />{errors.phone && <span className="mt-1 block text-xs text-red-600">{errors.phone}</span>}</label>
      <label className="block text-sm font-semibold">Delivery address<textarea name="address" value={form.address} onChange={change} rows="2" className={fieldClass("address")} placeholder="City, street and area" />{errors.address && <span className="mt-1 block text-xs text-red-600">{errors.address}</span>}</label>
      <fieldset><legend className="text-sm font-semibold">Payment method</legend><label className="mt-2 flex items-center gap-2 text-sm text-slate-600"><input type="radio" name="payment" value="delivery" checked={form.payment === "delivery"} onChange={change} className="accent-orange-500" />Cash on delivery</label><label className="mt-2 flex items-center gap-2 text-sm text-slate-400"><input type="radio" disabled />Online payment <span>(not available yet)</span></label></fieldset>
      <button className="w-full rounded-lg bg-orange-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">Place order</button>
    </form>
  </section>;
}
export default CheckoutForm;
