
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
        config: "Config",
      },
      errors: {
        update_config: {
          title: "Update Config Error",
          message: "An error occurred while trying to update config.",
        }
      },
      success: {
        update_config: {
          title: "Update Config Success",
          message: "Config updated successfully.",
        }
      },
    },
    searchfield: {
      label: "Search",
      placeholder: "Search...",
      buttons: {
        search: {
          tooltip: "Search",
        },
      }
    },
    layout: {
      log_in: {
        navbar: {
          home: "Home",
          inventory: "Inventory",
        },
      },
    },
    forms: {
      config: {
        tabs: {
          general: {
            title: "General",
            fields: {
              my_address: {
                label: "My Address",
                placeholder: "My Address",
                error: "Invalid address",
                tooltip: "The HTTP address of the server",
              },
              spoof_mastery_rank: {
                label: "Spoof Mastery Rank",
                placeholder: "Spoof Mastery Rank",
                error: "Invalid rank",
                tooltip: "This wil spoof your mastery rank",
              },
              auto_create_account: {
                label: "Auto Create Account",
                error: "Invalid account",
                tooltip: "Create a new account automatically when you login",
              },
              skip_storyMode_choice: {
                label: "Skip Story Mode Choice",
                error: "Invalid choice",
                tooltip: "Ship the story mode choice",
              },
              skip_tutorial: {
                label: "Skip Tutorial",
                error: "Invalid tutorial",
                tooltip: "Skip the tutorial",
              },
              unlock_all_scans: {
                label: "Unlock All Scans",
                error: "Invalid scans",
                tooltip: "Will unlock all scans for you",
              },
              unlock_all_missions: {
                label: "Unlock All Missions",
                error: "Invalid missions",
                tooltip: "Will unlock all missions for you",
              },
              unlock_all_quests: {
                label: "Unlock All Quests",
                error: "Invalid quests",
                tooltip: "Will unlock all quests for you",
              },
              infinite_resources: {
                label: "Infinite Resources",
                error: "Invalid resources",
                tooltip: "Will give you infinite resources",
              },
              unlock_all_ship_features: {
                label: "Unlock All Ship Features",
                error: "Invalid features",
                tooltip: "Will unlock all ship features for you",
              },
              unlock_all_ship_decorations: {
                label: "Unlock All Ship Decorations",
                error: "Invalid decorations",
                tooltip: "Will unlock all ship decorations for you",
              },
              unlock_all_flavour_items: {
                label: "Unlock All Flavour Items",
                error: "Invalid items",
                tooltip: "Will unlock all flavour items for you",
              },
              unlock_all_skins: {
                label: "Unlock All Skins",
                error: "Invalid skins",
                tooltip: "Will unlock all skins for you",
              },
            },
            buttons: {
              save: {
                label: "Save",
              },
            },
          }
        }
      },
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
          submit: "Login",
        },
      }
    },
    mod_item: {
      fields: {
        quantity: "<qty/> <blue>{{quantity}}</blue>",
        mod_rank: "Rank: <blue>{{mod_rank}}</blue>/<blue>{{mod_max_rank}}</blue>",
      },
    },
  },
  context: {},
  pages: {
    home: {
      cards: {
        platinum: {
          title: "Platinum",
          footer: "You have <blue>{{count}}</blue> platinum",
        },
        credits: {
          title: "Credits",
          footer: "You have <blue>{{count}}</blue> credits",
        },
        endo: {
          title: "Endo",
          footer: "You have <blue>{{count}}</blue> endo",
        }
      }
    },
    inventory: {
      tabs: {
        mods: {
          title: "Mods",
        },
        items: {
          title: "Items",
        },
        weapons: {
          title: "Weapons",
        },
      },
    },
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
