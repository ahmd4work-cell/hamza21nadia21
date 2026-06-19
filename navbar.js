// navbar.js
function renderNavbar() {
    const navHTML = `
        <nav>
            <a href="customers.html">العملاء</a>
            <a href="visits.html">الزيارات</a>
            <a href="sales.html">المبيعات</a>
            <a href="opportunities.html">الفرص</a>
        </nav>
    `;
    // يبحث عن مكان اسمه 'navbar-container' ويضع القائمة بداخله
    document.getElementById('navbar-container').innerHTML = navHTML;
}

// تشغيل الدالة عند تحميل الصفحة
window.onload = renderNavbar;
