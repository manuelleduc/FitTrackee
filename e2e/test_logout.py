from .utils import register_valid_user


class TestLogout:
    def test_user_can_log_out(self, selenium):
        user = register_valid_user(selenium)
        user_menu = selenium.find_element_by_class_name('nav-items-user-menu')
        logout_link = user_menu.find_elements_by_class_name('nav-item')[2]

        logout_link.click()
        selenium.implicitly_wait(1)

        nav = selenium.find_element_by_id('nav').text
        assert 'Register' in nav
        assert 'Login' in nav
        assert user['username'] not in nav
        assert 'Logout' not in nav
