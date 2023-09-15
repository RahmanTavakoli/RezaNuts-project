

exports.isAuthenticated = (req, res, next) => {
    // اگر کاربر احراز هویت شده باشد (وجود داشته باشد)، ادامه بده
    if (req.isAuthenticated()) {
      return next();
    }
    // در غیر این صورت، به صفحه ورود منتقل شو
    res.redirect('/404'); // یا هر مسیری که به صفحه ورود منتقل می‌کند
  }

// میان‌وسیه احراز هویت برای دسترسی به داشبورد مدیر
exports.ensureAdminAuthenticated = (req, res, next) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
        return next();
    }
    res.redirect("/404"); // یا هر مسیری که به صفحه ورود منتقل می‌کند
}


// میان‌وسیه احراز هویت برای دسترسی به داشبورد کاربر
exports.ensureUserAuthenticated = (req, res, next) => {
    if (req.isAuthenticated() && req.user.isUser) {
        return next();
    }
    res.redirect("/404"); // یا هر مسیری که به صفحه ورود منتقل می‌کند
}