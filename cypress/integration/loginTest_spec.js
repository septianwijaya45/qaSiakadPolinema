// ================= This is File Code About Testing Siakad Login ================= //

describe("User Melakukan Login pada Website Siakad Polinema", () => {

    // **** 1. First Testing
    it("Login menggunakan password dan username yang salah", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('1122334455');
        cy.get('#password').type('1122334455');
        cy.get('#form_login > div.form-actions > button').click() 
        cy.contains('Username / Password Salah');
    });

    // **** 2. Second Testing
    it("User memasukkan password salah username benar", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('1931733056');
        cy.get('#password').type('1122334455');
        cy.get('#form_login > div.form-actions > button').click() 
        cy.contains('Username / Password Salah');
    });

    // **** 3. Third Testing
    it("User memasukkan username salah dan password benar", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('1931231121');
        cy.get('#password').type('test'); // Sebelumnya mohon maaf, saya tidak bisa memasukkan data yang benar karena hasil akan mengeluarkan value yang sama
        cy.get('#form_login > div.form-actions > button').click() 
        cy.contains('Username / Password Salah');
    });

    // **** 4. Fourth Testing
    it("User tidak memasukkan username dan password", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').clear();
        cy.get('#password').clear();
        cy.get('#form_login > div.form-actions > button').click() 
        cy.contains('Username harus diisi');
    });

    // **** 5. Fifth Testing
    it("User memasukkan username dan password benar", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('1931733056');
        cy.get('#password').type('asdads');     // Mohon maaf password Saya salahkan, karena sangat rentan penyebaran akun dan penyalahgunaan akun
        cy.get('#form_login > div.form-actions > button').click() 
        cy.contains('Username / Password Salah');
    });

    // **** 6. Sixth Testing
    it("User memasukkan username dan mengosongi password", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').type('1931733056');
        cy.get('#password').clear();
        cy.get('#form_login > div.form-actions > button').click() 
        cy.contains('Password harus diisi');
    });

    // **** 7. Seventh Testing
    it("User memasukkan password dan mengosongi username", () => {
        cy.visit('http://siakad.polinema.ac.id/');
        cy.get('#username').clear();
        cy.get('#password').type('1931733046');
        cy.get('#form_login > div.form-actions > button').click() 
        cy.contains('Username harus diisi');
    });
});