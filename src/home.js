export default function loadHome() {
  const content = document.getElementById('content');

  const homeDiv = document.createElement('div');
  homeDiv.classList.add('home');

  homeDiv.innerHTML = `
    <h1>☀️ Welcome to Ray of Delights 🍓</h1>
    <img src="https://images.unsplash.com/photo-1565958011705-44e211b47c5b?auto=format&fit=crop&w=800&q=80" alt="Desserts" class="hero-img">
    <p>At Ray of Delights, every dessert shines as bright as the morning sun! 🌞</p>
    <p>From silky cheesecakes to rich chocolate dreams, every bite is a little ray of sweetness.</p>
  `;

  content.appendChild(homeDiv);
}
