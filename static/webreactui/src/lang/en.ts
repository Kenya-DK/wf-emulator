
export const en = {
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  components: {
    modals: {
      base: {
        buttons: {
          confirm: "Confirm",
          cancel: "Cancel",
        },
      },
    },
    user_menu: {
      items: {
        app_label: "Application",
        logout: "Logout",
      }
    },
    layout: {
      log_in: {
        navbar: {
          home: "Home",
        },
      },
    },
    forms: {
      log_in: {
        title: "Open Wf Login",
        register: "Don't have an account? Register",
        fields: {
          email: {
            label: "Email",
            placeholder: "Email",
            error: "Invalid email",
          },
          password: {
            label: "Password",
            placeholder: "Password",
            error: "Password should include at least 6 characters",
          }
        },
        buttons: {
          submit: "Log In",
        },
      }
    },
  },
  context: {},
  pages: {
    auth: {
      errors: {
        login: {
          title: "Login Error",
          message: "An error occurred while trying to login.",
        }
      },
      success: {
        login: {
          title: "Login Success",
          message: "Welcome back! {{name}}",
        }
      }
    },
  },
}
