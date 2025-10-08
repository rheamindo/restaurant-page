export default function loadMenu() {
  const content = document.getElementById('content');
  const menuDiv = document.createElement('div');
  menuDiv.classList.add('menu');

  menuDiv.innerHTML = `
    <h2>🍰 Our Sweet Menu</h2>
    <ul>
      <li>Sunny Cheesecake ☀️ – ₱180</li>
      <li>Chocolate Eclipse Mousse 🍫 – ₱150</li>
      <li>Ray of Crème Brûlée 🔥 – ₱190</li>
      <li>Berry Beam Parfait 🍓 – ₱160</li>
      <li>Lemon Light Tart 🍋 – ₱140</li>
    </ul>
    <img src="https://images.unsplash.com/photo-1612197527762-3b5a68e8ef91?auto=format&fit=crop&w=800&q=80" alt="Dessert Menu" class="menu-img">
  `;

  content.appendChild(menuDiv);
}
