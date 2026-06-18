function loadNavbar() {
    const navbarHTML = `
    <nav class="navbar">
        <a href="index.html" id="nav-index">الرئيسية</a>
        <a href="visits.html" id="nav-visits">الزيارات</a>
        <a href="customers.html" id="nav-customers">العملاء</a>
        <a href="sales.html" id="nav-sales">المبيعات</a>
    </nav>`;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    
    // تحديد الصفحة الحالية وإضافة كلاس active
    const currentPage = window.location.pathname.split("/").pop();
    if (currentPage.includes('visits')) document.getElementById('nav-visits').classList.add('active');
    else if (currentPage.includes('customers')) document.getElementById('nav-customers').classList.add('active');
    else if (currentPage.includes('sales')) document.getElementById('nav-sales').classList.add('active');
    else document.getElementById('nav-index').classList.add('active');
}
