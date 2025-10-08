export default function loadContact() {
  const content = document.getElementById('content');
  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact');

  contactDiv.innerHTML = `
    <h2>📞 Contact Ray of Delights</h2>
    <p>Want to order something sweet or plan a celebration?</p>
    <p>Email us at <strong>hello@rayofdelights.com</strong></p>
    <p>Visit us at: 123 Sunshine Lane, Dessert City 🍦</p>
    <img src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80" alt="Dessert shop" class="contact-img">
  `;

  content.appendChild(contactDiv);
}
